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
      tagline: '왕국과 공국, 숲과 정원, 마녀와 암살자가 대립하는 대륙',
      description: '신성왕국 하이비커스와 로젠탈 공국의 전쟁, 샤이엔과 민테아의 충돌, 마녀협회와 블러드러스트의 대립 속에서 자유롭게 이야기를 펼치는 대형 판타지 시뮬레이션. 독립 세계관 설정집에서 국가·인물·지역 기록을 탐험할 수 있습니다.',
      tags: ['판타지', '대륙 세계관', '진영 갈등', '자유 탐험'],
      tone: 'rose',
      image: 'assets/chatbots/hibicus/hibicus.webp',
      stat: '3.8만 채팅',
      startSituation: "세계수 여관에서 사람들이 왁자지껄 떠들고 있다.\n\n\"하이비커스 국왕께서 쓰러지셨다며?\"\n\n\"마녀협회도 활동을 시작했대\"\n\n\"마녀협회가 움직였으면 블러드러스트도 움직이겠구만\"\n\n여관주인 소년이 찾아와 말을건다.\n\n\"하하 요즘 분위기가 많이 어수선 하죠? \"\n\n\"여기는 세상의 모든 정보들이 모이는 세계수 여관이에요 대륙의 정세나 사건들, 사람들의 정보들이 오가죠 궁금하신게 있으실까요?\"",
      chatUrl: 'https://babechat.ai/character/u/465a5dd4-05ab-4179-a2c4-fd42cb58fe32/profile',
      worldUrl: './worlds/hibicus/'
    },
    {
      id: 'rural-lord',
      title: '시골 영주 생존 투쟁기',
      type: 'world',
      tagline: '영민 45명과 500금화로 시작하는 이름 없는 변방 남작령',
      description: '루데린 왕국 남서부 변방에서 이름 없는 남작령을 맡는다. 검은 숲의 몬스터, 흑색 산맥의 광맥, 에일 강과 주변 영주의 압박을 마주하며 영지와 병력을 성장시키는 봉건 생존·경영 시뮬레이션입니다.',
      tags: ['변방 영지', '봉건전쟁', '몬스터', '영지 경영'],
      tone: 'gold',
      image: 'assets/chatbots/rural-lord-survival/rural-lord-survival.webp',
      stat: '1.8만 채팅',
      startSituation: "\"알베론 | 영주님! 오시느라 고생 많으셨습니다.  이… 이곳이 저희의 새로운 영지입니다.\"\n\n낡은 목책 그리고 희미하게 피어오르는 모닥불 연기 곁에 선 당신의 영민들 45명의 얼굴에도 불안함이 역력하다.\n\n그의 순진하고 걱정 가득한 눈빛이 당신을 향한다. 알베론은 이미 하루 종일 영민들을 독려하며 짐을 정리하느라 지쳐 보였다.\n\n이 초라한 목재 캠프와 45명의 영민, 그리고 500금화라는 자원을 가지고 시골 변방 영주로서의 생존 투쟁을 시작해야 한다. 흠...무엇부터 시작해볼까?\n\n[141년 3월 1일 · 13시 · 봄]\n위치: 남작령 목재 캠프 / 소속: 루데린 왕국 남작\n가신: 알베론 · 영민: 45명 · 금고: 500금화\n병력: 0명 · 성벽: 온전한 목책\n시설: 목재 캠프, 밭 1천 평 · 창고: 봄 씨앗(소량)",
      chatUrl: 'https://babechat.ai/character/u/318264e9-e552-4700-bcf0-eaa1806595b9/profile',
      worldUrl: './worlds/rural-lord/'
    },
    {
      id: 'northern-domain',
      title: '북부 영주 생존 투쟁기',
      type: 'world',
      tagline: '열두 거인의 전쟁 뒤, 아이들만 남은 북부의 첫 번째 겨울',
      description: '열두 거인의 동시 부활로 모든 어른을 잃은 변경백령 발레노르. 남겨진 후계자와 어린 가신들이 영지를 재건하고, 병합을 노리는 영주들과 마지막 거인에 맞서는 생존·운영 시뮬레이션입니다.',
      tags: ['북부', '영지 경영', '성장', '12거인'],
      tone: 'ice',
      image: 'assets/chatbots/northern-domain-survival/northern-domain-survival.webp',
      stat: '4.3천 채팅',
      startSituation: "북부에는 죽여도 다시 부활하는 12명의 불가살(不可殺)의 거인이 존재했다.\n\n거인은 한 번 죽으면 50년 뒤에 부활하는 특성이 있어 북부인들은 수백 년간 이들의 부활 주기를 1명씩 분산시켜 조절하며 영지를 지켜왔다.\n\n평화롭던 298년 북부의 전사들이 다시 모였다.\n\n주기대로라면 '여덟 번째 거인' 1명만을 상대할 예정이었으나 알 수 없는 이유로 12명의 거인이 동시에 전부 부활했다는 절망적인 소식을 접하게 된다.\n\n주변 영지들에 급전을 보냈으나 발레노르가 무너지길 기다리며 지원 요청을 의도적으로 묵살했다.\n\n전대 영주 나탄 발레노르와 다섯 봉신 기사, 각 가문의 장로, 평민가문과 어머니들까지 영지의 모든 어른이 어린아이들을 성에 남겨둔 채 도끼와 활, 검을 들고 전장으로 달려나갔다.\n\n처절한 사투 끝에 11명을 처치하였으나. 영주와 모든 성인이 전멸했고. 12번째 거인 역시 치명상을 입고 '가수면 상태'에 들었다.\n\n위대한 변경백 나탄 발레노르와 다섯 기사, 그리고 영지의 수많은 어른들이 북부 거인들과의 결전에서 전멸한 뒤 맞이하는 첫 번째 겨울.\n\n아직 아버지들의 갑옷조차 몸에 맞지 않는 기사 가문의 소년들과 대를 이어 영지를 지켜온 평민 가문의 아이들만이 텅 빈 발레노르 성채에 남았다.\n\n주변의 탐욕스러운 영주들은 이 상황을 기회로 여겨 \"보호와 후견\"이라는 기만적인 명분을 내세우며 군세를 이끌고 국경을 압박해 오려 한다.\n\n벽난로의 불씨마저 위태로운 영지. 마지막 후계자{{user}} 앞에, 얼어붙은 갑옷과 눈 덮인 가죽 옷을 입은 영지의 아이들이 한자리에 모여들었다. 그들의 눈에는 두려움과 슬픔, 그리고 {{user}}을 향한 마지막 충성심이 뒤섞여 있다.",
      chatUrl: 'https://babechat.ai/character/u/0c4bebe0-724a-47d6-9788-476daacc95a5/profile',
      worldUrl: './worlds/northern-domain/'
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
