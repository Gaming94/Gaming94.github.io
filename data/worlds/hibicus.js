/* 하이비커스 연대기 공개 설정집. 사용자 제공 전문·로어북을 기반으로 정리. 내부 출력 지시, 관계 수치 로직 및 원본 전문 미게시. */
window.HIBICUS_WORLD = {
  "edition": "KAOR NOTE · WORLD ARCHIVE",
  "name": "하이비커스 연대기",
  "subtitle": "하나의 세계, 수많은 선택",
  "subtitleEn": "HIBICUS CHRONICLE",
  "description": "오랜 전쟁을 벌이는 신성왕국 하이비커스와 로젠탈 공국, 자연을 둘러싼 샤이엔과 민테아의 갈등, 마녀협회와 암살자 길드 블러드러스트의 대립. 당신이 어디로 가든 이야기는 계속된다.",
  "chatUrl": "https://babechat.ai/character/u/465a5dd4-05ab-4179-a2c4-fd42cb58fe32/profile",
  "cover": "../../assets/chatbots/hibicus/hibicus.webp",
  "map": "../../assets/chatbots/hibicus/지도.webp",
  "intro": [
    {
      "name": "여관의 소문",
      "text": "하이비커스 국왕께서 쓰러지셨다며?"
    },
    {
      "name": "또 다른 소문",
      "text": "마녀협회도 활동을 시작했대."
    },
    {
      "name": "이어지는 소문",
      "text": "마녀협회가 움직였으면 블러드러스트도 움직이겠구만."
    },
    {
      "name": "여관주인 소년",
      "text": "하하 요즘 분위기가 많이 어수선 하죠? 여기는 세상의 모든 정보들이 모이는 세계수 여관이에요. 대륙의 정세나 사건들, 사람들의 정보들이 오가죠. 궁금하신 게 있으실까요?"
    }
  ],
  "factions": [
    {
      "id": "hibicus",
      "name": "신성왕국 하이비커스",
      "category": "nation",
      "symbol": "♛",
      "eyebrow": "HOLY KINGDOM · WEST",
      "location": "대륙 서부 · 수도 루미나가르드",
      "summary": "광휘의 신 브리타흐를 숭배하는 기사와 신앙의 왕국. 로젠탈과의 오랜 전쟁으로 국력이 소모되고 있다.",
      "description": "황제 제레온의 장기 침상과 전선의 공방 속에서도 왕실과 교단이 강력한 영향력을 행사한다. 1왕자 율리안은 북동부 전선, 2왕자 다비드는 로젠탈의 엘레나와 대립하며, 3왕자 노아는 남부 황무지 개척을 맡았다.",
      "relations": [
        "로젠탈 공국: 장기 전쟁",
        "브리타흐 교단: 국교"
      ]
    },
    {
      "id": "rosenthal",
      "name": "강철장미 로젠탈 공국",
      "category": "nation",
      "symbol": "❀",
      "eyebrow": "DUCHY OF ROSES · NORTHEAST",
      "location": "대륙 북동부 · 수도 로젠하임",
      "summary": "붉은 장미와 여성 기사단을 상징으로 삼는 공국. 하이비커스와 독립·존속을 둘러싼 오랜 전쟁을 벌인다.",
      "description": "약 150년 전 하이비커스에서 독립했다. 엘레나는 붉은 장미 기사단, 니아나는 푸른 장미 기사단을 지휘한다. 장미교단의 신앙이 깊으며 남성에게는 불리한 신분 질서가 존재한다.",
      "relations": [
        "하이비커스: 전쟁",
        "장미교단: 국교"
      ]
    },
    {
      "id": "cheyenne",
      "name": "샤이엔 부족연맹",
      "category": "nation",
      "symbol": "❧",
      "eyebrow": "FOREST ALLIANCE · SOUTH",
      "location": "대륙 남부 · 숲의 심장",
      "summary": "대산림과 늪지의 자연과 조화를 이루며 살아가는 여러 부족의 연맹. 민테아의 개척과 대립한다.",
      "description": "수렵과 채집, 영적인 의식을 통해 살아가며 숲을 해치는 이들에게는 활과 주술로 맞선다. 남부 황무지에서 식량 문제로 대산림으로 이주했고, 가장 강성한 샤이엔을 중심으로 연맹을 이루었다.",
      "relations": [
        "민테아: 자연관과 영토의 대립"
      ]
    },
    {
      "id": "minthea",
      "name": "민테아 공화국",
      "category": "nation",
      "symbol": "✽",
      "eyebrow": "THE GARDEN OF LIFE · SOUTH",
      "location": "대륙 남부 · 수도 에데니아",
      "summary": "식물의 생명과 질서를 숭배하는 신생 공화국. 대륙을 거대한 정원으로 만들겠다는 이상 아래 영토를 확장한다.",
      "description": "민티렐의 뜻을 내세워 경작을 신성한 정화로, 야생을 혼돈으로 여긴다. 백색·민트색 건축과 식물학, 연금술, 식물 마법이 발달했다. 샤이엔 부족연맹과 격렬하게 대립한다.",
      "relations": [
        "샤이엔: 개척 전선",
        "민티렐: 신앙"
      ]
    },
    {
      "id": "witches",
      "name": "마녀협회",
      "category": "power",
      "symbol": "☾",
      "eyebrow": "COVEN · HIDDEN TOWER",
      "location": "동남부의 숨겨진 마탑 · 활동 범위 전역",
      "summary": "네 계절의 최고마녀가 이끄는 비밀 조직. 어느 국가에도 속하지 않고 혼란과 변칙적인 마법을 일으킨다.",
      "description": "봄 타이라, 여름 아마라, 가을 프르후, 겨울 카일리아흐가 핵심. 수습마녀 앙그르보다와 개구리왕자 로기도 마탑에서 생활한다.",
      "relations": [
        "블러드러스트: 오랜 악연",
        "브리타흐 교단: 대립"
      ]
    },
    {
      "id": "bloodlust",
      "name": "블러드러스트",
      "category": "power",
      "symbol": "⚔",
      "eyebrow": "ASSASSIN GUILD · CENTRAL RANGE",
      "location": "대륙 중앙 산맥 · 세계수에서 남동쪽 약 150km",
      "summary": "어느 국가에도 속하지 않는 암살자 길드. 마녀협회의 계획을 막으려 움직인다.",
      "description": "수장 로크엘러가 자리를 비운 동안 직속 제자 세이비가 임시 수장을 맡는다. 길드원들은 임무에 진지하게 임할 때 각자의 가면을 착용한다.",
      "relations": [
        "마녀협회: 적대"
      ]
    },
    {
      "id": "britach-church",
      "name": "브리타흐 교단",
      "category": "religion",
      "symbol": "✦",
      "eyebrow": "STATE CHURCH",
      "location": "하이비커스 · 브리타흐 대성당",
      "summary": "광휘의 신 브리타흐를 섬기는 하이비커스의 국교. 다섯 교구, 사제단과 힐러단으로 구성된다.",
      "description": "사제단은 마리안, 힐러단은 아이바가 이끌며 전쟁을 치르는 왕자들에게 성직자를 파견한다. 교단은 마녀협회에 강한 적의를 품고 있다.",
      "relations": [
        "하이비커스: 국교",
        "장미교단: 종교적 대립"
      ]
    },
    {
      "id": "rose-church",
      "name": "장미교단",
      "category": "religion",
      "symbol": "✾",
      "eyebrow": "ORDER OF THE ROSE",
      "location": "로젠탈 · 피의 화원",
      "summary": "장미의 신 로잘린을 숭배하는 공국의 국교. 세 교구와 전투·그림자 사제단이 활동한다.",
      "description": "대주교 피의 메리가 최고 지도자이며 메디치·메살리나가 전투·그림자 사제단을 맡는다. 여성 중심의 성직 구조 속에서 소년 사제 베리트는 소외당하고 있다.",
      "relations": [
        "로젠탈: 국교"
      ],
      "secret": "장미교단의 수뇌부는 마녀협회와 이어져 있으며, 교단은 마녀협회가 세운 거짓 종교다."
    },
    {
      "id": "aegis",
      "name": "아이기스 방패용병단",
      "category": "other",
      "symbol": "◇",
      "eyebrow": "MERCENARIES",
      "location": "대륙 전역 · 이동형",
      "summary": "특정 국가에 소속되지 않고 의뢰를 수행하는 베테랑 방어 특화 용병단.",
      "description": "단장 펠릭스와 라비가 주요 인물. 견고한 방어를 자랑하며 전원 가죽 갑옷을 착용한다.",
      "relations": [
        "하이비커스·로젠탈 전선 부근에서 활동"
      ]
    },
    {
      "id": "frostblade",
      "name": "서리칼날 용병단",
      "category": "other",
      "symbol": "❄",
      "eyebrow": "NORTHERN MERCENARIES",
      "location": "대륙 북서부",
      "summary": "몰락한 귀족 가문 바르노바폴의 명예를 되찾으려는 남매가 이끄는 용병단.",
      "description": "클라우디아와 클레반이 은갑과 털망토를 두르고 북부에서 의뢰를 수행한다.",
      "relations": [
        "하이비커스 국경·북부 무법지대"
      ]
    },
    {
      "id": "dromberg",
      "name": "드롬베르그 교회단",
      "category": "other",
      "symbol": "✝",
      "eyebrow": "FALLEN CHURCH · NORTH",
      "location": "구 드롬베르그 왕국령 · 북부 폐교회",
      "summary": "신앙 개혁에서 출발했지만 약탈과 폭력적 이단 심판으로 변질한 교회단.",
      "description": "과거 노든베르그 대교회 화재 이후 세력이 쇠퇴했고, 현재 성 제루를 주축으로 폐교회에서 활동한다. 간부들은 은갑과 붉은 망토를 착용한다.",
      "relations": [
        "북방 도로의 여행자들: 위협"
      ]
    },
    {
      "id": "wallachia",
      "name": "왈라키아의 밤",
      "category": "other",
      "symbol": "♠",
      "eyebrow": "NIGHT OF WALLACHIA",
      "location": "대륙 북부 · 왈라키아 산맥 고성",
      "summary": "진조들이 지배하는 뱀파이어 집단. 북부의 진정한 패자가 되기 위해 움직인다.",
      "description": "바토리와 지게네, 체페슈, 레비, 노스페라투스가 주요 인물. 인간 사회에서 거리를 두고 혈통과 영역의 비밀을 지킨다.",
      "relations": [
        "구 드롬베르그 왕국령 북방"
      ]
    },
    {
      "id": "library",
      "name": "만물의 대도서관",
      "category": "other",
      "symbol": "▤",
      "eyebrow": "THE GRAND LIBRARY",
      "location": "세계수 동쪽 약 10km",
      "summary": "대륙 중앙에서 오래된 지식과 잊힌 역사를 보존하는 중립 도서관.",
      "description": "도서관장 에오스가 홀로 운영하며 금지된 지식의 유출을 막는다. 방문객에게 유물이나 자료 탐색을 부탁하기도 한다.",
      "relations": [
        "세계수: 인접"
      ]
    },
    {
      "id": "griffin",
      "name": "그리핀 용병단",
      "category": "other",
      "symbol": "♜",
      "eyebrow": "DRAGON RAID LEGACY",
      "location": "대륙 북부 · 과거의 용병단",
      "summary": "열세 마리 드래곤을 토벌했다고 기록된 실력파 용병단. 마지막 원정에서 메디만 생존했다.",
      "description": "단장 베일 등 동료들이 사망했고, 생존자 메디는 검은 그리핀 망토를 걸친 채 홀로 북부를 떠돌고 있다.",
      "relations": [
        "메디: 유일한 생존자"
      ]
    },
    {
      "id": "liberators",
      "name": "노예 해방단",
      "category": "other",
      "symbol": "⚑",
      "eyebrow": "FALLEN IDEALS",
      "location": "전쟁터와 대륙 각지",
      "summary": "노예 출신 히아킨과 가니메데가 결성한 집단. 해방 활동으로 세력을 키웠지만 이념이 변질했다.",
      "description": "한때 노예시장을 공격해 사람들을 구하던 집단이었으나, 인원이 늘고 돈맛을 보면서 오히려 노예를 사냥한다. 약 30명 규모.",
      "relations": [
        "히아킨·가니메데: 창설자"
      ]
    },
    {
      "id": "black-fleet",
      "name": "검은함대",
      "category": "other",
      "symbol": "☠",
      "eyebrow": "PIRATE FLEET · WESTERN SEA",
      "location": "대륙 서부 바다",
      "summary": "티치가 이끄는 대형 해적 세력. 하얀산양과 검은까마귀 해적단의 끊임없는 경쟁이 특징이다.",
      "description": "왕국의 선박을 약탈하고 해상 몬스터를 사냥한다. 선장 티치는 부하들의 경쟁과 다툼을 오히려 즐긴다.",
      "relations": [
        "하얀산양 해적단: 산하",
        "검은까마귀 해적단: 산하"
      ]
    },
    {
      "id": "white-goat",
      "name": "하얀산양 해적단",
      "category": "other",
      "symbol": "⚓",
      "eyebrow": "WHITE GOAT CREW",
      "location": "검은함대 산하 · 대장선 푸른산호초",
      "summary": "이폰과 남동생 자엘이 속한 흰 복장의 해적단.",
      "description": "이폰이 단장을 맡으며 검은까마귀 해적단과 수시로 충돌한다.",
      "relations": [
        "검은까마귀 해적단: 경쟁"
      ]
    },
    {
      "id": "black-raven",
      "name": "검은까마귀 해적단",
      "category": "other",
      "symbol": "♣",
      "eyebrow": "BLACK RAVEN CREW",
      "location": "검은함대 산하 · 대장선 인어의눈물",
      "summary": "크람푸스가 이끌며 조슈아가 1등 항해사를 맡은 검은 복장의 해적단.",
      "description": "하얀산양 해적단과 세력 다툼을 벌인다. 크람푸스는 티치에게 인정받아 단장을 맡았다.",
      "relations": [
        "하얀산양 해적단: 경쟁"
      ]
    },
    {
      "id": "worldtree",
      "name": "세계수 여관과 상단",
      "category": "other",
      "symbol": "❋",
      "eyebrow": "CROSSROADS",
      "location": "대륙 중앙 · 세계수",
      "summary": "여관주인 피아가 대륙의 소식과 여행자들을 맞이하는 정보의 교차점.",
      "description": "세계수 여관에서는 대륙 각지의 정세와 인물 정보가 오간다. 상단주 피르는 곳곳에서 교역을 이어 간다.",
      "relations": [
        "세계수: 대륙 중앙의 출발 지점"
      ],
      "secret": "여관주인 피아와 상단주 피르는 모두 세계수의 정체를 지닌 존재다."
    },
    {
      "id": "spirits",
      "name": "다섯 정령왕",
      "category": "other",
      "symbol": "✧",
      "eyebrow": "ELEMENTAL SOVEREIGNS",
      "location": "대륙의 자연 영역",
      "summary": "불·물·땅·바람·밤과 어둠을 관장하는 존재들.",
      "description": "이그니스, 운다인, 테라노스, 제피로스, 모루스가 등장한다. 각자 다스리는 자연과 성격, 거처가 다르다.",
      "relations": [
        "정령왕들의 영역: 대륙 각지"
      ]
    }
  ],
  "regions": [
    {
      "id": "center",
      "name": "세계수와 중앙 권역",
      "subtitle": "THE WORLD TREE",
      "location": "대륙 중앙",
      "description": "세계수 여관은 여행자들의 정보가 모이는 출발점. 대도서관은 세계수 동쪽 약 10km, 블러드러스트의 활동 중심 산맥은 남동쪽 약 150km 지점에 있다.",
      "places": [
        "세계수 여관",
        "만물의 대도서관",
        "중앙 산맥"
      ]
    },
    {
      "id": "west",
      "name": "하이비커스 왕도 권역",
      "subtitle": "HOLY KINGDOM",
      "location": "세계수 서쪽 약 250km",
      "description": "루미나가르드는 하이비커스의 수도. 아칸타는 왕도에서 25km, 브리타흐 대성당은 2km 거리에 있다. 황제 제레온이 잠든 침전이 왕도에 위치한다.",
      "places": [
        "루미나가르드",
        "아칸타",
        "브리타흐 대성당"
      ]
    },
    {
      "id": "battleline",
      "name": "아발론 강 전선",
      "subtitle": "THE DIVIDED FRONT",
      "location": "하이비커스–로젠탈 국경",
      "description": "하이비커스의 그룬윌터 성채와 로젠탈의 에피네즈 성채가 아발론 강을 사이에 두고 맞선다. 율리안과 니아나가 전선의 중심에 있다.",
      "places": [
        "그룬윌터",
        "아발론 강",
        "에피네즈 성채",
        "에글렌",
        "플뢰르"
      ]
    },
    {
      "id": "northeast",
      "name": "로젠탈 수도 권역",
      "subtitle": "DUCHY OF ROSES",
      "location": "세계수 북동쪽 약 220km",
      "description": "로젠하임은 장미넝쿨이 감싼 백색 성벽의 수도. 피의 화원은 3km, 생-로잘린은 30km 떨어져 있다.",
      "places": [
        "로젠하임",
        "피의 화원",
        "생-로잘린"
      ]
    },
    {
      "id": "south-hibicus",
      "name": "남부 황무지 개척지",
      "subtitle": "SOUTHERN FRONTIER",
      "location": "루미나가르드 남쪽 약 300km",
      "description": "3왕자 노아가 개척 캠프를 지키며 샤이엔 부족연맹과 민테아 공화국의 움직임도 살핀다. 트미시얀은 로젠하임에서 남쪽 약 400km의 황무지에 은거한다.",
      "places": [
        "황무지 개척캠프",
        "남부 황무지"
      ]
    },
    {
      "id": "cheyenne",
      "name": "샤이엔 대산림",
      "subtitle": "SOUTHERN FOREST",
      "location": "세계수 남쪽 약 350km",
      "description": "숲의 심장을 중심으로 붉은 여우 둔치, 달빛 바위, 동쪽 약 40km의 속삭이는 늪지대가 이어진다. 늪지대는 민테아와의 대치 전선이다.",
      "places": [
        "숲의 심장",
        "붉은 여우 둔치",
        "달빛 바위",
        "속삭이는 늪지대"
      ]
    },
    {
      "id": "minthea",
      "name": "민테아 개척 전선",
      "subtitle": "GARDEN REPUBLIC",
      "location": "세계수 남쪽 약 320km",
      "description": "수도 에데니아에는 솔라리움 비타에 대온실이 있다. 테라 베르디스는 농업·마력 생산지대, 아방리타스는 샤이엔과 맞서는 최전선 성채다.",
      "places": [
        "에데니아",
        "솔라리움 비타에",
        "테라 베르디스",
        "아방리타스"
      ]
    },
    {
      "id": "north",
      "name": "구 드롬베르그 왕국령",
      "subtitle": "RUINS OF THE NORTH",
      "location": "세계수 북쪽 약 400~450km",
      "description": "북부의 드롬베르그 폐교회와 더 깊은 왈라키아 산맥의 고성들이 존재한다. 서리칼날 용병단과 메디도 북부 전역을 떠돈다.",
      "places": [
        "드롬베르그 폐교회",
        "왈라키아 산맥",
        "노든베르그 대교회"
      ]
    },
    {
      "id": "east",
      "name": "동부 해안과 마탑",
      "subtitle": "THE EASTERN EDGE",
      "location": "세계수 동쪽",
      "description": "멜피온의 시골 성당은 세계수 동쪽 약 300km의 해안가에 있다. 마녀협회의 거점인 숨겨진 마탑은 대륙 동남부에 있으나 정확한 위치는 알려지지 않았다.",
      "places": [
        "동부 해안 성당",
        "숨겨진 마탑"
      ]
    }
  ],
  "chronicles": [
    {
      "year": "150년 전",
      "title": "로젠탈 공국의 독립",
      "summary": "하이비커스에서 로젠탈이 분리되어 독립한다. 두 국가는 현재까지 오랜 전쟁을 이어 간다."
    },
    {
      "year": "현재 / 서부 전선",
      "title": "왕국과 공국의 전쟁",
      "summary": "하이비커스 1왕자 율리안은 로젠탈 2공녀 니아나, 2왕자 다비드는 1공녀 엘레나와 대립한다."
    },
    {
      "year": "현재 / 왕도",
      "title": "잠든 황제",
      "summary": "제레온 황제는 악몽에 시달리며 깨어나지 못한다. 마리안이 그의 잠꼬대를 해석하고 있다."
    },
    {
      "year": "현재 / 남부",
      "title": "숲과 정원의 충돌",
      "summary": "자연과 조화를 추구하는 샤이엔 부족연맹과 자연을 경작으로 정화하려는 민테아 공화국이 국경에서 맞선다."
    },
    {
      "year": "현재 / 북부",
      "title": "드롬베르그 교회단의 변질",
      "summary": "신앙 개혁으로 시작한 교회단이 폭력과 약탈을 일삼게 되고, 대교회 화재 이후 북부 폐교회로 옮겨 활동한다."
    },
    {
      "year": "현재 / 용병",
      "title": "그리핀 용병단의 마지막 원정",
      "summary": "드래곤 레이드에 나선 용병단이 전멸하고, 메디만이 살아남아 북부를 떠돈다."
    },
    {
      "year": "현재 / 바다",
      "title": "검은함대의 내부 경쟁",
      "summary": "티치의 휘하에서 하얀산양과 검은까마귀 해적단이 서로 우위를 다툰다."
    },
    {
      "year": "현재 / 대륙",
      "title": "해방단의 몰락",
      "summary": "노예를 해방하던 집단은 시간이 지나 오히려 노예를 사냥하는 세력으로 변한다."
    }
  ],
  "mysteries": [
    {
      "title": "마녀협회의 진짜 계획",
      "category": "THE COVEN",
      "description": "마녀협회는 악신 릴리스를 강림시키기 위해 대륙의 강자들을 봉인하고 있다."
    },
    {
      "title": "장미교단과 장미의 신",
      "category": "FALSE FAITH",
      "description": "장미교단은 마녀협회가 만든 거짓 종교다. 숭배 대상 로잘린의 진정한 정체는 악신 릴리스이며, 로젠탈의 독립 또한 마녀협회의 개입과 연관되어 있다."
    },
    {
      "title": "세계수의 두 얼굴",
      "category": "THE WORLD TREE",
      "description": "여관주인 피아와 상단주 피르의 비밀 정체는 세계수. 피아는 여행자의 출발 경로를 열고, 피르는 대륙 각지의 상거래에 나타난다."
    },
    {
      "title": "기억에서 사라진 마녀장",
      "category": "LOST MEMORY",
      "description": "마녀장의 존재는 모두에게서 잊혔고 그녀도 기억을 잃었다. 최초 설립자이자 추방된 인물 역시 모든 기억을 잃고 봉인되어 있다. 둘이 같은 인물인지는 원문에서 확정하지 않는다."
    },
    {
      "title": "블러드러스트의 봉인",
      "category": "THE RED MOON",
      "description": "수장 로크엘러는 마녀들에게 봉인되었고, 단원들은 그의 외형에 대한 기억을 잃었다. 로크엘러에게는 타락의 조짐이 있으며 전투 때 붉은 달이 떠오른다."
    },
    {
      "title": "광휘를 잃은 교황",
      "category": "THE FULL MOON",
      "description": "교황 프리드는 마녀에게 봉인된 뒤 금발·금안에서 은발·흑안으로 바뀌었고 타락의 조짐이 나타난다. 전투할 때에는 광휘와 함께 보름달이 떠오른다."
    },
    {
      "title": "추방당한 로젠탈의 막내",
      "category": "THE LOST HEIR",
      "description": "트미시얀은 로젠탈 공작가의 숨겨진 막내 공자다. 다섯 살 때 추방당해 유모와 함께 남부 황무지로 향했고, 지금은 공국에 대한 복수심을 품고 은거하고 있다."
    },
    {
      "title": "대도서관장의 세월",
      "category": "EOS",
      "description": "소년의 모습인 대도서관장 에오스는 실제로 100세가 넘는다. 도서관은 봉인, 기억 조작, 신들의 비밀을 기록하고 지켜본다."
    },
    {
      "title": "푸른 달과 되살아난 왕자",
      "category": "KAOR",
      "description": "카오르는 멸망한 드롬베르그 왕국의 왕자였다. 죽음 이후 마녀의 힘으로 부활했으며 타락의 길을 걷고 있다. 푸른 달과 얼음 왕관, 얼음검이 그의 상징이다."
    },
    {
      "title": "정령왕 모루스의 변화",
      "category": "THE MIDNIGHT GAP",
      "description": "원래 밤의 휴식과 통찰을 다스리던 모루스는 마녀들과 어울린 뒤 성격이 변한 것으로 추정된다. 지금은 파괴와 죽음을 즐기는 공격적인 존재다."
    }
  ],
  "people": [
    {
      "id": "jereon",
      "name": "제레온",
      "faction": "hibicus",
      "role": "하이비커스 황제",
      "summary": "악몽의 저주로 잠든 황제. 그의 잠꼬대를 마리안이 해석한다.",
      "description": "금발과 푸른 눈의 백전노장. 마녀들의 침식으로 잠들어 있으며, 잠꼬대가 예언처럼 들린다.",
      "image": "../../assets/chatbots/hibicus/portraits/jereon.webp"
    },
    {
      "id": "julian",
      "name": "율리안",
      "faction": "hibicus",
      "role": "제1왕자 · 전선 지휘관",
      "summary": "그룬윌터에서 로젠탈의 니아나와 맞서는 장군.",
      "description": "강력한 전사이자 노련한 지휘관. 검과 방패를 쓰며 백성을 깊이 아낀다.",
      "image": "../../assets/chatbots/hibicus/portraits/julian.webp"
    },
    {
      "id": "david",
      "name": "다비드",
      "faction": "hibicus",
      "role": "제2왕자 · 검사",
      "summary": "로젠탈의 엘레나와 대립하는 왕자.",
      "description": "검술과 전술에 능하고 각종 계략으로 적에게 응수한다. 금발과 푸른 눈.",
      "image": "../../assets/chatbots/hibicus/portraits/david.webp"
    },
    {
      "id": "noah",
      "name": "노아",
      "faction": "hibicus",
      "role": "제3왕자 · 남부 개척 책임자",
      "summary": "왕국 남부의 척박한 황무지를 개척하는 막내 왕자.",
      "description": "순수하고 호기심이 많으며, 남부의 샤이엔과 민테아의 동태를 살핀다.",
      "image": "../../assets/chatbots/hibicus/portraits/noah.webp"
    },
    {
      "id": "lara",
      "name": "라라",
      "faction": "hibicus",
      "role": "공주 · 왕실 사교계",
      "summary": "왕실의 입지를 위해 수도에서 사교계를 이끈다.",
      "description": "하이비커스 왕실의 유일한 공주. 도도하게 보이려 노력하지만 형제들 사이에서는 어리광도 부린다.",
      "image": "../../assets/chatbots/hibicus/portraits/lara.webp"
    },
    {
      "id": "fried",
      "name": "프리드",
      "faction": "britach-church",
      "role": "교황",
      "summary": "현재 공식 활동을 볼 수 없는 브리타흐 교단의 교황.",
      "description": "소년의 외형을 지닌 브리타흐 교단의 교황. 교단의 성직자들이 왕국을 보좌한다.",
      "image": "../../assets/chatbots/hibicus/portraits/fried.webp",
      "secret": "봉인 뒤 금발·금안에서 은발·흑안으로 변했고, 타락의 조짐과 함께 전투 시 보름달이 떠오른다."
    },
    {
      "id": "marian",
      "name": "마리안",
      "faction": "britach-church",
      "role": "사제장",
      "summary": "황제를 보좌하며 잠꼬대의 의미를 해석한다.",
      "description": "금발·은안의 소심한 사제장. 스태프를 쓰며 장미교단에는 소극적인 태도를 보인다.",
      "image": "../../assets/chatbots/hibicus/portraits/marian.webp"
    },
    {
      "id": "aiva",
      "name": "아이바",
      "faction": "britach-church",
      "role": "힐러단장",
      "summary": "백색 힐러복을 입고 교단의 치유 활동을 이끈다.",
      "description": "금발·금안의 순수한 인물. 완드를 쓰며 장미교단과 마녀협회에는 공격적이다.",
      "image": "../../assets/chatbots/hibicus/portraits/aiva.webp"
    },
    {
      "id": "melpion",
      "name": "멜피온",
      "faction": "britach-church",
      "role": "동부 성당 소년 부제",
      "summary": "아무도 오지 않는 해안가 성당을 홀로 지킨다.",
      "description": "하늘색 머리와 푸른 눈의 소년. 성서를 들고 텃밭에서 작물을 길러 생활한다.",
      "image": "../../assets/chatbots/hibicus/portraits/melpion.webp"
    },
    {
      "id": "leo",
      "name": "레오",
      "faction": "britach-church",
      "role": "북부 파견 사제",
      "summary": "북부에서 활동하다 드롬베르그 교회단에 붙잡힌 사제.",
      "description": "연녹색 머리와 붉은 눈을 지닌 소년. 포교 중 이단 심문과 세뇌를 겪었고, 밝은 성격을 일부 유지한 채 교회단을 추종한다.",
      "image": "../../assets/chatbots/hibicus/portraits/leo.webp"
    },
    {
      "id": "elena",
      "name": "엘레나",
      "faction": "rosenthal",
      "role": "제1공녀 · 붉은 장미 기사단장",
      "summary": "다비드와 대립하는 불꽃 같은 전사.",
      "description": "은발·적안. 랜스를 쓰고 은갑과 붉은 망토를 착용하며 열정적으로 기사단을 이끈다.",
      "image": "../../assets/chatbots/hibicus/portraits/elena.webp"
    },
    {
      "id": "niana",
      "name": "니아나",
      "faction": "rosenthal",
      "role": "제2공녀 · 푸른 장미 기사단장",
      "summary": "율리안과 치열한 공방을 벌이는 냉철한 지휘관.",
      "description": "은발·적안. 랜스를 쓰며 은갑과 푸른 망토를 착용한다. 신중하지만 결단은 강하다.",
      "image": "../../assets/chatbots/hibicus/portraits/niana.webp"
    },
    {
      "id": "renia",
      "name": "레니아",
      "faction": "rosenthal",
      "role": "제3공녀",
      "summary": "전쟁보다 공국 내부에서 역할을 맡는 막내 공녀.",
      "description": "은발·적안. 장미 드레스를 즐겨 입고 검술을 수련한다. 언니들은 '레니'라 부른다.",
      "image": "../../assets/chatbots/hibicus/portraits/renia.webp"
    },
    {
      "id": "tmisiyan",
      "name": "트미시얀",
      "faction": "rosenthal",
      "role": "남부 황무지의 은둔자",
      "summary": "로젠탈에서 멀리 떨어진 남부 황무지에 머무는 소년.",
      "description": "은발·적안의 소년. 장미가 수놓인 붉은 망토가 특징이다.",
      "image": "../../assets/chatbots/hibicus/portraits/tmisiyan.webp",
      "secret": "로젠탈 공작가의 숨겨진 진짜 막내로, 다섯 살에 추방당했다. 유모가 죽은 뒤 공국에 복수하려 한다."
    },
    {
      "id": "archbishop-mary",
      "name": "피의 메리",
      "faction": "rose-church",
      "role": "대주교",
      "summary": "장미교단의 최고 지도자.",
      "description": "검은 갑옷, 붉은 망토와 월계관을 착용한다. 호탕하고 호전적인 성격이며 기요틴을 무기로 쓴다.",
      "image": "../../assets/chatbots/hibicus/portraits/archbishop-mary.webp"
    },
    {
      "id": "medici",
      "name": "메디치",
      "faction": "rose-church",
      "role": "전투사제장",
      "summary": "장미교단의 전투사제단을 지휘한다.",
      "description": "짧은 적발과 검은 사제복이 특징. 스태프를 사용하는 호전적인 인물.",
      "image": "../../assets/chatbots/hibicus/portraits/medici.webp"
    },
    {
      "id": "messalina",
      "name": "메살리나",
      "faction": "rose-church",
      "role": "그림자사제장",
      "summary": "메디치의 동생이자 그림자사제단의 지휘관.",
      "description": "짧은 적발에 검은 사제복을 입고 완드를 사용한다.",
      "image": "../../assets/chatbots/hibicus/portraits/messalina.webp"
    },
    {
      "id": "berith",
      "name": "베리트",
      "faction": "rose-church",
      "role": "제3교구 소년 사제",
      "summary": "여성 중심의 장미교단에서 소외받는 드문 남성 사제.",
      "description": "흑발·적안의 소년. 원래 밝은 성격이었으나 지속된 괴롭힘으로 의기소침해졌다.",
      "image": "../../assets/chatbots/hibicus/portraits/berith.webp"
    },
    {
      "id": "witch-commander",
      "name": "마녀장",
      "faction": "witches",
      "role": "마녀협회 인물",
      "summary": "마녀협회의 과거와 관련된 신비로운 인물.",
      "description": "은발·은안에 연보라 옷과 월계관을 착용한다.",
      "image": "../../assets/chatbots/hibicus/portraits/witch-commander.webp",
      "secret": "모두에게서 잊힌 마녀장은 기억을 잃었다. 연보라 옷과 월계관을 착용한 은발·은안의 여성. 최초 설립자와 동일인물이라는 확정 정보는 없다."
    },
    {
      "id": "tyra",
      "name": "타이라",
      "faction": "witches",
      "role": "봄의 최고마녀",
      "summary": "생명과 활력을 다루며 장난스럽게 사람을 홀린다.",
      "description": "벚꽃과 체리 장식을 두른 분홍빛 마녀. 레니아를 마녀로 만들고 싶어 한다.",
      "image": "../../assets/chatbots/hibicus/portraits/tyra.webp"
    },
    {
      "id": "amara",
      "name": "아마라",
      "faction": "witches",
      "role": "여름의 최고마녀",
      "summary": "뜨거운 열정과 파괴적인 마법을 지닌 마녀.",
      "description": "해바라기와 푸른색·노란색 의상이 특징. 예측하기 어려운 행동으로 혼란을 일으킨다.",
      "image": "../../assets/chatbots/hibicus/portraits/amara.webp"
    },
    {
      "id": "prhu",
      "name": "프르후",
      "faction": "witches",
      "role": "가을의 최고마녀",
      "summary": "수확·죽음·변화를 상징하는 지적인 마녀.",
      "description": "낙엽과 주황·갈색 의상이 특징. 은밀하게 사건에 개입한다.",
      "image": "../../assets/chatbots/hibicus/portraits/prhu.webp"
    },
    {
      "id": "cailleach",
      "name": "카일리아흐",
      "faction": "witches",
      "role": "겨울의 최고마녀",
      "summary": "강력한 얼음 마법을 다루는 고독한 마녀.",
      "description": "푸른색과 흰색 의상, 얼음 결정이 특징.",
      "image": "../../assets/chatbots/hibicus/portraits/cailleach.webp"
    },
    {
      "id": "angrboda",
      "name": "앙그르보다",
      "faction": "witches",
      "role": "수습마녀",
      "summary": "마탑에서 시약 제조를 배우는 쾌활한 수습마녀.",
      "description": "흑발·흑안의 소녀. 고양이를 좋아하며 최고마녀들에게 막냇동생처럼 사랑받는다.",
      "image": "../../assets/chatbots/hibicus/portraits/angrboda.webp"
    },
    {
      "id": "rogi",
      "name": "로기",
      "faction": "witches",
      "role": "마녀들의 조력자",
      "summary": "마녀들이 변신 마법으로 탄생시킨 개구리왕자.",
      "description": "타이라의 주도로 아마라와 프르후가 힘을 합쳐 남부의 오래된 개구리를 소년으로 변형했다.",
      "image": "../../assets/chatbots/hibicus/portraits/rogi.webp"
    },
    {
      "id": "rockeller",
      "name": "로크엘러",
      "faction": "bloodlust",
      "role": "암살자 길드 수장",
      "summary": "현재 모습을 드러내지 않는 블러드러스트의 수장.",
      "description": "갈색 머리의 소년 외형. 세이비의 스승이자 암살자 길드 블러드러스트의 수장.",
      "image": "../../assets/chatbots/hibicus/portraits/rockeller.webp",
      "secret": "로크엘러는 마녀협회에 봉인됐고 길드원들은 그의 얼굴에 대한 기억을 잃었다. 봉인 뒤 타락의 조짐이 보이며 전투 시 붉은 달이 떠오른다."
    },
    {
      "id": "seibi",
      "name": "세이비",
      "faction": "bloodlust",
      "role": "적월의 붉은 사신 · 수장 대행",
      "summary": "로크엘러의 직속 제자이며 임시 수장을 맡는다.",
      "description": "흑발·적안의 소년 암살자. 단검과 가면, 붉은 망토가 특징이며 여러 마녀를 사냥한 전적이 있다.",
      "image": "../../assets/chatbots/hibicus/portraits/seibi.webp"
    },
    {
      "id": "biro",
      "name": "비로",
      "faction": "bloodlust",
      "role": "검은숲의 현자",
      "summary": "까마귀와 독을 다루는 은밀한 정보 수집가.",
      "description": "진녹색 머리·금안. 의사나 연금술사로 위장하며 흰 역병의사 마스크를 쓴다.",
      "image": "../../assets/chatbots/hibicus/portraits/biro.webp"
    },
    {
      "id": "kyle",
      "name": "카일",
      "faction": "bloodlust",
      "role": "사해의 유령선주",
      "summary": "금화를 좇는 유령선의 주인이자 암살자.",
      "description": "회색 머리와 눈. 해골 가면과 금화 장식을 착용하고 피스톨을 사용한다.",
      "image": "../../assets/chatbots/hibicus/portraits/kyle.webp"
    },
    {
      "id": "pia",
      "name": "피아",
      "faction": "worldtree",
      "role": "세계수 여관주인",
      "summary": "대륙 중앙의 여관에서 여행자에게 정보와 출발 경로를 소개한다.",
      "description": "갈색 머리와 눈을 지닌 쾌활한 소년 외형. 여행자의 목적지를 묻고 여정을 돕는다.",
      "image": "../../assets/chatbots/hibicus/portraits/pia.webp",
      "secret": "비밀 정체는 세계수다. 플레이어가 경로를 고르면 등을 밀어 그곳으로 순간이동시킨다."
    },
    {
      "id": "pir",
      "name": "피르",
      "faction": "worldtree",
      "role": "세계수 상단주",
      "summary": "대륙 곳곳에서 물건을 사고파는 상단주.",
      "description": "금발·청안의 순수하고 쾌활한 소년 외형. 여행 중 교역이 필요할 때 만날 수 있다.",
      "image": "../../assets/chatbots/hibicus/portraits/pir.webp",
      "secret": "비밀 정체는 세계수다. 플레이어가 여행을 시작하면 몰래 뒤따르지만 먼저 말을 걸지 않는다."
    },
    {
      "id": "britach",
      "name": "브리타흐",
      "faction": "britach-church",
      "role": "광휘의 신",
      "summary": "하이비커스가 섬기는 광휘의 신.",
      "description": "은발과 금안·은안의 오드아이를 지닌 성인 남성의 외형. 악신 릴리스의 앙숙.",
      "image": "../../assets/chatbots/hibicus/portraits/britach.webp"
    },
    {
      "id": "rosaline",
      "name": "로잘린",
      "faction": "rose-church",
      "role": "장미의 신",
      "summary": "로젠탈 공국이 숭배하는 장미의 신.",
      "description": "장미교단의 신앙 대상.",
      "image": "../../assets/chatbots/hibicus/portraits/rosaline.webp",
      "secret": "그 실체는 브리타흐와 대립하는 악신 릴리스다."
    },
    {
      "id": "felix",
      "name": "펠릭스",
      "faction": "aegis",
      "role": "아이기스 방패용병단장",
      "summary": "길을 자주 헤매는 진중한 용병단장.",
      "description": "갈색 머리·녹안. 대검과 방패를 쓴다.",
      "image": "../../assets/chatbots/hibicus/portraits/felix.webp"
    },
    {
      "id": "ravi",
      "name": "라비",
      "faction": "aegis",
      "role": "아이기스 용병",
      "summary": "엘리트 기질이 있지만 무모한 면이 있는 전사.",
      "description": "연갈색 머리·청안. 브로드소드와 방패를 사용한다.",
      "image": "../../assets/chatbots/hibicus/portraits/ravi.webp"
    },
    {
      "id": "claudia",
      "name": "클라우디아",
      "faction": "frostblade",
      "role": "서리칼날 용병단장",
      "summary": "몰락한 바르노바폴 가문 부흥에 힘쓰는 남매의 누나.",
      "description": "은발·청안의 진중하고 저돌적인 양손검 전사.",
      "image": "../../assets/chatbots/hibicus/portraits/claudia.webp"
    },
    {
      "id": "kleban",
      "name": "클레반",
      "faction": "frostblade",
      "role": "서리칼날 용병",
      "summary": "누나를 잘 따르는 순수하고 용맹한 소년.",
      "description": "은발·청안의 한손검 전사. 바르노바폴 가문을 되살리고자 한다.",
      "image": "../../assets/chatbots/hibicus/portraits/kleban.webp"
    },
    {
      "id": "jeru",
      "name": "성 제루",
      "faction": "dromberg",
      "role": "정화의 칼날 · 성전사",
      "summary": "변질된 드롬베르그 교회단의 실질적인 무력.",
      "description": "장밋빛 머리카락의 소년. 빛의 파편이 박힌 한손검을 휘두르며 광적인 신념을 보인다.",
      "image": "../../assets/chatbots/hibicus/portraits/jeru.webp"
    },
    {
      "id": "seor",
      "name": "성 세오르",
      "faction": "dromberg",
      "role": "궁수장",
      "summary": "교회단 작전을 돕는 냉철한 궁수.",
      "description": "흑발·흑안의 소년. 제루의 행동을 묵묵히 보좌한다.",
      "image": "../../assets/chatbots/hibicus/portraits/seor.webp"
    },
    {
      "id": "reneid",
      "name": "성 르네이드",
      "faction": "dromberg",
      "role": "궁수",
      "summary": "세오르의 동생. 혼란을 품은 어린 궁수.",
      "description": "흑발·흑안의 소년. 재능이 뛰어나지만 잔혹한 교회단의 현실 앞에서 때때로 흔들린다.",
      "image": "../../assets/chatbots/hibicus/portraits/reneid.webp"
    },
    {
      "id": "bathory",
      "name": "바토리",
      "faction": "wallachia",
      "role": "진조 · 지도자",
      "summary": "왈라키아의 밤을 이끄는 강력한 진조.",
      "description": "흑발·적안. 우아하고 냉철하지만 필요할 때 잔혹하게 결단한다.",
      "image": "../../assets/chatbots/hibicus/portraits/bathory.webp"
    },
    {
      "id": "zigene",
      "name": "지게네",
      "faction": "wallachia",
      "role": "진조 · 군사 책임자",
      "summary": "바토리의 오른팔이자 뛰어난 검사.",
      "description": "흑발·적안. 과묵하고 냉정하며 전략적 사고를 지녔다.",
      "image": "../../assets/chatbots/hibicus/portraits/zigene.webp"
    },
    {
      "id": "tepes",
      "name": "체페슈",
      "faction": "wallachia",
      "role": "젊은 진조",
      "summary": "혈통의 자부심과 강한 전투 의욕을 지닌 뱀파이어.",
      "description": "흑발·적안. 어린 외형과 달리 잔혹하고 강한 힘을 지녔다.",
      "image": "../../assets/chatbots/hibicus/portraits/tepes.webp"
    },
    {
      "id": "levi",
      "name": "레비",
      "faction": "wallachia",
      "role": "진조 · 피의 마법사",
      "summary": "인간에게 관심이 많은 진조.",
      "description": "흑발·적안. 피의 마법, 환영과 유혹의 기술로 적을 무력화한다.",
      "image": "../../assets/chatbots/hibicus/portraits/levi.webp"
    },
    {
      "id": "nosferatus",
      "name": "노스페라투스",
      "faction": "wallachia",
      "role": "종자들의 장",
      "summary": "진조를 보좌하는 종자들을 교육한다.",
      "description": "백발·적안. 왈라키아의 종자들을 통솔한다.",
      "image": "../../assets/chatbots/hibicus/portraits/nosferatus.webp"
    },
    {
      "id": "eos",
      "name": "에오스",
      "faction": "library",
      "role": "만물의 대도서관장",
      "summary": "방대한 지식과 소식을 아는 소년 외형의 도서관장.",
      "description": "애쉬브라운 머리·청안의 친근한 모습. 도서관을 홀로 관리하며 외부의 정보와 유물을 수집한다.",
      "image": "../../assets/chatbots/hibicus/portraits/eos.webp",
      "secret": "실제 나이는 100세가 넘는다."
    },
    {
      "id": "honani",
      "name": "호나니",
      "faction": "cheyenne",
      "role": "우뚝 솟은 바위",
      "summary": "샤이엔의 굳건한 전사이자 사냥꾼.",
      "description": "연맹을 지키는 청년 전사.",
      "image": "../../assets/chatbots/hibicus/portraits/honani.webp"
    },
    {
      "id": "yaji",
      "name": "야지",
      "faction": "cheyenne",
      "role": "작은 아들",
      "summary": "호나니를 따르는 작고 민첩한 마체테 전사.",
      "description": "작은 체구지만 용감한 소년 전사.",
      "image": "../../assets/chatbots/hibicus/portraits/yaji.webp"
    },
    {
      "id": "askuheteu",
      "name": "아스쿠헤테우",
      "faction": "cheyenne",
      "role": "지켜보는 자",
      "summary": "숲의 소리를 읽는 추적자.",
      "description": "뛰어난 활 솜씨를 지닌 소년으로 샤이엔에서 미소년으로 이름났다.",
      "image": "../../assets/chatbots/hibicus/portraits/askuheteu.webp"
    },
    {
      "id": "napaishuni",
      "name": "나파이슈니",
      "faction": "cheyenne",
      "role": "달빛머리",
      "summary": "달의 기운을 다루는 신비한 활 명인.",
      "description": "부족에서 유일한 은발과 금안·은안 오드아이로 신성시되는 소년.",
      "image": "../../assets/chatbots/hibicus/portraits/napaishuni.webp"
    },
    {
      "id": "tipi",
      "name": "티피",
      "faction": "cheyenne",
      "role": "밤의 하늘",
      "summary": "밤에도 정확한 활을 쏘는 사냥꾼.",
      "description": "조용하고 신중한 소년.",
      "image": "../../assets/chatbots/hibicus/portraits/tipi.webp"
    },
    {
      "id": "howakan",
      "name": "호와칸",
      "faction": "cheyenne",
      "role": "신비로운 목소리",
      "summary": "성스러운 노래와 활로 부족을 이끄는 존재.",
      "description": "샤이엔의 영적인 역할을 맡는 소녀.",
      "image": "../../assets/chatbots/hibicus/portraits/howakan.webp"
    },
    {
      "id": "tycho",
      "name": "티코",
      "faction": "cheyenne",
      "role": "생명의 숨결",
      "summary": "대산림의 힘으로 사람들을 치료하는 치유사.",
      "description": "부족의 주술과 치유를 담당하는 소녀.",
      "image": "../../assets/chatbots/hibicus/portraits/tycho.webp"
    },
    {
      "id": "enapei",
      "name": "에나페이",
      "faction": "cheyenne",
      "role": "용감한 자",
      "summary": "검을 다루는 강인한 여전사.",
      "description": "샤이엔 부족 여성 전사의 상징.",
      "image": "../../assets/chatbots/hibicus/portraits/enapei.webp"
    },
    {
      "id": "mintirel",
      "name": "민티렐",
      "faction": "minthea",
      "role": "생명과 질서의 신",
      "summary": "민테아 공화국이 숭배하는 유일신.",
      "description": "민트색 머리와 투명한 벽안을 지닌 소년 외형. 식물의 생명력과 질서를 관장한다.",
      "image": "../../assets/chatbots/hibicus/portraits/mintirel.webp"
    },
    {
      "id": "obeih",
      "name": "오베이흐",
      "faction": "minthea",
      "role": "첫 번째 정원사 · 지도자",
      "summary": "민테아의 최고 지도자이자 대사제.",
      "description": "온화한 얼굴 뒤로 확장 정책을 관철하려는 강한 의지를 숨긴 소년.",
      "image": "../../assets/chatbots/hibicus/portraits/obeih.webp"
    },
    {
      "id": "emma",
      "name": "엠마",
      "faction": "minthea",
      "role": "태양잎 온실 책임자",
      "summary": "식물 마법과 연금술을 연구하는 천재 식물학자.",
      "description": "안경을 쓴 여성. 식물 골렘과 씨앗 폭탄 등 마법 생체 병기를 개발한다.",
      "image": "../../assets/chatbots/hibicus/portraits/emma.webp"
    },
    {
      "id": "jeanne",
      "name": "잔느",
      "faction": "minthea",
      "role": "가시덩굴 기사단장",
      "summary": "샤이엔 전선을 맡은 민테아 정규군 총사령관.",
      "description": "마법으로 강화된 목재 갑옷과 가시 채찍을 사용한다.",
      "image": "../../assets/chatbots/hibicus/portraits/jeanne.webp"
    },
    {
      "id": "aurelien",
      "name": "오렐리앙",
      "faction": "minthea",
      "role": "사제 · 치유사",
      "summary": "전선에서 편을 가리지 않고 치료하는 사제.",
      "description": "남부 황무지와 대산림 경계에서 활동하는 포니테일의 소년.",
      "image": "../../assets/chatbots/hibicus/portraits/aurelien.webp"
    },
    {
      "id": "ignis",
      "name": "이그니스",
      "faction": "spirits",
      "role": "불의 정령왕",
      "summary": "파괴가 아닌 생명과 온기를 관장하는 불의 주인.",
      "description": "재처럼 흰 머리와 붉은 눈. 북부 휴화산 '재의 요람'에서 지맥의 불을 다스리며 봉인 마법에 반감을 지닌다.",
      "image": "../../assets/chatbots/hibicus/portraits/ignis.webp"
    },
    {
      "id": "undine",
      "name": "운다인",
      "faction": "spirits",
      "role": "물의 정령왕",
      "summary": "거칠고 오만하지만 바다 생명을 아끼는 물의 주인.",
      "description": "하늘색 머리와 사파이어 같은 눈. 심연의 눈을 비롯해 모든 바다와 강을 오간다.",
      "image": "../../assets/chatbots/hibicus/portraits/undine.webp"
    },
    {
      "id": "terranos",
      "name": "테라노스",
      "faction": "spirits",
      "role": "땅의 정령왕",
      "summary": "전쟁으로 상처 입은 대지를 아끼는 온화한 중재자.",
      "description": "적갈색 머리와 붉은 눈. 선대 땅의 정령왕의 힘과 기억을 계승해 수정 동굴에서 땅을 치유한다.",
      "image": "../../assets/chatbots/hibicus/portraits/terranos.webp"
    },
    {
      "id": "zephyros",
      "name": "제피로스",
      "faction": "spirits",
      "role": "바람의 정령왕",
      "summary": "대륙 곳곳의 소식과 이야기를 모으는 호기심 많은 정령왕.",
      "description": "민티렐에게서 태어난 젊은 정령왕. 민트색 머리와 푸른 눈, 공중에 뜬 모습이 특징.",
      "image": "../../assets/chatbots/hibicus/portraits/zephyros.webp"
    },
    {
      "id": "morus",
      "name": "모루스",
      "faction": "spirits",
      "role": "밤과 어둠의 정령왕",
      "summary": "자정의 틈새를 거처로 삼는 밤의 주인.",
      "description": "검은 머리와 보라색 눈의 소년 외형. 현재는 공격적인 모습을 보인다.",
      "image": "../../assets/chatbots/hibicus/portraits/morus.webp",
      "secret": "원래는 휴식과 통찰을 관장했지만 마녀들과 어울린 뒤 죽음과 파괴를 즐기게 된 것으로 추정된다."
    },
    {
      "id": "medi",
      "name": "메디",
      "faction": "griffin",
      "role": "그리핀 용병단의 생존자",
      "summary": "드래곤 레이드에서 동료를 잃은 뒤 북부를 떠도는 소년.",
      "description": "흑발·흑안. 그리핀 깃털로 짠 검은 망토와 짙은 녹색 용병복을 입고 석궁을 사용한다.",
      "image": "../../assets/chatbots/hibicus/portraits/medi.webp"
    },
    {
      "id": "hiakin",
      "name": "히아킨",
      "faction": "liberators",
      "role": "노예 해방단 공동 창설자",
      "summary": "철퇴와 메이스를 쓰는 다혈질의 소년 전사.",
      "description": "금발·금안. 가니메데와 함께 노예 해방단을 만들었다.",
      "image": "../../assets/chatbots/hibicus/portraits/hiakin.webp"
    },
    {
      "id": "ganymede",
      "name": "가니메데",
      "faction": "liberators",
      "role": "노예 해방단 공동 창설자",
      "summary": "히아킨을 말리는 신중한 대검 전사.",
      "description": "금발·갈색 눈. 자신의 몸만 한 대검을 능숙하게 다룬다.",
      "image": "../../assets/chatbots/hibicus/portraits/ganymede.webp"
    },
    {
      "id": "teach",
      "name": "티치",
      "faction": "black-fleet",
      "role": "검은함대 단장",
      "summary": "싸움을 즐기는 쾌활한 해적 단장.",
      "description": "회색 머리·눈에 검은 선장모와 금빛 장식. 피스톨을 사용한다.",
      "image": "../../assets/chatbots/hibicus/portraits/teach.webp"
    },
    {
      "id": "iphon",
      "name": "이폰",
      "faction": "white-goat",
      "role": "하얀산양 해적단장",
      "summary": "푸른산호초의 선장으로 동생 자엘을 이끈다.",
      "description": "흑발·흑안. 피스톨을 쓰며 다른 이들을 깔보는 경향이 있다.",
      "image": "../../assets/chatbots/hibicus/portraits/iphon.webp"
    },
    {
      "id": "jael",
      "name": "자엘",
      "faction": "white-goat",
      "role": "해적 · 이폰의 동생",
      "summary": "형을 따라 이른 나이에 전투에 뛰어든 소년.",
      "description": "흑발·흑안. 피스톨을 사용하며 형을 닮아 남을 깔본다.",
      "image": "../../assets/chatbots/hibicus/portraits/jael.webp"
    },
    {
      "id": "krampus",
      "name": "크람푸스",
      "faction": "black-raven",
      "role": "검은까마귀 해적단장",
      "summary": "인어의눈물을 이끄는 해적단장.",
      "description": "흑발·흑안. 조슈아를 해적단으로 납치해 온 당사자로, 티치에게 인정받아 단장이 됐다.",
      "image": "../../assets/chatbots/hibicus/portraits/krampus.webp"
    },
    {
      "id": "joshua",
      "name": "조슈아",
      "faction": "black-raven",
      "role": "검은까마귀 1등 항해사",
      "summary": "커틀러스를 잘 다루는 인어의눈물의 항해사.",
      "description": "흑발·흑안에 긴 구렛나룻이 특징. 어린 시절 납치되어 해적단원이 됐다.",
      "image": "../../assets/chatbots/hibicus/portraits/joshua.webp"
    },
    {
      "id": "kaor",
      "name": "카오르",
      "faction": "dromberg",
      "role": "북부와 연관된 인물",
      "summary": "구 드롬베르그 왕국의 과거와 관련된 소년.",
      "description": "검은 머리와 눈, 푸른 달과 얼음의 이미지를 지닌 인물.",
      "image": "../../assets/chatbots/hibicus/portraits/kaor.webp",
      "secret": "몰락한 드롬베르그 왕국의 왕자였으며 죽은 뒤 마녀에 의해 부활했다. 얼음 왕관과 얼음검을 사용하며 타락의 길을 걷는다."
    }
  ],
  "disclaimer": "원작에 명시되지 않은 설정은 임의로 추가하지 않았습니다. 확정되지 않은 인물 관계와 역사 해석은 단정하지 않습니다."
};
