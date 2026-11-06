(function(){
  'use strict';
  const data=window.HIBICUS_WORLD;
  if(!data)return;
  const $=(q,root=document)=>root.querySelector(q);
  const el=(tag,cls,text)=>{
    const node=document.createElement(tag);
    if(cls)node.className=cls;
    if(text!==undefined)node.textContent=text;
    return node;
  };
  const img=(source,alt)=>{
    const node=el('img');node.src=source;node.alt=alt;node.loading='lazy';node.decoding='async';
    node.onerror=()=>{node.remove();};
    return node;
  };
  const labels={nation:'국가 · 주요 세력',power:'마녀 · 길드',religion:'교단',other:'기타 세력'};
  const byId=new Map(data.factions.map(f=>[f.id,f]));
  let currentFactionFilter='all',search='',currentPersonFaction='all',unlocked=false,activeDetail=null,lastFocus=null;
  const detailDialog=$('#detail-dialog'),confirmDialog=$('#spoiler-confirm');
  const safeReplace=(selector,items)=>$(selector)?.replaceChildren(...items);
  function renderInn(){
    const rumors=data.intro.slice(0,3).map(item=>{
      const p=el('p','');p.append(el('span','rumor-bullet','“'),document.createTextNode(item.text),el('span','rumor-bullet','”'));return p;
    });
    safeReplace('#inn-rumors',rumors);
  }
  function renderFactions(){
    const target=$('#faction-grid');if(!target)return;
    const visible=data.factions.filter(f=>currentFactionFilter==='all'||f.category===currentFactionFilter);
    target.replaceChildren();
    for(const f of visible){
      const card=el('button','faction-card');card.type='button';card.dataset.category=f.category;
      card.setAttribute('aria-label',f.name+' 상세 기록 열기');
      const top=el('div','faction-top');
      top.append(el('span','faction-symbol',f.symbol),el('span','faction-eyebrow',f.eyebrow));
      const body=el('div','faction-body');
      body.append(el('span','faction-kind',labels[f.category]),el('h3','',f.name),el('p','',f.summary));
      const foot=el('div','faction-foot');
      foot.append(el('span','',f.location),el('span','','기록 보기 ↗'));
      card.append(top,body,foot);
      card.addEventListener('click',()=>showDetail('faction',f));
      target.append(card);
    }
    $('#faction-count').textContent=visible.length+' / '+data.factions.length+' FACTIONS';
  }
  function renderFactionControls(){
    document.querySelectorAll('[data-faction-filter]').forEach(button=>{
      button.addEventListener('click',()=>{
        currentFactionFilter=button.dataset.factionFilter;
        document.querySelectorAll('[data-faction-filter]').forEach(b=>{
          const active=b===button;
          b.classList.toggle('active',active);
          b.setAttribute('aria-pressed',String(active));
        });
        renderFactions();
      });
    });
  }
  function populateFactionSelect(){
    const select=$('#person-faction');if(!select)return;
    for(const faction of data.factions){
      if(!data.people.some(p=>p.faction===faction.id))continue;
      const option=el('option','',faction.name);option.value=faction.id;select.append(option);
    }
    select.addEventListener('change',v=>{currentPersonFaction=v.currentTarget.value;renderPeople();});
    $('#person-search')?.addEventListener('input',v=>{search=v.currentTarget.value.trim().toLocaleLowerCase();renderPeople();});
  }
  function renderPeople(){
    const target=$('#person-grid');if(!target)return;
    const people=data.people.filter(p=>{
      const fields=[p.name,p.role,p.summary,p.description,byId.get(p.faction)?.name||''];
      if(unlocked&&p.secret)fields.push(p.secret);
      return (currentPersonFaction==='all'||p.faction===currentPersonFaction)
        &&(!search||fields.join(' ').toLocaleLowerCase().includes(search));
    });
    target.replaceChildren();
    for(const p of people){
      const b=el('button','person-card');b.type='button';b.setAttribute('aria-label',p.name+' 상세 기록 열기');
      const art=el('span','person-art');art.append(img(p.image,p.name+' 초상화'));
      const body=el('span','person-body');
      body.append(el('span','person-faction',byId.get(p.faction)?.name||'인물'),el('strong','',p.name),el('small','',p.role));
      b.append(art,body);
      b.addEventListener('click',()=>showDetail('person',p));
      target.append(b);
    }
    if(!people.length)target.append(el('p','no-results','조건에 맞는 인물 기록이 없어. 다른 이름이나 소속으로 검색해 줘.'));
    $('#person-count').textContent=people.length+' / '+data.people.length+' PERSONNEL';
  }
  function renderRegions(){
    const records=data.regions.map(r=>{
      const article=el('article','region-card');
      const top=el('div','region-top');
      top.append(el('span','region-code',r.subtitle),el('span','region-accent','✦'));
      const body=el('div','region-body');body.append(el('h3','',r.name),el('span','region-location',r.location),el('p','',r.description));
      const tags=el('div','location-tags');
      r.places.forEach(place=>tags.append(el('span','',place)));
      body.append(tags);
      article.append(top,body);
      return article;
    });
    safeReplace('#region-grid',records);
  }
  function renderChronicles(){
    const entries=data.chronicles.map((entry,i)=>{
      const row=el('article','chronicle-entry');
      const marker=el('div','chronicle-marker');
      marker.append(el('span','chronicle-index',String(i+1).padStart(2,'0')),el('span','chronicle-line'));
      const body=el('div','chronicle-content');
      body.append(el('span','chronicle-time',entry.year),el('h3','',entry.title),el('p','',entry.summary));
      row.append(marker,body);
      return row;
    });
    safeReplace('#chronicle-list',entries);
  }
  function showDetail(type,item){
    if(!detailDialog)return;
    lastFocus=document.activeElement;activeDetail={type,item};
    renderDetail();
    detailDialog.showModal();
  }
  function renderDetail(){
    if(!activeDetail)return;
    const {type,item}=activeDetail;
    $('#detail-type').textContent=type==='person'?'PERSONNEL / '+(byId.get(item.faction)?.name||''):item.eyebrow;
    $('#detail-title').textContent=item.name;
    $('#detail-affiliation').textContent=type==='person'?item.role+' · '+(byId.get(item.faction)?.name||''):item.location;
    $('#detail-description').textContent=item.description;
    const visual=$('#detail-art');
    visual.replaceChildren();
    if(type==='person')visual.append(img(item.image,item.name+' 초상화'));
    else visual.append(el('div','detail-symbol',item.symbol));
    const relationships=$('#detail-relations');relationships.replaceChildren();
    if(type==='faction'&&item.relations?.length){
      relationships.append(el('h3','','관계와 활동'));
      const ul=el('ul');
      item.relations.forEach(r=>ul.append(el('li','',r)));
      relationships.append(ul);
    }
    const secretArea=$('#detail-secret');
    secretArea.replaceChildren();
    if(item.secret){
      const section=el('div','secret-excerpt');
      section.append(el('span','secret-label',unlocked?'RESTRICTED / SPOILER UNLOCKED':'RESTRICTED / SPOILER LOCKED'));
      if(unlocked)section.append(el('p','',item.secret));
      else{
        section.append(el('p','','숨겨진 설정은 아직 잠겨 있어. 열람하려면 스포일러 경고를 확인해 줘.'));
        const reveal=el('button','detail-unlock','스포일러 경고 확인하기');
        reveal.type='button';reveal.addEventListener('click',openConfirm);
        section.append(reveal);
      }
      secretArea.append(section);
    }
  }
  function renderMysteries(){
    const grid=$('#mystery-grid');
    grid.replaceChildren();
    grid.hidden=!unlocked;
    if(!unlocked)return;
    data.mysteries.forEach((m,i)=>{
      const article=el('article','mystery-card');
      article.append(el('span','mystery-index',String(i+1).padStart(2,'0')+' / '+m.category),el('h3','',m.title),el('p','',m.description));
      grid.append(article);
    });
  }
  function renderSpoilerState(){
    const warning=$('#spoiler-warning'),btn=$('#spoiler-toggle');
    warning?.classList.toggle('unlocked',unlocked);
    btn?.setAttribute('aria-expanded',String(unlocked));
    if(btn){
      btn.replaceChildren();
      btn.append(document.createTextNode(unlocked?'스포일러 다시 잠그기 ':'비밀 기록 열람하기 '),el('span','','↗'));
    }
    renderMysteries();renderPeople();if(activeDetail)renderDetail();
  }
  function openConfirm(){
    if(!confirmDialog?.open)confirmDialog?.showModal();
  }
  function connectDialogs(){
    $('#detail-close')?.addEventListener('click',()=>detailDialog.close());
    detailDialog?.addEventListener('click',ev=>{if(ev.target===detailDialog)detailDialog.close();});
    detailDialog?.addEventListener('close',()=>{activeDetail=null;if(lastFocus?.isConnected)lastFocus.focus();});
    $('#spoiler-toggle')?.addEventListener('click',()=>{if(unlocked){unlocked=false;renderSpoilerState();}else openConfirm();});
    $('#confirm-cancel')?.addEventListener('click',()=>confirmDialog.close());
    $('#confirm-reveal')?.addEventListener('click',()=>{
      unlocked=true;confirmDialog.close();renderSpoilerState();
    });
    confirmDialog?.addEventListener('click',ev=>{if(ev.target===confirmDialog)confirmDialog.close();});
  }
  function initCounts(){
    $('#stat-factions').textContent=data.factions.length;
    $('#stat-people').textContent=data.people.length;
    $('#stat-regions').textContent=String(data.regions.length).padStart(2,'0');
    $('#stat-mysteries').textContent=data.mysteries.length;
  }
  initCounts();
  renderInn();renderFactions();renderFactionControls();
  populateFactionSelect();renderPeople();renderRegions();renderChronicles();connectDialogs();
  renderSpoilerState();
})();