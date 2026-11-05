/* 프로젝트 설명·채팅 링크·시작 상황은 이 파일만 수정하면 됩니다.
 * 빈 chatUrl은 '링크 등록 예정'으로 표시합니다.
 * startSituation을 실제 봇의 시작 상황으로 교체하세요.
 * image는 assets/chatbots/noel.webp 같은 경로를 적을 수 있습니다.
 */
window.ARCHIVE_DATA = {
  featured: [
    { no: '01', category: 'WEB GAME / SYSTEM DESIGN', title: '가문 생존 시뮬레이션', subtitle: '세대를 잇는 선택과 결과', description: '가문원 성장, 직업, 결혼과 승계, 라이벌과 이벤트를 결합한 웹 기반 운영 시뮬레이션을 개발 중입니다.', tags: ['WEB GAME','JAVASCRIPT','IN PROGRESS'], visual: 'family', link: '', linkText: '프로젝트 상세 준비 중' },
    { no: '02', category: 'INTERACTIVE NARRATIVE', title: '하이비커스 연대기', subtitle: '하나의 세계, 수많은 이야기', description: '세계관과 인물 관계를 중심으로 구성된 대형 AI 채팅 시뮬레이션. 별도의 설정 아카이브를 함께 구축합니다.', tags: ['WORLD BUILDING','AI CHATBOT'], visual: 'hibicus', link: './worlds/hibicus/', linkText: '설정집 미리보기' },
    { no: '03', category: 'DISCORD BOT / AUTOMATION', title: '숙제도우미_컴건봇', subtitle: '다중 캐릭터의 주간 숙제를 간편하게', description: 'Discord에서 캐릭터별 숙제를 체크하고 계정 공통 항목을 연동하는 Python 기반 자동화 봇. 운영 기록과 개발 구조를 소개합니다.', tags: ['PYTHON','DISCORD.PY','DISCLOUD'], visual: 'discord', image: './assets/projects/discord-bot/Comganbot_profile2.webp', link: './projects/discord-bot/', linkText: '프로젝트 자세히 보기' }
  ],
  chatbots: [
    { id:'hibicus', title:'하이비커스 연대기', type:'world', tagline:'대형 세계관 기반 AI 시뮬레이션', description:'인물·세력·사건의 상호작용을 중심으로 전개되는 대형 세계관 작품입니다.', tags:['판타지','세계관','시뮬레이션'], emblem:'H', tone:'rose', image:'', stat:'3.8만 채팅', startSituation:'[원본 채팅봇의 시작 상황을 이곳에 등록해 주세요.]', chatUrl:'', worldUrl:'./worlds/hibicus/' },
    { id:'rural-lord', title:'시골 영주 생존 투쟁기', type:'world', tagline:'영지 운영과 생존의 기록', description:'시골 영주의 생존과 운영을 다루는 시뮬레이션 작품입니다.', tags:['영지','시뮬레이션','운영'], emblem:'領', tone:'gold', image:'', stat:'1.8만 채팅', startSituation:'[원본 채팅봇의 시작 상황을 이곳에 등록해 주세요.]', chatUrl:'', worldUrl:'' },
    { id:'noel', title:'노엘', type:'single', tagline:'인물 중심 대화형 콘텐츠', description:'캐릭터와의 대화에 집중하는 작품입니다.', tags:['캐릭터','대화'], emblem:'N', tone:'blue', image:'', stat:'4.3천 채팅', startSituation:'[원본 채팅봇의 시작 상황을 이곳에 등록해 주세요.]', chatUrl:'', worldUrl:'' },
    { id:'northern-lord', title:'북부 영지 생존 투쟁기', type:'world', tagline:'북부에서 시작되는 생존과 경영', description:'북부 영지를 배경으로 한 생존·운영형 시뮬레이션입니다.', tags:['북부','영지','생존'], emblem:'北', tone:'ice', image:'', stat:'4.1천 채팅', startSituation:'[원본 채팅봇의 시작 상황을 이곳에 등록해 주세요.]', chatUrl:'', worldUrl:'' },
    { id:'ice-is-mine', title:'얼음은 내꺼야', type:'single', tagline:'특색 있는 캐릭터 중심의 이야기', description:'개별 채팅봇 소개 페이지 예시입니다. 작품 설명을 교체해 주세요.', tags:['캐릭터','대화'], emblem:'氷', tone:'violet', image:'', stat:'3.2천 채팅', startSituation:'[원본 채팅봇의 시작 상황을 이곳에 등록해 주세요.]', chatUrl:'', worldUrl:'' },
    { id:'pirates', title:'대 해적시대', type:'world', tagline:'미지의 바다와 모험', description:'세계관 작품의 등록 예시입니다. 정확한 설명을 교체해 주세요.', tags:['해적','모험'], emblem:'⚓', tone:'teal', image:'', stat:'', startSituation:'[원본 채팅봇의 시작 상황을 이곳에 등록해 주세요.]', chatUrl:'', worldUrl:'' }
  ]
};
