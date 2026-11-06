/* 프로젝트 설명·채팅 링크·시작 상황은 이 파일만 수정하면 됩니다.
 * 빈 chatUrl은 '링크 등록 예정'으로 표시합니다.
 * startSituation을 실제 봇의 시작 상황으로 교체하세요.
 * image는 assets/chatbots/noel.webp 같은 경로를 적을 수 있습니다.
 */
window.ARCHIVE_DATA = {
  featured: [
    {
      no: '01',
      category: 'WEB GAME / SYSTEM DESIGN',
      title: '가문 생존 시뮬레이션',
      subtitle: '세대를 잇는 선택과 결과',
      description: '가문원 성장, 직업, 결혼과 승계, 라이벌과 이벤트를 결합한 웹 기반 운영 시뮬레이션을 개발 중입니다.',
      tags: ['WEB GAME', 'JAVASCRIPT', 'IN PROGRESS'],
      visual: 'family',
      link: '',
      linkText: '프로젝트 상세 준비 중'
    },
    {
      no: '02',
      category: 'INTERACTIVE NARRATIVE',
      title: '하이비커스 연대기',
      subtitle: '하나의 세계, 수많은 이야기',
      description: '세계관과 인물 관계를 중심으로 구성된 대형 AI 채팅 시뮬레이션. 별도의 설정 아카이브를 함께 구축합니다.',
      tags: ['WORLD BUILDING', 'AI CHATBOT'],
      visual: 'hibicus',
      link: './worlds/hibicus/',
      linkText: '설정집 미리보기'
    }
  ],


  tools: [
    {
      no: '01',
      category: 'WEB UTILITY / IMAGE CONVERTER',
      title: 'KAOR IMAGE STUDIO',
      subtitle: '이미지를 더 가볍고 자유롭게',
      description: '브라우저에서 PNG·JPG·WebP 이미지를 변환하고 화질과 크기를 조정하는 웹 도구입니다. 다중 파일 처리와 ZIP 다운로드를 지원합니다.',
      tags: ['JAVASCRIPT', 'CANVAS API', 'WEB TOOL'],
      visual: 'image',
      image: './assets/tools&etc/imagestudio/imagestudio_profile.webp',
      link: './tools/PngToWebp/',
      linkText: '이미지 변환기 사용하기'
    },
    {
      no: '02',
      category: 'DISCORD BOT / AUTOMATION',
      title: '숙제도우미_컴건봇',
      subtitle: '다중 캐릭터의 주간 숙제를 간편하게',
      description: 'Discord에서 캐릭터별 숙제를 체크하고 계정 공통 항목을 연동하는 Python 기반 자동화 봇. 운영 기록과 개발 구조를 소개합니다.',
      tags: ['PYTHON', 'DISCORD.PY', 'DISCLOUD'],
      visual: 'discord',
      image: './assets/tools&etc/discord-bot/Comganbot_profile2.webp',
      link: './projects/discord-bot/',
      linkText: '프로젝트 자세히 보기'
    }
  ],


  // world: 대형 세계관 / simulation: 시뮬레이션 / single: 1:1 대화형 / pending: 분류 보류
  chatbots: [
    {
      id: 'hibicus',
      title: '하이비커스 연대기',
      type: 'world',
      tagline: '대형 세계관 기반 AI 시뮬레이션',
      description: '인물·세력·사건의 상호작용을 중심으로 전개되는 대형 세계관 작품입니다.',
      tags: ['판타지', '세계관', '시뮬레이션'],
      tone: 'rose',
      image: 'assets/chatbots/hibicus/hibicus.webp',
      stat: '3.8만 채팅',
      startSituation: '[원본 채팅봇의 시작 상황을 이곳에 등록해 주세요.]',
      chatUrl: 'https://babechat.ai/character/u/465a5dd4-05ab-4179-a2c4-fd42cb58fe32/profile',
      worldUrl: './worlds/hibicus/'
    },
    {
      id: 'rural-lord',
      title: '시골 영주 생존 투쟁기',
      type: 'world',
      tagline: '영지 운영과 생존의 기록',
      description: '시골 영주의 생존과 운영을 다루는 시뮬레이션 작품입니다.',
      tags: ['영지', '시뮬레이션', '운영'],
      tone: 'gold',
      image: 'assets/chatbots/rural-lord-survival/rural-lord-survival.webp',
      stat: '1.8만 채팅',
      startSituation: '[원본 채팅봇의 시작 상황을 이곳에 등록해 주세요.]',
      chatUrl: 'https://babechat.ai/character/u/318264e9-e552-4700-bcf0-eaa1806595b9/profile',
      worldUrl: ''
    },
    {
      id: 'northern-domain',
      title: '북부 영주 생존 투쟁기',
      type: 'world',
      tagline: '북부에서 시작되는 생존과 경영',
      description: '북부 영지를 배경으로 한 생존·운영형 시뮬레이션입니다.',
      tags: ['북부', '영지', '생존'],
      tone: 'ice',
      image: 'assets/chatbots/northern-domain-survival/northern-domain-survival.webp',
      stat: '4.3천 채팅',
      startSituation: '[원본 채팅봇의 시작 상황을 이곳에 등록해 주세요.]',
      chatUrl: 'https://babechat.ai/character/u/0c4bebe0-724a-47d6-9788-476daacc95a5/profile',
      worldUrl: ''
    },
    {
      id: 'pirates',
      title: '대 해적시대',
      type: 'world',
      tagline: '미지의 바다와 모험',
      description: '세계관 작품의 등록 예시입니다. 정확한 설명을 교체해 주세요.',
      tags: ['해적', '모험'],
      tone: 'teal',
      image: 'assets/chatbots/great-pirate-era/great-pirate-era.webp',
      stat: '3.1천 채팅',
      startSituation: '[원본 채팅봇의 시작 상황을 이곳에 등록해 주세요.]',
      chatUrl: 'https://babechat.ai/character/u/a50d6765-f8e0-4ab3-8c89-3403f5aeefe0/profile',
      worldUrl: ''
    },
    {
      id: 'seong-homin',
      title: '무당 성호민',
      type: 'simulation',
      tagline: '무당과 열두 요괴의 이야기',
      description: '무당 성호민과 12요괴를 중심으로 전개되는 시뮬레이션형 채팅봇입니다.',
      tags: ['오컬트', '요괴', '시뮬레이션'],
      tone: 'violet',
      image: 'assets/chatbots/shaman-seong-homin/shaman-seong-homin.webp',
      stat: '3.1천 채팅',
      startSituation: '[원본 채팅봇의 시작 상황을 이곳에 등록해 주세요.]',
      chatUrl: 'https://babechat.ai/character/u/0b79fe23-1069-48a6-8f6d-64e5a6afbc05/profile',
      worldUrl: ''
    },
    {
      id: 'basement-three',
      title: '지하 3층의 문제아들',
      type: 'simulation',
      tagline: '작품 소개 준비 중',
      description: '작품의 상세 소개와 시작 상황을 등록할 예정입니다.',
      tags: ['소개 준비 중'],
      tone: 'teal',
      image: 'assets/chatbots/b3-troublemakers/b3-troublemakers.webp',
      stat: '1.5천 채팅',
      startSituation: '[원본 채팅봇의 시작 상황을 이곳에 등록해 주세요.]',
      chatUrl: 'https://babechat.ai/character/u/ff941911-1319-44df-bf04-a6a2e227f7d1/profile',
      worldUrl: ''
    },
    {
      id: 'noel',
      title: '노엘',
      type: 'single',
      tagline: '인물 중심 대화형 콘텐츠',
      description: '캐릭터와의 대화에 집중하는 작품입니다.',
      tags: ['캐릭터', '대화'],
      tone: 'blue',
      image: 'assets/chatbots/noel/noel.webp',
      stat: '4.3천 채팅',
      startSituation: '[원본 채팅봇의 시작 상황을 이곳에 등록해 주세요.]',
      chatUrl: 'https://babechat.ai/character/u/5d9bf6fe-2bd2-4f04-9563-559288255355/profile',
      worldUrl: ''
    },
    {
      id: 'melpion',
      title: '멜피온',
      type: 'single',
      tagline: '시골 성당의 유일한 부제',
      description: '사람들이 찾지 않는 시골 성당을 배경으로, 유일한 부제 멜피온과 대화하는 인물 중심 작품입니다.',
      tags: ['성당', '드라마', '1:1 대화'],
      tone: 'gold',
      image: 'assets/chatbots/melpion/melpion.webp',
      stat: '2.1천 채팅',
      startSituation: '[원본 채팅봇의 시작 상황을 이곳에 등록해 주세요.]',
      chatUrl: 'https://babechat.ai/character/u/e2c84877-aad6-4c80-b1c7-4f807e807e50/profile',
      worldUrl: ''
    },
    {
      id: 'seibi',
      title: '세이비',
      type: 'single',
      tagline: '암살자 길드의 사고뭉치 막내',
      description: '암살자 길드의 막내 세이비와 일대일로 대화하는 캐릭터 중심 채팅봇입니다.',
      tags: ['암살자 길드', '캐릭터', '1:1 대화'],
      tone: 'rose',
      image: 'assets/chatbots/seibi/seibi.webp',
      stat: '1.3천 채팅',
      startSituation: '[원본 채팅봇의 시작 상황을 이곳에 등록해 주세요.]',
      chatUrl: 'https://babechat.ai/character/u/6aae309b-cda2-4c54-949c-bd9419b9c338/profile',
      worldUrl: ''
    },
    {
      id: 'carby',
      title: '당근 농장의 캐비',
      type: 'single',
      tagline: '사람인 척 연기하는 AI 로봇 소년',
      description: '사람처럼 행동하는 AI 로봇 소년을 중심으로 한 1:1 추리형 채팅봇입니다.',
      tags: ['추리', 'AI 로봇', '1:1 대화'],
      tone: 'ice',
      image: 'assets/chatbots/carrot-farm-caby/carrot-farm-caby.webp',
      stat: '916 채팅',
      startSituation: '[원본 채팅봇의 시작 상황을 이곳에 등록해 주세요.]',
      chatUrl: 'https://babechat.ai/character/u/09a4c94e-1706-4c05-a004-29fe2cc6e589/profile',
      worldUrl: ''
    },
    {
      id: 'ice-is-mine',
      title: '얼음은 내꺼야',
      type: 'world',
      tagline: '대형 세계관 기반 시뮬레이션',
      description: '대형 세계관을 바탕으로 진행되는 시뮬레이션형 작품입니다. 상세 소개와 시작 상황은 추후 등록할 예정입니다.',
      tags: ['세계관', '시뮬레이션'],
      tone: 'violet',
      image: 'assets/chatbots/ice-is-mine/ice-is-mine.webp',
      stat: '3.2천 채팅',
      startSituation: '[원본 채팅봇의 시작 상황을 이곳에 등록해 주세요.]',
      chatUrl: 'https://babechat.ai/character/u/361e0342-6da7-4c7d-81df-9429a9fc8925/profile',
      worldUrl: ''
    }
  ]
};
