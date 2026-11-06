(function(){
  'use strict';
  const data=window.RURAL_LORD_WORLD;
  if(!data)return;
  const $=(selector,root=document)=>root.querySelector(selector);
  const node=(tag,cls,txt)=>{
    const element=document.createElement(tag);
    if(cls)element.className=cls;
    if(txt!==undefined)element.textContent=txt;
    return element;
  };
  const image=(src,alt)=>{
    const element=node('img');element.src=src;element.alt=alt;element.loading='lazy';element.decoding='async';
    return element;
  };
  const personDialog=$('#person-dialog'),spoilerDialog=$('#spoiler-confirm');
  const groupMap=new Map(data.groups.map(g=>[g.id,g.name]));
  let unlocked=false,personGroup='all',factionGroup='all',activePerson=null,lastFocus=null;

  function renderLocations(){
    const grid=$('#location-grid');if(!grid)return;
    grid.replaceChildren();
    for(const place of data.locations){
      const card=node('article','location-card');
      card.append(node('span','location-code',place.tag),node('h3','',place.name),node('span','location-direction',place.dir),node('p','',place.desc));
      const tags=node('div','location-tags');
      for(const tag of place.goods)tags.append(node('span','',tag));
      card.append(tags);
      if(place.secret&&unlocked){
        const reveal=node('div','location-reveal');
        reveal.append(node('span','location-code','RESTRICTED RECORD'),node('p','',place.secret));
        card.append(reveal);
      }
      grid.append(card);
    }
  }
  function currentPeople(){
    const search=($('#person-query')?.value||'').trim().toLocaleLowerCase();
    return data.persons.filter(person=>{
      if(person.hidden&&!unlocked)return false;
      if(personGroup!=='all'&&person.group!==personGroup)return false;
      const match=[person.name,person.title,person.short,person.long,groupMap.get(person.group)||''];
      if(unlocked&&person.secret)match.push(person.secret);
      return !search||match.join(' ').toLocaleLowerCase().includes(search);
    });
  }
  function renderPersonTabs(){
    const host=$('#person-tabs');if(!host)return;
    host.replaceChildren();
    const groups=[{id:'all',name:'전체'},...data.groups.filter(g=>!g.id.startsWith('secret')||unlocked)];
    for(const group of groups){
      const b=node('button','tab'+(personGroup===group.id?' active':''),group.name);
      b.type='button';b.dataset.group=group.id;b.setAttribute('aria-pressed',String(personGroup===group.id));
      b.addEventListener('click',()=>{personGroup=group.id;renderPersonTabs();renderPeople();});
      host.append(b);
    }
  }
  function renderPeople(){
    const grid=$('#person-grid');if(!grid)return;
    grid.replaceChildren();
    const list=currentPeople();
    for(const person of list){
      const b=node('button','person-card');b.type='button';b.setAttribute('aria-label',person.name+' 상세 기록 열기');
      const pic=node('span','person-card-photo');pic.append(image(person.image,person.name+' 초상화'));
      const info=node('span','person-card-body');
      info.append(node('span','person-group',groupMap.get(person.group)||'인물'),node('strong','',person.name),node('small','',person.title));
      b.append(pic,info);b.addEventListener('click',()=>openPerson(person));grid.append(b);
    }
    if(!list.length)grid.append(node('p','empty','조건에 맞는 인물 기록이 없습니다.'));
    const count=$('#person-count');if(count)count.textContent=list.length+' / '+data.persons.length+' PORTRAITS';
  }
  function renderPersonDetail(){
    if(!activePerson)return;
    const p=activePerson;
    $('#person-type').textContent=groupMap.get(p.group)||'인물';
    $('#person-title').textContent=p.name;
    $('#person-role').textContent=p.title;
    $('#person-description').textContent=p.long;
    $('#person-image').replaceChildren(image(p.image,p.name+' 초상화'));
    const secret=$('#person-secret');secret.replaceChildren();
    if(p.secret){
      const content=node('div');
      content.append(node('span','','RESTRICTED / '+(unlocked?'UNLOCKED':'LOCKED')));
      if(unlocked){
        content.append(node('p','',p.secret));
      }else{
        content.append(node('p','','스포일러 보호된 추가 기록이 있어. 공개하기 전에 경고를 확인해 줘.'));
        const button=node('button','','스포일러 경고 확인하기');button.type='button';
        button.addEventListener('click',openSpoilerConfirm);content.append(button);
      }
      secret.append(content);
    }
  }
  function openPerson(person){
    activePerson=person;lastFocus=document.activeElement;
    renderPersonDetail();personDialog?.showModal();
  }
  function renderFactions(){
    const grid=$('#faction-grid');if(!grid)return;
    const labels={nation:'국가',religion:'종교·특수 조직',tribe:'엘프 세력',mercenary:'용병단',bandit:'도적단'};
    const available=data.factions.filter(f=>factionGroup==='all'||f.kind===factionGroup);
    grid.replaceChildren();
    for(const f of available){
      const card=node('article','faction-card');
      const top=node('div','faction-card-top');
      top.append(node('span','',labels[f.kind]||'세력'),node('span','','✦'));
      const body=node('div','faction-card-body');
      body.append(node('h3','',f.name),node('span','faction-location',f.home),node('p','',f.desc));
      if(f.secret&&unlocked)body.append(node('p','faction-secret',f.secret));
      card.append(top,body);grid.append(card);
    }
  }
  function renderFactionTabs(){
    const host=$('#faction-tabs');if(!host)return;
    const groups=[['all','전체'],['nation','국가'],['religion','종교 · 특수 조직'],['tribe','엘프'],['mercenary','용병단'],['bandit','도적단']];
    for(const [key,label] of groups){
      const b=node('button','tab'+(factionGroup===key?' active':''),label);b.type='button';b.dataset.kind=key;
      b.setAttribute('aria-pressed',String(factionGroup===key));
      b.addEventListener('click',()=>{
        factionGroup=key;
        host.querySelectorAll('button').forEach(x=>{const active=x.dataset.kind===key;x.classList.toggle('active',active);x.setAttribute('aria-pressed',String(active));});
        renderFactions();
      });
      host.append(b);
    }
  }
  function renderOrders(targetId,orders){
    const host=$('#'+targetId);if(!host)return;
    for(const order of orders){
      const row=node('div','order-row');
      row.append(node('strong','',order.lord),node('span','',order.seat),node('span','',order.unit),node('span','',order.sigil));
      host.append(row);
    }
  }
  function renderMonsters(){
    const host=$('#monster-grid');if(!host)return;
    for(const m of data.monsters){
      const card=node('article','monster-card');
      const pic=node('div','monster-art');pic.append(image(m.image,m.name+' 삽화'));
      const content=node('div','monster-copy');
      content.append(node('span','monster-species','MONSTER RECORD'),node('h3','',m.name),node('span','monster-chief','추장 · '+m.chief),node('p','',m.summary),node('p','monster-detail',m.features),node('p','monster-species','서식지 · '+m.habitat));
      card.append(pic,content);host.append(card);
    }
  }
  function renderGovernance(){
    const scale=$('#support-table');
    for(const tier of data.systems.supportTiers){
      const row=node('div','scale-line');
      row.append(node('strong','',tier.name),node('span','',tier.range),node('span','',tier.result));
      scale?.append(row);
    }
    const ranks=$('#rank-list');
    for(const rank of data.ranks){
      const row=node('div','rank-line');
      row.append(node('strong','',rank.name),node('span','','× '+rank.value.toFixed(1)));
      ranks?.append(row);
    }
    const calendar=$('#calendar-grid');
    for(const entry of data.calendar){
      const card=node('article','calendar-card');
      card.append(node('span','calendar-when',entry.when),node('h4','',entry.name),node('p','',entry.detail));
      calendar?.append(card);
    }
    const events=$('#event-grid');
    for(const event of data.systems.events){
      const card=node('article','event-card');
      card.append(node('span','',event.chance),node('h4','',event.name),node('p','',event.summary));
      events?.append(card);
    }
    const troops=$('#troop-ranks');
    data.systems.troopRanks.forEach(name=>troops?.append(node('span','',name)));
  }
  function renderSecrets(){
    const grid=$('#secret-grid');if(!grid)return;
    grid.replaceChildren();grid.hidden=!unlocked;
    if(!unlocked)return;
    data.secrets.forEach((s,i)=>{
      const card=node('article','secret-card');
      card.append(node('span','',String(i+1).padStart(2,'0')+' / '+s.category),node('h3','',s.heading),node('p','',s.content));
      grid.append(card);
    });
    const link=node('a','secret-link');
    link.href='../hibicus/';
    link.append(node('strong','','잊힌 시대의 기록 더 살펴보기'),node('span','','하이비커스 연대기 세계관 아카이브 ↗'));
    grid.append(link);
  }
  function renderSpoilerState(){
    const button=$('#spoiler-toggle');if(button){
      button.textContent=unlocked?'스포일러 다시 잠그기 ↗':'스포일러 확인 후 열기 ↗';
      button.setAttribute('aria-expanded',String(unlocked));
    }
    $('#spoiler-gate')?.classList.toggle('unlocked',unlocked);
    if(!unlocked&&personGroup==='secret')personGroup='all';
    renderSecrets();renderPersonTabs();renderPeople();renderFactions();renderLocations();
    if(activePerson){
      if(activePerson.hidden&&!unlocked){personDialog?.close();activePerson=null;}
      else renderPersonDetail();
    }
  }
  function openSpoilerConfirm(){if(!spoilerDialog?.open)spoilerDialog?.showModal();}
  function connectDialogs(){
    $('#person-close')?.addEventListener('click',()=>personDialog.close());
    personDialog?.addEventListener('click',e=>{if(e.target===personDialog)personDialog.close();});
    personDialog?.addEventListener('close',()=>{activePerson=null;if(lastFocus?.isConnected)lastFocus.focus();});
    $('#spoiler-toggle')?.addEventListener('click',()=>{
      if(unlocked){unlocked=false;renderSpoilerState();}
      else openSpoilerConfirm();
    });
    $('#spoiler-cancel')?.addEventListener('click',()=>spoilerDialog.close());
    $('#spoiler-confirm-open')?.addEventListener('click',()=>{
      spoilerDialog.close();unlocked=true;renderSpoilerState();
    });
    spoilerDialog?.addEventListener('click',e=>{if(e.target===spoilerDialog)spoilerDialog.close();});
  }
  renderPersonTabs();renderFactionTabs();renderFactions();renderPeople();
  $('#person-query')?.addEventListener('input',renderPeople);
  renderLocations();renderOrders('knight-orders',data.knightOrders);renderOrders('imperial-orders',data.imperialOrders);
  renderMonsters();renderGovernance();connectDialogs();renderSecrets();renderSpoilerState();
})();