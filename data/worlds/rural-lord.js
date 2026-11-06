/* 시골 영주 생존 투쟁기 공개 설정집 데이터. 원작 내부 프롬프트·출력 강제 규칙 제외. */
window.RURAL_LORD_WORLD = {
  "title": "시골 영주 생존 투쟁기",
  "subtitle": "이름 없는 영지의 첫날",
  "kicker": "THE UNNAMED BARONY",
  "cover": "../../assets/chatbots/rural-lord-survival/rural-lord-survival.webp",
  "chatUrl": "https://babechat.ai/character/u/318264e9-e552-4700-bcf0-eaa1806595b9/profile",
  "start": {
    "date": "141년 3월 1일",
    "time": "13시 · 낮 · 봄",
    "location": "이름 없는 남작령 목재 캠프",
    "title": "변방에서 시작하는 첫 번째 명령",
    "opening": "영주님! 오시느라 고생 많으셨습니다. 이… 이곳이 저희의 새로운 영지입니다.",
    "body": "낡은 목책과 희미한 모닥불 연기. 45명의 영민이 불안한 얼굴로 새로 부임한 남작을 맞이한다. 보좌관 알베론은 하루 종일 짐을 정리하고 사람들을 독려하느라 지쳐 있다.",
    "population": 45,
    "gold": 500,
    "army": 0,
    "support": 0,
    "wall": "목책(온전)",
    "facilities": [
      "목재 캠프",
      "밭(1천평)"
    ],
    "warehouse": [
      "봄 씨앗(소량)"
    ]
  },
  "groups": [
    {
      "id": "home",
      "name": "남작령과 측근"
    },
    {
      "id": "nobles",
      "name": "루데린 왕국 귀족"
    },
    {
      "id": "empire",
      "name": "사룡 제국"
    },
    {
      "id": "outsiders",
      "name": "엘프·도적·용병"
    },
    {
      "id": "religion",
      "name": "성직자·종교 세력"
    },
    {
      "id": "secret",
      "name": "숨겨진 기록"
    }
  ],
  "persons": [
    {
      "id": "alberon",
      "name": "알베론",
      "group": "home",
      "title": "남작령 보좌관",
      "short": "새로운 영지에 가장 먼저 도착한 충성스러운 소년 보좌관.",
      "long": "금발·금안. 성실하고 순진하며 새 남작이 황무지를 개척하도록 보좌한다. 임명 초기 영민 45명과 함께 목재 캠프에 있다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/alberon.webp"
    },
    {
      "id": "muriel",
      "name": "뮤리엘",
      "group": "home",
      "title": "상인 · 유망한 상단주",
      "short": "남작령의 발전 가능성을 발견하고 접근하는 양수인 소년 상인.",
      "long": "둥근 뿔과 주황 머리·눈이 특징. 계산에 능하지만 애교 많고 사교적이며 상단주로서 자질이 보인다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/muriel.webp"
    },
    {
      "id": "levi",
      "name": "레비 왕",
      "group": "nobles",
      "title": "루데린 국왕",
      "short": "어린 나이에 왕위를 이어받은 자비롭고 총명한 왕.",
      "long": "금발·적안. 선왕의 급작스러운 사망 뒤 즉위해 정치적 기반이 약하다. 알데바란 공작에게 많은 부분을 의존하며 왕권을 강화할 기회를 엿보고 있다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/levi.webp"
    },
    {
      "id": "aldebaran",
      "name": "알데바란 공작",
      "group": "nobles",
      "title": "왕국 중앙의 대귀족",
      "short": "루데린 중앙 정치에 강한 영향력을 가진 전통적 귀족.",
      "long": "온화하고 합리적이며 왕국 안정을 중시한다. 수도 동쪽 아우로라를 거점으로 프리메 기사단을 거느린다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/aldebaran.webp"
    },
    {
      "id": "hibiscus",
      "name": "히비스커스 후작",
      "group": "nobles",
      "title": "왕국의 재무 담당 귀족",
      "short": "왕실의 안정과 왕국 번영을 중시하는 중앙의 후작.",
      "long": "금발·금안. 중앙 서부 그룬월더에 기반을 두고 하이비커스 기사단을 거느린다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/hibiscus.webp",
      "secret": "선조 시대의 신성왕국 하이비커스에 관한 일부 기록과 유물을 물려받았다."
    },
    {
      "id": "albestain",
      "name": "알베스타인 공작",
      "group": "nobles",
      "title": "서부의 군부 실세",
      "short": "루데린 최고의 검사이자 강력한 기사단의 지휘관.",
      "long": "금발·청안. 정면 대결과 명예를 중시하고 음모와 술수를 경멸한다. 붉은깃발선봉대 기사단을 거느리며 북부 베르트랑과 사이가 나쁘다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/albestain.webp"
    },
    {
      "id": "pontes",
      "name": "폰테스 북부대공",
      "group": "nobles",
      "title": "북방의 겨울 곰",
      "short": "영지를 지키는 일 외에는 관심이 적지만 침입자에게 단호한 북부대공.",
      "long": "은발·청안. 신중하고 보수적이며 베르트랑 변경백의 오랜 숙적이다. 엘레프테로이 기사단을 보유한다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/pontes.webp"
    },
    {
      "id": "barnobafl",
      "name": "바르노바플 공작",
      "group": "nobles",
      "title": "북부의 호랑이",
      "short": "가문을 재건한 역사를 간직한 북방 공작.",
      "long": "은발·청안에 은갑과 털망토가 상징. 북부 최북단 몬스터를 막으며 서리칼날 최정예 기사단을 이끈다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/barnobafl.webp",
      "secret": "바르노바플의 첫 가주는 과거 용병으로 살았던 클레반과 누나 클라우디아. 전작 시대의 기억이 북부의 전설로 전해진다."
    },
    {
      "id": "julian",
      "name": "줄리안 공작",
      "group": "nobles",
      "title": "왕국 남부의 대귀족",
      "short": "예술과 사치를 즐기지만 자신의 권위에는 매우 엄격한 공작.",
      "long": "주황 머리·청안. 남부 에덴나이아를 지배하고 나이트템플러 기사단을 거느린다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/julian.webp"
    },
    {
      "id": "slavy",
      "name": "슬래비 백작",
      "group": "nobles",
      "title": "양봉과 사치로 알려진 남부 백작",
      "short": "줄리안 공작 아래에서 활동하는 부유한 봉건 영주.",
      "long": "금발·흑안에 검은 서클릿. 양봉을 표면 사업으로 내세우며 예술과 사치를 즐긴다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/slavy.webp",
      "secret": "지하 노예상을 운영하며 소년들을 납치해 줄리안에게 바치곤 하지만, 줄리안은 슬래비의 노예상 운영 사실을 모른다."
    },
    {
      "id": "fruity",
      "name": "프루티 백작",
      "group": "nobles",
      "title": "동부의 과일왕",
      "short": "온실에서 사계절 과일을 재배하는 동부 백작.",
      "long": "흑발·적안. 농업과 온실 기술로 과일을 왕국에 진상하며 신생 귀족에는 별다른 관심이 없다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/fruity.webp"
    },
    {
      "id": "highmore",
      "name": "하이모어 남작",
      "group": "nobles",
      "title": "북쪽 인접 영주",
      "short": "새 남작령을 자신의 옛 영향권으로 여기는 이웃 영주.",
      "long": "분홍 머리·분홍 눈. 플레이어가 다스리는 땅을 되찾을 기회를 엿본다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/highmore.webp"
    },
    {
      "id": "weford",
      "name": "웨포드 남작",
      "group": "nobles",
      "title": "남쪽 인접 영주",
      "short": "신생 남작령이 번영하면 병합하려는 영주.",
      "long": "갈색 머리·회색 눈. 새 남작령 남쪽에 거점을 둔다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/weford.webp"
    },
    {
      "id": "bark",
      "name": "바크 남작",
      "group": "nobles",
      "title": "동쪽 인접 영주",
      "short": "영지 개척에 적대적인 음악 애호가.",
      "long": "하늘색 머리에 금색 브리지와 푸른 눈. 하이볼 창시자라는 설정이 있다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/bark.webp"
    },
    {
      "id": "kyle",
      "name": "카일 자작",
      "group": "nobles",
      "title": "고리대금업 귀족",
      "short": "고리대금으로 재산과 세력을 키운 자작.",
      "long": "붉은 머리·보라색 눈. 냉철하고 추진력 있는 인물.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/kyle.webp"
    },
    {
      "id": "langale",
      "name": "란게일 자작",
      "group": "nobles",
      "title": "오렌지 과수원 영주",
      "short": "거대한 오렌지 과수원을 경영하는 귀족.",
      "long": "오렌지색 머리·눈이 특징. 과수원 경제를 기반으로 활동한다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/langale.webp"
    },
    {
      "id": "hansel",
      "name": "헨젤 백작",
      "group": "nobles",
      "title": "곡창과 제빵업의 영주",
      "short": "넓은 곡창과 제분소, 제빵소를 소유한 귀족.",
      "long": "백발·주황 눈. 빵과 과자를 좋아하지만 체형은 마른 편이다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/hansel.webp"
    },
    {
      "id": "noel",
      "name": "노엘 공작",
      "group": "nobles",
      "title": "폐쇄적인 부유한 공작",
      "short": "왕국에서도 손꼽히는 교역·곡창지대를 지배하지만 좀처럼 모습을 드러내지 않는다.",
      "long": "금발·청안. 건강 문제로 귀족회의에 대리인을 보내며 외부 교류가 적다. 마녀와 교류한다는 소문은 사실과 다르고 왕국에 대한 충성심이 강하다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/noel.webp"
    },
    {
      "id": "snow-leopard",
      "name": "설표",
      "group": "empire",
      "title": "사룡 제국의 권력자",
      "short": "황실과 제국 정계를 뒤흔드는 수수께끼의 강자.",
      "long": "은발·흑안. 황건적을 연상시키는 복장과 이미지를 갖는다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/snow-leopard.webp",
      "secret": "제국 황제를 시해하고 제국 영주들을 세뇌해 조종하는 진범이다."
    },
    {
      "id": "wayne",
      "name": "웨인 백작",
      "group": "empire",
      "title": "사룡 제국의 선봉 귀족",
      "short": "제국을 지키려는 애국심으로 루데린 침공을 준비하는 백작.",
      "long": "흑발·청안. 제국 내부에 벌어진 일의 진상을 알지 못한 채 왕국에 대한 군사 행동을 준비한다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/wayne.webp"
    },
    {
      "id": "tremiyan",
      "name": "트레미얀 후작",
      "group": "empire",
      "title": "황무지 출신 제국 후작",
      "short": "사룡 제국의 귀족 중 외모가 남다른 장미검의 후작.",
      "long": "은발·적안. 장미를 극도로 싫어하지만 장미검을 쥐고 다닌다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/tremiyan.webp",
      "secret": "1대 선조 트미시얀은 오래전 황무지에서 살아남아 제국의 사람이 되었다고 전해진다."
    },
    {
      "id": "chwiyeong",
      "name": "취영 자작",
      "group": "empire",
      "title": "묵죽성의 제국 영주",
      "short": "제국의 묵죽성을 다스리는 자작.",
      "long": "흑묵 병단을 보유하며 대나무 가지와 붓글씨를 문양으로 사용한다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/chwiyeong.webp"
    },
    {
      "id": "kriel",
      "name": "크리엘",
      "group": "outsiders",
      "title": "블러디 엘프의 지도자",
      "short": "흑색 산맥의 흑철 광맥과 던전을 장악하려는 엘프.",
      "long": "진지하고 신중한 지도자. 흑색 산맥 최고봉 암벽 요새에서 엘프 독립 세력의 부흥을 꾀한다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/kriel.webp"
    },
    {
      "id": "ramiel",
      "name": "라미엘",
      "group": "outsiders",
      "title": "블러디 엘프 일원",
      "short": "흑색 산맥의 블러디 엘프 진영에 속한다.",
      "long": "성실하며 미소를 띠는 인물. 크리엘과 함께 흑철 자원을 둘러싼 갈등에 속한다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/ramiel.webp"
    },
    {
      "id": "pirim",
      "name": "피림",
      "group": "outsiders",
      "title": "포레스트 엘프 족장",
      "short": "숲의 생태계를 지키는 평화로운 엘프 지도자.",
      "long": "검은 숲 외곽에서 자연을 지키고 엘프를 이끈다. 자연을 존중하는 개척자에게는 약초와 정보를 제공할 수 있다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/pirim.webp"
    },
    {
      "id": "sten",
      "name": "스텐",
      "group": "outsiders",
      "title": "회색재의 스텐 · 도적 두령",
      "short": "흑색 산맥 지형을 이용해 광물과 희귀 자원을 빼앗는 두령.",
      "long": "회색 머리·눈. 거대한 전투도끼를 사용하며 소수 정예로 움직여 흔적을 남기지 않는다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/sten.webp"
    },
    {
      "id": "karim",
      "name": "카림",
      "group": "outsiders",
      "title": "레몬 농장의 도적 두령",
      "short": "왕국 남부 농장과 상단을 약탈하는 쾌활한 두령.",
      "long": "레몬색 머리·회색 눈. 술 양조에 능하고 밀주로 돈을 벌며, 농장에 침입한 자에게는 잔혹하다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/karim.webp"
    },
    {
      "id": "banjo",
      "name": "반조",
      "group": "outsiders",
      "title": "서풍의 반조 · 도적 두령",
      "short": "검은 숲에서 활동하는 빠른 검객.",
      "long": "녹색 머리·회색 눈. 연녹색 검을 쓰고 지도를 비롯한 정보 문건을 중요하게 여긴다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/banjo.webp"
    },
    {
      "id": "bren",
      "name": "브렌",
      "group": "outsiders",
      "title": "배틀액스의 브렌 · 도적 두령",
      "short": "폐광산을 거점으로 건축 자재와 마차를 약탈하는 두령.",
      "long": "갈색 머리·회색 눈. 대형 배틀액스로 강력한 근접전을 펼치지만 거칠고 성급하다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/bren.webp"
    },
    {
      "id": "dale",
      "name": "데일",
      "group": "outsiders",
      "title": "전 천인대장 · 탈영병",
      "short": "봉건전쟁에 환멸을 느끼고 군을 떠난 베테랑 지휘관.",
      "long": "갈색 머리·초록 눈. 왕국 남서부를 떠돌며 몬스터를 토벌한다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/dale.webp"
    },
    {
      "id": "solomon",
      "name": "솔로몬",
      "group": "outsiders",
      "title": "은거 연금술사",
      "short": "에일 강 상류에서 물약과 약초, 마법적 지식을 연구한다.",
      "long": "분홍 머리·푸른 눈. 코카트리스를 타고 다니며 외부 간섭을 귀찮아한다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/solomon.webp"
    },
    {
      "id": "danak",
      "name": "단악",
      "group": "outsiders",
      "title": "의선 · 떠돌이 의사",
      "short": "사룡 제국을 떠돌며 적과 아군을 가리지 않고 치료한다.",
      "long": "흑발·흑안. 의술과 시술에 뛰어나지만 전투 능력은 약하다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/danak.webp"
    },
    {
      "id": "mori",
      "name": "모리",
      "group": "outsiders",
      "title": "그리즐리 용병단장",
      "short": "곰을 길들인 부대가 포함된 용병단의 지휘관.",
      "long": "약 100명으로 구성된 철갑 용병단을 지휘하며 일부 단원은 전투에 곰을 활용한다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/mori.webp"
    },
    {
      "id": "mer",
      "name": "메르",
      "group": "outsiders",
      "title": "와이번헌터스 단장",
      "short": "와이번·그리핀 사냥을 전문으로 하는 용병단장.",
      "long": "흑발·녹안. 정밀한 추적과 포획, 험지 정찰에 능한 전문 용병.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/mer.webp"
    },
    {
      "id": "shurpin",
      "name": "슈르핀",
      "group": "outsiders",
      "title": "란츠크네히트 용병단장",
      "short": "장창과 양손검으로 밀집 전투를 펼치는 보병대의 지휘관.",
      "long": "흑발과 금색 브리지. 유쾌하고 자유로운 분위기를 존중하지만 전투 중에는 엄격하다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/shurpin.webp"
    },
    {
      "id": "rian",
      "name": "리안",
      "group": "outsiders",
      "title": "브라반트 용병단장",
      "short": "경기병·궁병과 공성전에 특화된 실리적인 용병단장.",
      "long": "금발·흑안. 정확한 계약과 회계를 중시하는 협상가.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/rian.webp"
    },
    {
      "id": "erdi",
      "name": "에르디",
      "group": "religion",
      "title": "브리타흐 교단 교황",
      "short": "왕실과 평민 모두에게 존경받는 영적 지도자.",
      "long": "금발·청안. 직접 정치에 개입하지 않지만 왕과 귀족을 넘어서는 도덕적 영향력이 있다. 성기사단 팔라딘이 그를 따른다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/erdi.webp"
    },
    {
      "id": "kain",
      "name": "카인",
      "group": "religion",
      "title": "흑천교 교주",
      "short": "신분을 뒤엎고 만인이 평등해지는 흑천의 도래를 주장한다.",
      "long": "흑발·적안. 왕국 서부에서 신도를 모으며 왕국에 위험한 반란 집단으로 간주된다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/kain.webp"
    },
    {
      "id": "rain",
      "name": "레인",
      "group": "religion",
      "title": "황우교 교주",
      "short": "황금 소가 가져올 풍요를 약속하며 세력을 키운다.",
      "long": "주황 머리·청안. 헌금을 바탕으로 상단을 운영한다. 줄리안 공작의 배다른 동생이다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/rain.webp"
    },
    {
      "id": "yue",
      "name": "유에",
      "group": "religion",
      "title": "악몽 서커스단장",
      "short": "화려한 공연과 함께 기묘한 사건이 따라다니는 극단의 단장.",
      "long": "분홍 머리·노란 눈. 나이와 정체가 베일에 싸여 있고, 서커스는 정보 수집과 유력 인물 접근에 이용된다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/yue.webp"
    },
    {
      "id": "berith",
      "name": "베리트",
      "group": "secret",
      "title": "과거 시대의 성직자",
      "short": "잊힌 시대의 기록 속에 이름이 남은 인물.",
      "long": "전작 시대의 성직자로서 이름만 후대의 일부 기억 속에 남아 있다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/berith.webp",
      "secret": "과거 신성왕국 하이비커스·로젠탈이 존재하던 시대 장미교단의 소년 사제였다. 피아르는 그 이름을 기억한다.",
      "hidden": true
    },
    {
      "id": "world-tree-fiar",
      "name": "피아르",
      "group": "secret",
      "title": "잊힌 시대와 연결된 인물",
      "short": "잊힌 세계에 관한 기록을 품은 인물.",
      "long": "현재 시대에 존재하지만 그 정체와 기원은 일반 대륙인에게 알려져 있지 않다.",
      "image": "../../assets/chatbots/rural-lord-survival/portraits/world-tree-fiar.webp",
      "secret": "과거 세계수는 대륙의 붕괴를 막기 위해 희생했다. 피아와 피르로 활동했던 기억을 일부 가진 현재의 피아르는 생존한 세계수의 잔재로, 자신을 기억하는 이에게 기뻐한다. 누구에게도 먼저 나타나지 않는다.",
      "hidden": true
    }
  ],
  "locations": [
    {
      "id": "domain",
      "name": "이름 없는 남작령",
      "tag": "SOUTHWEST FRONTIER",
      "dir": "루데린 왕국 남서 끝자락",
      "desc": "아직 지명도 뚜렷하지 않은 황무지. 목재 캠프와 낡은 목책, 밭 1천 평에서 모든 것이 시작된다.",
      "goods": [
        "초기 영민 45명",
        "금고 500금화",
        "보좌관 알베론"
      ]
    },
    {
      "id": "forest",
      "name": "검은 숲",
      "tag": "THE BLACK FOREST",
      "dir": "남작령의 북쪽",
      "desc": "빛조차 잘 들지 않는 빽빽하고 습한 숲. 오크·고블린의 주요 서식지이며 안쪽에는 오크 부족의 큰 야영지가 있다.",
      "goods": [
        "목재·약초와 숲 자원",
        "오크·고블린",
        "포레스트 엘프"
      ]
    },
    {
      "id": "mountains",
      "name": "흑색 산맥",
      "tag": "THE BLACK RANGE",
      "dir": "남작령의 북동쪽",
      "desc": "풍부한 철광석과 보석이 잠든 산악지대. 트롤과 블러디 엘프가 활동하며, 버려진 드워프 광산을 통해 대규모 지하 던전으로 이어진다.",
      "goods": [
        "철광석·보석",
        "희귀 흑철",
        "트롤·블러디 엘프"
      ]
    },
    {
      "id": "river",
      "name": "에일 강",
      "tag": "RIVER OF TRADE",
      "dir": "남작령의 서쪽",
      "desc": "흑색 산맥에서 발원해 왕국 서부로 흐르는 거친 강. 토양이 비옥하고 교역의 생명선이지만 리자드맨이 강변을 지킨다.",
      "goods": [
        "교역로",
        "농경지",
        "리자드맨"
      ]
    },
    {
      "id": "capital",
      "name": "루미나가르텐",
      "tag": "ROYAL CAPITAL",
      "dir": "남작령 북동쪽 약 500km",
      "desc": "레비 왕과 궁정, 브리타흐 교단의 거점. 왕실 토너먼트와 추계 사냥대회가 열리는 왕도.",
      "goods": [
        "왕국의 중심",
        "대귀족 회의",
        "왕실 행사"
      ]
    },
    {
      "id": "north",
      "name": "왕국의 북부",
      "tag": "FROZEN FRONTIER",
      "dir": "수도 북쪽",
      "desc": "바이칼 호수와 백색 산맥을 중심으로 예티·와이번 등 겨울 몬스터가 나타난다. 폰테스·베르트랑·바르노바플이 세력을 이루고 있다.",
      "goods": [
        "바이칼 호수",
        "백색 산맥",
        "북방 기사단"
      ]
    },
    {
      "id": "west",
      "name": "야릴 구릉지",
      "tag": "THE WEST HILLS",
      "dir": "왕국 서부",
      "desc": "완만한 구릉과 코볼트의 서식지가 있는 왕국 서부 지대.",
      "goods": [
        "구릉지",
        "코볼트"
      ]
    },
    {
      "id": "east",
      "name": "리드 대초원",
      "tag": "EASTERN GRASSLAND",
      "dir": "왕국 동부",
      "desc": "넓은 초원 지대. 타우로스가 출몰한다.",
      "goods": [
        "대초원",
        "타우로스"
      ]
    },
    {
      "id": "dungeon",
      "name": "흑색 산맥의 지하 대던전",
      "tag": "THE BLACK IRON DEPTHS",
      "dir": "흑색 산맥 폐광 아래",
      "desc": "옛 드워프의 갱도와 자연 동굴이 만난 지하 공간. 오래된 채굴 설비와 흑철 광맥이 잠들어 있고 심층 몬스터들이 점거한다.",
      "goods": [
        "흑철 광맥",
        "고대 설비",
        "심층 트롤"
      ],
      "secret": "블러디 엘프는 최심부를 성역으로 삼아 흑철 무기를 제작하는 비밀 공방을 운영한다."
    }
  ],
  "factions": [
    {
      "name": "루데린 왕국",
      "kind": "nation",
      "home": "대륙 동부 · 루미나가르텐",
      "desc": "어린 레비 왕과 강력한 대귀족들이 국정을 함께 움직이는 왕국. 봉건전쟁으로 혼란과 탈영병, 난민이 늘었다."
    },
    {
      "name": "사룡 제국",
      "kind": "nation",
      "home": "루데린 왕국 서쪽",
      "desc": "왕국과 전쟁을 준비하는 동양풍 제국. 기사단 대신 병단이라 부르는 군제를 사용한다.",
      "secret": "설표가 황제를 시해하고 제국 영주들을 세뇌해 조종한다. 웨인은 이 사실을 모른 채 전쟁의 선봉에 선다."
    },
    {
      "name": "브리타흐 교단",
      "kind": "religion",
      "home": "루미나가르텐",
      "desc": "교황 에르디가 이끄는 교단. 귀족과 영민에게 깊은 정신적 영향력을 행사하며 팔라딘 성기사단을 거느린다."
    },
    {
      "name": "흑천교",
      "kind": "religion",
      "home": "왕국 서부",
      "desc": "카인이 이끄는 종교 집단. 신분의 평등과 기존 귀족 질서의 전복을 말하며 하층민과 난민의 지지를 모은다."
    },
    {
      "name": "황우교",
      "kind": "religion",
      "home": "왕국 남부",
      "desc": "레인이 이끄는 종교 집단. 황금 소가 가져올 풍요를 내세우며 헌금과 상단 사업으로 영향력을 키운다."
    },
    {
      "name": "악몽 서커스",
      "kind": "religion",
      "home": "왕국 각 도시",
      "desc": "유에가 이끄는 유랑 서커스. 공연 뒤 도난과 실종, 혼란이 뒤따른다는 소문이 돈다."
    },
    {
      "name": "포레스트 엘프",
      "kind": "tribe",
      "home": "검은 숲 외곽 · 에일 강 상류",
      "desc": "피림이 이끄는 자연 친화적인 숲의 엘프. 숲을 존중하는 영주와 교류할 수 있지만 개발이 생태를 해치면 반발한다."
    },
    {
      "name": "블러디 엘프",
      "kind": "tribe",
      "home": "흑색 산맥 최고봉",
      "desc": "크리엘이 이끄는 폐쇄적인 엘프 세력. 흑철의 독점과 옛 엘프의 군사력 회복을 추구하며 광산 개척에 적대적이다."
    },
    {
      "name": "그리즐리 용병단",
      "kind": "mercenary",
      "home": "왕국 각 전선",
      "desc": "모리가 이끄는 약 100명의 철갑 용병단. 일부는 곰을 길들여 전장에 동행한다."
    },
    {
      "name": "와이번헌터스",
      "kind": "mercenary",
      "home": "북부 백색 산맥",
      "desc": "메르가 이끄는 와이번·그리핀 전문 사냥 용병단. 대형 쇠뇌, 독화살과 포획 도구를 활용한다."
    },
    {
      "name": "란츠크네히트",
      "kind": "mercenary",
      "home": "왕국 여러 전장",
      "desc": "슈르핀이 지휘하는 보병 용병단. 대형 양손검과 장창의 밀집 진형에 특화됐으며 자유와 전투 규율을 함께 중시한다."
    },
    {
      "name": "브라반트 용병단",
      "kind": "mercenary",
      "home": "왕국 서부 출신 · 전역 활동",
      "desc": "리안이 이끄는 고용 용병단. 경기병·궁병 및 공성·수성전에 능하며 계약 조건과 급료를 엄격하게 따진다."
    },
    {
      "name": "회색재의 스텐 도적단",
      "kind": "bandit",
      "home": "흑색 산맥",
      "desc": "광물과 산맥 희귀 자원을 노리는 산악 소수 정예 도적들."
    },
    {
      "name": "레몬 농장 도적단",
      "kind": "bandit",
      "home": "왕국 남부",
      "desc": "카림이 이끄는 도적들. 상단·농장을 약탈하고 밀주를 팔아 자금을 마련한다."
    },
    {
      "name": "서풍의 반조 도적단",
      "kind": "bandit",
      "home": "검은 숲",
      "desc": "숲의 도적단. 여행자를 노리면서 지도와 문서를 중시한다."
    },
    {
      "name": "브렌의 폐광산 도적단",
      "kind": "bandit",
      "home": "폐광산",
      "desc": "브렌이 이끄는 도적단. 자재·마차를 약탈하고 도끼와 둔기 중심으로 싸운다."
    }
  ],
  "monsters": [
    {
      "id": "orc",
      "name": "오크",
      "chief": "그룸",
      "habitat": "검은 숲 깊숙한 부족 야영지",
      "summary": "힘과 폭력을 숭상하는 부족. 가장 먼저 남작령의 개척을 가로막는다.",
      "features": "녹색 피부와 송곳니, 강력한 괴력. 추장 그룸은 큰 전투망치를 사용하며 정면 승부를 고집한다.",
      "image": "../../assets/chatbots/rural-lord-survival/monsters/orc.webp"
    },
    {
      "id": "goblin",
      "name": "고블린",
      "chief": "스키트",
      "habitat": "검은 숲의 복잡한 숲길",
      "summary": "수는 많고 교활하며 매복과 소규모 약탈을 즐기는 종족.",
      "features": "누런 녹색 피부와 뾰족한 귀. 스키트는 오크에게 복종하는 척하면서도 기회를 노리며 초소를 기습한다.",
      "image": "../../assets/chatbots/rural-lord-survival/monsters/goblin.webp"
    },
    {
      "id": "troll",
      "name": "트롤",
      "chief": "프라카",
      "habitat": "흑색 산맥 고지와 동굴",
      "summary": "단단한 피부와 뛰어난 재생력을 지닌 광산 개척의 큰 위협.",
      "features": "푸른 피부와 강한 재생력, 높은 지능. 추장 프라카는 광물을 가지고 놀거나 먹는 것을 좋아하지만 광산 침범에는 공격적이다.",
      "image": "../../assets/chatbots/rural-lord-survival/monsters/troll.webp"
    },
    {
      "id": "imp",
      "name": "임프",
      "chief": "챠피",
      "habitat": "검은 숲·흑색 산맥 경계",
      "summary": "장난과 교란, 환영 마법에 능한 날개 달린 작은 종족.",
      "features": "밝은 녹색 머리와 눈, 비행 능력. 챠피는 건물 훼손, 도난, 소문 유포로 혼란을 일으킨다.",
      "image": "../../assets/chatbots/rural-lord-survival/monsters/imp.webp"
    },
    {
      "id": "lizardman",
      "name": "리자드맨",
      "chief": "크록",
      "habitat": "에일 강 유역",
      "summary": "강변을 신성한 사냥터로 삼고 영토를 지키는 전사 종족.",
      "features": "사람과 비슷한 체형, 꼬리와 부분적인 비늘. 추장 크록은 강의 오염과 침범에 강하게 저항한다.",
      "image": "../../assets/chatbots/rural-lord-survival/monsters/lizardman.webp"
    }
  ],
  "ranks": [
    {
      "name": "남작",
      "value": 1.2
    },
    {
      "name": "자작",
      "value": 1.5
    },
    {
      "name": "백작",
      "value": 2
    },
    {
      "name": "후작",
      "value": 3
    },
    {
      "name": "공작",
      "value": 4.5
    }
  ],
  "calendar": [
    {
      "when": "매월 9일",
      "name": "인구 증감 보고",
      "detail": "영지의 인구 변화를 정기적으로 확인한다."
    },
    {
      "when": "매월 10일",
      "name": "정기 세금 징수",
      "detail": "영민 수와 작위별 계수에 따라 징수. 정기 징수로는 지지도가 감소하지 않는다."
    },
    {
      "when": "매월 13일",
      "name": "교역 현황 보고",
      "detail": "영지의 상업·교역 실적을 점검한다."
    },
    {
      "when": "매월 15일",
      "name": "군사 유지비",
      "detail": "병력 수와 급료, 유지비, 작위별 계수에 따라 비용을 산정한다."
    },
    {
      "when": "매년 5월",
      "name": "왕실 토너먼트",
      "detail": "국왕이 개최하는 군대 대 군대 1:1 야전. 사망한 병사는 마법으로 부활하지만 재참전은 불가하고, 개최 중 봉건전쟁은 금지된다."
    },
    {
      "when": "매년 9월",
      "name": "왕실 추계 사냥대회",
      "detail": "희귀한 사냥감을 포획해 바치는 행사. 불참하는 영주는 사냥 지원금을 보내야 한다."
    }
  ],
  "knightOrders": [
    {
      "lord": "레비 왕",
      "seat": "루미나가르텐",
      "unit": "킹스가드",
      "sigil": "왕관을 쓴 황금사자"
    },
    {
      "lord": "알데바란",
      "seat": "아우로라",
      "unit": "프리메 기사단",
      "sigil": "올리브가지와 8각별"
    },
    {
      "lord": "알베스타인",
      "seat": "발로르홀드",
      "unit": "붉은깃발선봉대 기사단",
      "sigil": "검정황소"
    },
    {
      "lord": "폰테스",
      "seat": "무테스캐슬",
      "unit": "엘레프테로이 기사단",
      "sigil": "북극곰"
    },
    {
      "lord": "베르트랑",
      "seat": "루푸스레인",
      "unit": "푸른사자 기사단",
      "sigil": "청사자"
    },
    {
      "lord": "바르노바플",
      "seat": "드롬베르그",
      "unit": "서리칼날 기사단",
      "sigil": "백호"
    },
    {
      "lord": "줄리안",
      "seat": "에덴나이아",
      "unit": "나이트템플러 기사단",
      "sigil": "황금칼"
    },
    {
      "lord": "노엘",
      "seat": "로젠하임",
      "unit": "팔라틴가드 기사단",
      "sigil": "붉은장미"
    },
    {
      "lord": "하이모어",
      "seat": "벨베데르",
      "unit": "하이모어 기사단",
      "sigil": "분홍백조"
    },
    {
      "lord": "웨포드",
      "seat": "그레이스톤",
      "unit": "웨포드 기사단",
      "sigil": "걷는고양이"
    },
    {
      "lord": "카일",
      "seat": "에피노사",
      "unit": "에피 기사단",
      "sigil": "해골과 금화"
    },
    {
      "lord": "란게일",
      "seat": "렌지베르제",
      "unit": "오렌 기사단",
      "sigil": "오렌지 3개"
    },
    {
      "lord": "헨젤",
      "seat": "파리나캐슬",
      "unit": "베이커 기사단",
      "sigil": "교차된 바게트빵"
    },
    {
      "lord": "프루티",
      "seat": "프루휘",
      "unit": "바이타 기사단",
      "sigil": "바나나"
    },
    {
      "lord": "슬래비",
      "seat": "드뭉",
      "unit": "G.BEE 기사단",
      "sigil": "장수말벌"
    },
    {
      "lord": "히비스커스",
      "seat": "그룬월더",
      "unit": "하이비커스 기사단",
      "sigil": "와이번과 월계수"
    }
  ],
  "imperialOrders": [
    {
      "lord": "설표",
      "seat": "흑룡성",
      "unit": "금의위",
      "sigil": "설표와 검은 용"
    },
    {
      "lord": "웨인",
      "seat": "웅진성",
      "unit": "흑호기",
      "sigil": "흑호와 검"
    },
    {
      "lord": "트레미얀",
      "seat": "황무성",
      "unit": "장미검 기사단",
      "sigil": "붉은 장미를 꿰뚫는 은검"
    },
    {
      "lord": "청염공작",
      "seat": "청수성",
      "unit": "청룡위",
      "sigil": "푸른 용과 여의주"
    },
    {
      "lord": "흑풍공작",
      "seat": "흑사성",
      "unit": "현무대",
      "sigil": "거북 위의 뱀"
    },
    {
      "lord": "홍란백작",
      "seat": "단풍성",
      "unit": "화염 병단",
      "sigil": "붉은 단풍잎과 불꽃"
    },
    {
      "lord": "백하백작",
      "seat": "옥경성",
      "unit": "백로 병단",
      "sigil": "백로와 갈대"
    },
    {
      "lord": "진양자작",
      "seat": "비호성",
      "unit": "비호대",
      "sigil": "날개 달린 호랑이"
    },
    {
      "lord": "우현자작",
      "seat": "은하성",
      "unit": "만월 병단",
      "sigil": "보름달과 은빛 물결"
    },
    {
      "lord": "소청남작",
      "seat": "난꽃성",
      "unit": "난초 수호대",
      "sigil": "난초와 나비"
    },
    {
      "lord": "무운남작",
      "seat": "구름성",
      "unit": "비구름 병단",
      "sigil": "먹구름"
    },
    {
      "lord": "취영자작",
      "seat": "묵죽성",
      "unit": "흑묵 병단",
      "sigil": "대나무와 붓글씨"
    },
    {
      "lord": "천우자작",
      "seat": "철탑성",
      "unit": "금강 병단",
      "sigil": "금강저와 탑"
    },
    {
      "lord": "해연",
      "seat": "동비성",
      "unit": "비룡함대",
      "sigil": "파도 위의 용"
    },
    {
      "lord": "명월공작",
      "seat": "월광성",
      "unit": "적안 병단",
      "sigil": "붉은 눈과 달"
    },
    {
      "lord": "청운자작",
      "seat": "와룡성",
      "unit": "잠룡대",
      "sigil": "구름 속 용"
    },
    {
      "lord": "단설남작",
      "seat": "설화성",
      "unit": "은설 병단",
      "sigil": "여우꼬리"
    }
  ],
  "secrets": [
    {
      "heading": "두 시대의 연결",
      "category": "ANCIENT HISTORY",
      "content": "오늘날에는 잊힌 신성왕국 하이비커스와 로젠탈 공국, 민테아 공화국, 샤이엔 부족연맹과 왈라키아의 밤이 한때 존재했다. 당시 마녀들과 벌인 전쟁의 잔재는 후대로 전해진다."
    },
    {
      "heading": "바르노바플 가문의 시조",
      "category": "FROSTBLADE LEGACY",
      "content": "바르노바플을 일으킨 1대 가주는 과거 서리칼날 용병단의 클레반과 누나 클라우디아였다. 후손에게는 전설처럼 전해졌지만, 바르노바플 가문은 옛 시대를 기억하는 드문 집안이다."
    },
    {
      "heading": "세계수의 마지막 기억",
      "category": "FIAR",
      "content": "전작의 세계수는 대륙 붕괴를 막기 위해 자신을 희생했다. 과거 피아와 피르로 활동했던 기억이 남은 존재가 지금의 피아르다. 그는 특정 이름들을 부분적으로 기억하며, 스스로 먼저 누구에게 나타나지 않는다."
    },
    {
      "heading": "황실을 뒤흔든 설표",
      "category": "DEAD DRAGON EMPIRE",
      "content": "사룡 제국의 황제를 살해하고 영주들을 세뇌하여 조종하는 배후 인물은 설표다. 국경 전쟁을 준비하는 웨인은 제국 내부의 진실을 모른다."
    },
    {
      "heading": "슬래비의 숨겨진 사업",
      "category": "HIDDEN TRADE",
      "content": "슬래비 백작은 지하 노예상을 운영한다. 납치한 소년들을 상위 영주 줄리안에게 바치지만 줄리안은 그가 지하 노예상을 운영한다는 사실을 알지 못한다."
    },
    {
      "heading": "흑철의 공방",
      "category": "BLACK IRON",
      "content": "블러디 엘프의 세력은 흑색 산맥 지하 대던전의 최심부를 성역으로 삼아 흑철 무기를 제작하는 비밀 공방을 운영한다. 크리엘과 라미엘이 이 지역을 두고 핵심적으로 충돌한다."
    },
    {
      "heading": "히비스커스 가문의 유물",
      "category": "RELICS",
      "content": "히비스커스 후작가에는 오래전 하이비커스 왕국의 훼손된 기록과 유물이 남아 있다. 대표 유물로 노아의 검과 아이바의 성서가 전해진다."
    },
    {
      "heading": "장미검을 쥔 후작의 선조",
      "category": "TREMİYAN LEGACY",
      "content": "제국 후작 트레미얀의 1대 선조는 과거 남부 황무지에 추방되었던 트미시얀이라고 전해진다. 장미를 싫어하면서도 장미검을 사용하는 이유의 단서다."
    },
    {
      "heading": "피아르가 기억하는 이름들",
      "category": "FRAGMENTS",
      "content": "피아르가 기억하는 전작의 이름에는 클레반, 노아 왕자, 트미시얀, 아이바, 베리트, 멜피온, 레온, 성 르네이드, 민티렐, 아스쿠헤테우 등이 있다. 마녀의 이름은 일부 기억하지만 외형은 잊었다."
    }
  ],
  "systems": {
    "supportTiers": [
      {
        "name": "불만",
        "range": "1–20",
        "result": "정기 세금 -20%"
      },
      {
        "name": "보통",
        "range": "21–60",
        "result": "기본 세금"
      },
      {
        "name": "만족",
        "range": "61–80",
        "result": "정기 세금 +10%"
      },
      {
        "name": "충성",
        "range": "100",
        "result": "정기 세금 +20%"
      },
      {
        "name": "폭동 위험",
        "range": "0 미만",
        "result": "정기 세금 -50% (시작 초기 제외)"
      }
    ],
    "troopRanks": [
      "기초",
      "미숙",
      "보통",
      "숙련",
      "베테랑",
      "정예"
    ],
    "events": [
      {
        "name": "도적 습격 / 몬스터 침공",
        "chance": "기본 5%",
        "summary": "수입이 많을수록 습격 확률이 올라간다. 승리하면 전리품과 포로를 얻고 패배하면 피해를 입는다."
      },
      {
        "name": "랜덤 봉건전쟁",
        "chance": "기본 5%",
        "summary": "플레이어 수준에 따라 생성되는 다른 영주와의 전쟁. 임의 생성 영주라는 점을 구별한다."
      },
      {
        "name": "기존 귀족과의 봉건전쟁",
        "chance": "기본 5%",
        "summary": "등록된 영주와 충돌한다. 승패에 따라 포로·영지 확보 또는 영지 몰수·배상·망명 선택지 등 큰 결과가 발생한다."
      }
    ],
    "taxFactor": "영민 수 × 작위별 계수",
    "maintenance": "병력 수 × (월간 급료 3 × 유지비 1.5) × 작위별 계수",
    "forcedTax": "강제 세금 징수: 1,000금화 / 지지도 -5",
    "supportNote": "지지도는 -100~100 범위이며 사건별 가감 폭은 최대 5다. 시작 초기 지지도 0은 불만·폭동 규칙의 예외다."
  },
  "note": "공개 설정집은 사용자 제공 설정의 설명용 요약으로, 실제 채팅봇의 출력 명령과 운영 프롬프트는 수록하지 않는다."
};
