(function(){
  'use strict';
  const d=window.HIBICUS_WORLD||{regions:[],entries:[]};const $=(s,r=document)=>r.querySelector(s);const el=(t,c,txt)=>{const a=document.createElement(t);if(c)a.className=c;if(txt!==undefined)a.textContent=txt;return a;};
  const kinds={character:'인물 기록',faction:'세력 기록',history:'역사 기록'};
  const regionButtons=$('#region-buttons');
  const showRegion=r=>{
    if(!r)return;regionButtons?.querySelectorAll('button').forEach(b=>{const yes=b.dataset.id===r.id;b.classList.toggle('active',yes);b.setAttribute('aria-pressed',String(yes));});
    $('#region-meta').textContent=r.sub;$('#region-name').textContent=r.name;$('#region-desc').textContent=r.description;$('#region-label').textContent=r.sub;
    $('#region-tags').replaceChildren(...r.tags.map(t=>el('span','',t)));
  };
  for(const r of d.regions){const b=el('button','',`${r.label} / ${r.name}`);b.type='button';b.dataset.id=r.id;b.setAttribute('aria-pressed','false');b.addEventListener('click',()=>showRegion(r));regionButtons?.append(b);}
  showRegion(d.regions[0]);
  let current='all';const list=$('#record-list');
  const render=()=>{const q=($('#record-search')?.value||'').trim().toLocaleLowerCase();const found=d.entries.filter(x=>(current==='all'||current===x.kind)&&[x.title,x.subtitle,x.summary,x.description,...x.tags].join(' ').toLocaleLowerCase().includes(q));
    list.replaceChildren(...found.map(x=>{const b=el('button','record-card');b.type='button';const art=el('div','record-art',x.symbol);const body=el('div','record-card-content');body.append(el('span','record-kind',kinds[x.kind]));body.append(el('h3','',x.title));body.append(el('p','',x.summary));body.append(el('span','more','기록 열기 ↗'));b.append(art,body);b.addEventListener('click',()=>showDetail(x));return b;}));
    if(!found.length)list.append(el('p','empty','조건에 맞는 기록이 없습니다.'));
    $('#record-total').textContent=`${String(found.length).padStart(2,'0')} RECORDS`;
  };
  $('#record-tabs')?.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{current=b.dataset.kind;$('#record-tabs').querySelectorAll('button').forEach(x=>{const yes=x===b;x.classList.toggle('on',yes);x.setAttribute('aria-pressed',String(yes));});render();}));
  $('#record-search')?.addEventListener('input',render);render();
  const dialog=$('#record-dialog');let last=null;
  function showDetail(x){last=document.activeElement;$('#modal-type').textContent=kinds[x.kind]+' / '+x.subtitle;$('#modal-name').textContent=x.title;$('#modal-sub').textContent=x.summary;$('#modal-desc').textContent=x.description;$('#modal-tags').replaceChildren(...x.tags.map(t=>el('span','',t)));dialog.showModal();}
  $('#record-close')?.addEventListener('click',()=>dialog.close());dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});dialog?.addEventListener('close',()=>last?.focus());
})();
