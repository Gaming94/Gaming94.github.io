(function () {
  'use strict';
  const data = window.ARCHIVE_DATA || {featured:[],chatbots:[]};
  const $ = (selector, root=document) => root.querySelector(selector);
  const create = (tag, cls, text) => { const el=document.createElement(tag); if(cls) el.className=cls; if(text!==undefined) el.textContent=text; return el; };
  const svgArrow = '↗';
  const featuredTarget = $('#featured-projects');
  const chatbotTarget = $('#chatbot-grid');
  let currentFilter = 'all';
  let lastFocus = null;

  for(const project of data.featured){
    const card=create('article','featured-card');
    const visual=create('div',`featured-visual featured-${project.visual}`);
    const small=create('span','visual-kicker',project.category); visual.append(small);
    if(project.image){const img=create('img','featured-photo');img.src=project.image;img.alt='';img.loading='lazy';img.onerror=()=>img.remove();visual.append(img);}else{const emblem=create('div','featured-emblem'); emblem.textContent=project.visual==='family'?'F / G':project.visual==='hibicus'?'H / C':'D / B'; visual.append(emblem);}
    visual.append(create('div','visual-grid'));
    const index=create('span','featured-no',project.no);visual.append(index);
    const main=create('div','featured-content');main.append(create('p','featured-subtitle',project.subtitle));main.append(create('h3','',project.title));main.append(create('p','featured-description',project.description));
    const tags=create('div','tag-row');for(const t of project.tags) tags.append(create('span','tag',t)); main.append(tags);
    const foot=create('div','featured-foot');
    if(project.link){const a=create('a','featured-link',`${project.linkText} ${svgArrow}`);a.href=project.link;foot.append(a);}else{foot.append(create('span','featured-muted',project.linkText));}
    main.append(foot);card.append(visual,main);featuredTarget?.append(card);
  }

  function chatbotCard(bot){
    const button=create('button','chatbot-card');button.type='button';button.dataset.bot=bot.id;button.setAttribute('aria-label',`${bot.title} 상세 정보 보기`);
    const art=create('div',`chatbot-art tone-${bot.tone}`);
    if(bot.image){const img=create('img');img.src=bot.image;img.alt='';img.loading='lazy';img.onerror=()=>img.remove();art.append(img);}
    art.append(create('span','bot-emblem',bot.emblem));
    art.append(create('span','bot-genre',bot.type==='world'?'WORLD ARCHIVE':'CHARACTER CHAT'));
    const content=create('div','chatbot-content');const top=create('div','chatbot-topline');top.append(create('span','bot-type',bot.type==='world'?'세계관형':'대화형'));if(bot.stat)top.append(create('span','bot-stat',bot.stat));content.append(top);
    content.append(create('h3','',bot.title));content.append(create('p','',bot.tagline));
    const bottom=create('div','bot-bottom');bottom.append(create('span','',bot.type==='world'?'설정 / 시작 상황':'소개 / 시작 상황'));bottom.append(create('span','', '↗'));content.append(bottom);
    button.append(art,content);button.addEventListener('click',()=>openBot(bot,button));return button;
  }
  function renderBots(){
    if(!chatbotTarget) return;
    const q=($('#chatbot-search')?.value||'').trim().toLocaleLowerCase();
    const matches=data.chatbots.filter(b=>(currentFilter==='all'||b.type===currentFilter)&&[b.title,b.tagline,b.description,...b.tags].join(' ').toLocaleLowerCase().includes(q));
    chatbotTarget.replaceChildren(...matches.map(chatbotCard));
    if(!matches.length) chatbotTarget.append(create('p','empty-state','검색 결과가 없습니다. 다른 검색어를 입력해 주세요.'));
    const counter=$('#chatbots-counter');if(counter)counter.textContent=`ARCHIVE / ${String(matches.length).padStart(2,'0')}`;
  }
  document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
    currentFilter=btn.dataset.filter;document.querySelectorAll('.filter').forEach(other=>{const yes=other===btn;other.classList.toggle('active',yes);other.setAttribute('aria-pressed',String(yes));});renderBots();
  }));
  $('#chatbot-search')?.addEventListener('input',renderBots);
  renderBots();

  const dialog=$('#chatbot-dialog');
  function openBot(bot, opener){if(!dialog)return;lastFocus=opener;
    $('#dialog-record-id').textContent=bot.id.toUpperCase();
    $('#dialog-type').textContent=bot.type==='world'?'LARGE WORLD / WORLD ARCHIVE':'PERSONAL STORY / CHARACTER CHAT';
    $('#dialog-title').textContent=bot.title;$('#dialog-description').textContent=bot.description;
    const tagBox=$('#dialog-tags');tagBox.replaceChildren(...bot.tags.map(t=>create('span','tag',t)));
    const scene=$('#dialog-scene');scene.textContent=bot.startSituation;scene.classList.toggle('is-placeholder',bot.startSituation.includes('[원본'));
    const banner=$('#dialog-banner');banner.className=`dialog-banner tone-${bot.tone}`;
    banner.querySelector('img')?.remove();
    if(bot.image){const img=create('img','dialog-image');img.src=bot.image;img.alt='';img.onerror=()=>img.remove();banner.prepend(img);}
    $('#dialog-emblem').textContent=bot.emblem;
    const chat=$('#dialog-chat-link');if(bot.chatUrl){chat.href=bot.chatUrl;chat.removeAttribute('aria-disabled');chat.classList.remove('disabled');chat.textContent='베이비챗 작품 보기 ↗';}else{chat.removeAttribute('href');chat.setAttribute('aria-disabled','true');chat.classList.add('disabled');chat.textContent='채팅 링크 등록 예정';}
    const world=$('#dialog-world-link');world.hidden=!(bot.type==='world'&&bot.worldUrl);if(!world.hidden)world.href=bot.worldUrl;
    $('#dialog-footnote').textContent=bot.chatUrl?'외부 채팅 플랫폼으로 이동합니다.':'이 작품의 외부 채팅 URL은 아직 등록되지 않았습니다.';
    dialog.showModal();
  }
  $('#dialog-close')?.addEventListener('click',()=>dialog.close());
  dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
  dialog?.addEventListener('close',()=>lastFocus?.focus());
  $('#dialog-chat-link')?.addEventListener('click', e=>{if(e.currentTarget.getAttribute('aria-disabled')==='true')e.preventDefault();});

  const menuButton=$('#menu-button');const mobileNav=$('#mobile-nav');
  menuButton?.addEventListener('click',()=>{const expanded=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!expanded));menuButton.setAttribute('aria-label',expanded?'메뉴 열기':'메뉴 닫기');mobileNav.hidden=expanded;});
  mobileNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','메뉴 열기');}));
  const year=$('#copyright-year');if(year)year.textContent=new Date().getFullYear();
})();
