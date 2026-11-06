(function(){
  'use strict';
  const world=window.NORTHERN_DOMAIN;
  if(!world){return;}
  const $=(selector,root=document)=>root.querySelector(selector);
  const node=(tag,cls,text)=>{
    const element=document.createElement(tag);
    if(cls)element.className=cls;
    if(text!==undefined)element.textContent=text;
    return element;
  };
  const image=(src,alt)=>{
    const img=node('img');img.src=src;img.alt=alt;img.loading='lazy';img.decoding='async';
    return img;
  };
  const groupLabels={heir:'후계자',knight:'기사 가문',civilian:'평민 가문',rival:'적대 세력',ally:'협력 인물',wanderer:'방랑자'};
  function renderTimeline(){
    const target=$('#story-track');
    if(!target)return;
    for(const record of world.timeline){
      const article=node('article','story-item');
      const photo=node('figure','story-photo');
      photo.append(image(record.image,record.title+' 삽화'));
      const copy=node('div','story-copy');
      copy.append(node('span','story-index',record.index),node('h3','',record.title),node('p','',record.text));
      article.append(photo,copy);
      target.append(article);
    }
  }
  function renderFamilies(){
    const target=$('#house-list');
    if(!target)return;
    for(const family of world.houses){
      const article=node('article','house-card');article.dataset.kind=family.kind;
      const top=node('div','house-top');
      const titleWrap=node('div');
      titleWrap.append(node('span','house-kind',family.kind==='ruling'?'RULING HOUSE':family.kind==='knight'?'KNIGHTLY HOUSE':'COMMON HOUSE'));
      titleWrap.append(node('h3','',family.name+' 가문'));
      top.append(titleWrap,node('span','house-role',family.role));
      article.append(top,node('p','',family.description));
      if(family.motto)article.append(node('p','house-motto','“'+family.motto+'”'));
      const meta=node('div','house-meta');
      meta.append(node('span','',family.parents),node('span','',family.heir));
      article.append(meta);
      target.append(article);
    }
  }
  let activeGroup='all';
  let lastFocus=null;
  const dialog=$('#person-dialog');
  function openPerson(person){
    if(!dialog)return;
    lastFocus=document.activeElement;
    $('#detail-category').textContent=groupLabels[person.group]||'인물';
    $('#detail-name').textContent=person.name;
    $('#detail-role').textContent=person.role;
    $('#detail-family').textContent='소속 · '+person.family;
    $('#detail-desc').textContent=person.detail;
    $('#detail-quote').textContent=person.quote||'';
    const photo=$('#detail-image');
    photo.src=person.image;photo.alt=person.name+' 초상화';
    const alt=$('#alternate-photos');alt.replaceChildren();
    if(person.alternate){
      alt.append(image(person.alternate,person.name+' 추가 표정 / 모습'));
      alt.append(node('span','','추가 초상화 · 표정 및 상황 변화'));
    }
    dialog.showModal();
  }
  function renderPeople(){
    const target=$('#people-list');
    if(!target)return;
    const query=($('#people-query')?.value||'').trim().toLocaleLowerCase();
    const matches=world.people.filter(person=>
      (activeGroup==='all'||person.group===activeGroup)&&
      [person.name,person.family,person.role,person.summary,person.detail].join(' ').toLocaleLowerCase().includes(query)
    );
    target.replaceChildren();
    for(const person of matches){
      const button=node('button','person-card');
      button.type='button';
      button.setAttribute('aria-label',person.name+' 상세 기록 열기');
      const photo=node('span','person-photo');
      photo.append(image(person.image,person.name+' 초상화'));
      const content=node('span','person-card-info');
      content.append(node('span','person-group',groupLabels[person.group]||'인물'));
      content.append(node('strong','',person.name));
      content.append(node('small','',person.role));
      content.append(node('span','person-more','상세 기록 보기 ↗'));
      button.append(photo,content);
      button.addEventListener('click',()=>openPerson(person));
      target.append(button);
    }
    if(!matches.length)target.append(node('p','empty','조건에 맞는 인물 기록이 없습니다.'));
    const count=$('#people-count');
    if(count)count.textContent=String(matches.length).padStart(2,'0')+' / '+String(world.people.length).padStart(2,'0')+' PERSONNEL FILES';
  }
  function connectFilters(){
    document.querySelectorAll('.people-filters .filter').forEach(button=>{
      button.addEventListener('click',()=>{
        activeGroup=button.dataset.group;
        document.querySelectorAll('.people-filters .filter').forEach(other=>{
          const selected=other===button;
          other.classList.toggle('active',selected);
          other.setAttribute('aria-pressed',String(selected));
        });
        renderPeople();
      });
    });
    $('#people-query')?.addEventListener('input',renderPeople);
    $('#dialog-close')?.addEventListener('click',()=>dialog.close());
    dialog?.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
    dialog?.addEventListener('close',()=>{if(lastFocus?.isConnected)lastFocus.focus();});
  }
  function renderRegions(){
    const target=$('#region-list');
    if(!target)return;
    for(const region of world.regions){
      const card=node('article','region-card');
      card.append(image(region.image,region.name+' 풍경 삽화'));
      const info=node('div');
      info.append(node('small','',region.type),node('h4','',region.name),node('p','',region.description));
      card.append(info);
      target.append(card);
    }
  }
  function renderFacilities(){
    const target=$('#facility-list');
    if(!target)return;
    for(const facility of world.facilities){
      const card=node('article','facility-card');
      card.append(image(facility.image,facility.name+' 이미지'));
      const info=node('div');
      info.append(node('strong','',facility.name),node('small','',facility.type));
      card.append(info);
      target.append(card);
    }
  }
  function renderGiants(){
    const target=$('#giant-list');
    if(!target)return;
    for(const giant of world.giants){
      const details=node('details','giant-record');
      const summary=node('summary');
      const label=node('span','giant-label');
      label.append(node('strong','',giant.name),node('small','',giant.power));
      summary.append(node('span','giant-no',giant.no),label);
      details.append(summary,node('p','',giant.detail));
      target.append(details);
    }
  }
  function renderSystems(){
    const modes=$('#mode-list');
    for(const item of world.modes){
      const card=node('article','mode-card');
      card.append(node('span','mode-label',item.label),node('h4','',item.name),node('p','',item.detail));
      modes?.append(card);
    }
    const upgrades=$('#upgrade-list');
    for(const [i,stage] of world.upgrades.entries()){
      const item=node('li');
      const parts=stage.split(' ');
      item.append(node('small','',parts[0]),node('strong','',parts.slice(1).join(' ')));
      upgrades?.append(item);
    }
    const resources=$('#resource-list');
    for(const name of world.resources)resources?.append(node('span','',name));
    const gallery=$('#encounter-list');
    for(const record of world.gallery){
      const figure=node('figure','encounter-card');
      figure.append(image(record.image,record.name+' 삽화'));
      const caption=node('figcaption');
      caption.append(node('strong','',record.name),node('small','',record.description));
      figure.append(caption);
      gallery?.append(figure);
    }
  }
  renderTimeline();
  renderFamilies();
  renderPeople();
  renderRegions();
  renderFacilities();
  renderGiants();
  renderSystems();
  connectFilters();
})();
