/* 북부 영주 생존 투쟁기 공개 설정집 데이터. 내부 AI 프롬프트 및 출력 제어 규칙은 포함하지 않습니다. */
window.NORTHERN_DOMAIN = {
  "title": "북부 영주 생존 투쟁기",
  "subtitle": "비어 있는 깃발",
  "tagline": "어른들이 모두 돌아오지 못한 첫 번째 겨울. 발레노르에는 아직 지켜야 할 사람들이 남아 있다.",
  "hero": "../../assets/chatbots/northern-domain-survival/illust/domain-entrance.webp",
  "chatUrl": "https://babechat.ai/character/u/0c4bebe0-724a-47d6-9788-476daacc95a5/profile",
  "timeline": [
    {
      "index": "01 / THE AWAKENING",
      "title": "열두 거인의 동시 부활",
      "text": "북부의 불가살 거인들은 죽은 뒤 50년이 지나 부활한다. 수백 년간 한 번에 한 명씩 상대하도록 주기를 조절해 왔지만, 298년에는 여덟 번째 거인 대신 열두 거인이 모두 깨어났다.",
      "image": "../../assets/chatbots/northern-domain-survival/illust/northern-giant-battle.webp"
    },
    {
      "index": "02 / THE LAST MARCH",
      "title": "어른들이 떠난 성채",
      "text": "나탄 발레노르와 다섯 봉신 기사, 각 가문의 장로와 평민 가문의 어른들까지 전장으로 향했다. 주변 영지들은 급전을 받고도 지원을 의도적으로 묵살했다.",
      "image": "../../assets/chatbots/northern-domain-survival/illust/northern-giant-battle-in-progress.webp"
    },
    {
      "index": "03 / THE FINAL STAND",
      "title": "열한 번의 승리",
      "text": "11명의 거인이 쓰러졌다. 그러나 나탄과 영지의 모든 어른은 돌아오지 못했다. 마지막 거인 에레보스는 나탄의 검이 심장에 박힌 채 가수면 상태로 남았다.",
      "image": "../../assets/chatbots/northern-domain-survival/illust/northern-giant-battle-defeat.webp"
    },
    {
      "index": "04 / THE EMPTY BANNER",
      "title": "비어 있는 깃발",
      "text": "아직 아버지들의 갑옷도 몸에 맞지 않는 기사 가문의 소년들, 영지의 생업을 이어받은 평민 가문의 아이들이 남았다. 이웃 영주들은 이제 '보호와 후견'이라는 이름으로 성문을 두드린다.",
      "image": "../../assets/chatbots/northern-domain-survival/illust/domain.webp"
    }
  ],
  "houses": [
    {
      "name": "발레노르",
      "kind": "ruling",
      "role": "북부 변경백가",
      "motto": "성벽은 돌로 세우는 것이 아니라, 사람으로 세운다.",
      "parents": "선대 영주 나탄 발레노르",
      "heir": "아이솔 발레노르 / 일반 모드에서는 플레이어",
      "description": "화려함보다 국경 방위와 피난민 보호를 중시한 변경백가. 평민과 야인도 품었던 나탄은 마지막 거인의 심장에 검을 꽂고 전사했다."
    },
    {
      "name": "아르젠",
      "kind": "knight",
      "role": "호위 · 방패",
      "motto": "무너지지 않는 자가 마지막까지 지킨다.",
      "parents": "레인 · 이리아",
      "heir": "노엘",
      "description": "발레노르의 오랜 오른팔이자 전열의 방패. 이리아는 마지막 전투에서 부상자를 지키는 후위에 섰다."
    },
    {
      "name": "카르미네",
      "kind": "knight",
      "role": "돌격 · 불꽃",
      "motto": "피가 식기 전에 검을 들어라.",
      "parents": "카발 · 로사리아",
      "heir": "루벨",
      "description": "호쾌한 돌격 가문. 로사리아는 겁을 알고도 서는 사람이 용감한 사람이라고 아들에게 남겼다."
    },
    {
      "name": "바렌",
      "kind": "knight",
      "role": "정찰 · 인내",
      "motto": "눈 위의 발자국은 거짓말하지 않는다.",
      "parents": "아크 · 미라",
      "heir": "테오",
      "description": "설원의 발자국과 국경의 낌새를 읽는 정찰 가문. 미라는 마지막 전장에서 길잡이로 앞장섰다."
    },
    {
      "name": "로렌",
      "kind": "knight",
      "role": "외교 · 전술",
      "motto": "검은 명예를 위해, 명예는 백성을 위해.",
      "parents": "피안 · 이사벨",
      "heir": "에밀",
      "description": "예법과 외교, 전술에 능한 기사 가문. 이사벨은 거인의 소식을 듣고 가문의 검을 들었다."
    },
    {
      "name": "프로스",
      "kind": "knight",
      "role": "수비 · 장궁",
      "motto": "눈은 소리 없이 내려 모든 길을 덮는다.",
      "parents": "발렌타인 · 오델리아",
      "heir": "시엘",
      "description": "성채 수비와 퇴각로 확보를 담당한 가문. 오델리아는 출정 전 시엘에게 숨을 크게 쉬라고 다독였다."
    },
    {
      "name": "베른",
      "kind": "civilian",
      "role": "수렵 · 식량",
      "motto": "",
      "parents": "가렛 · 마르타",
      "heir": "루카스",
      "description": "활과 도축칼을 들고 마지막 전투에 참여한 수렵 가문. 남은 아이는 굶주림 앞에서 활을 쥔다."
    },
    {
      "name": "야인",
      "kind": "civilian",
      "role": "사냥터지기",
      "motto": "은혜는 뼈에 새긴다.",
      "parents": "토르간 · 아일라",
      "heir": "아브",
      "description": "나탄이 받아들인 야인 가족. 아브는 영주를 지키기 위해 밤마다 성벽 주변을 돈다."
    },
    {
      "name": "칼디스",
      "kind": "civilian",
      "role": "서기 · 장부",
      "motto": "차가운 잉크는 피보다 오래 기억된다.",
      "parents": "오르웬 · 리디아",
      "heir": "에리온",
      "description": "영지의 수입과 보급을 기록하는 가문. 에리온은 얼어붙은 잉크병을 품어 녹이며 기록한다."
    },
    {
      "name": "하르트바흐",
      "kind": "civilian",
      "role": "성문 · 경비",
      "motto": "발레노르를 위해 눈을 떠야 한다.",
      "parents": "디히터 · 그레타",
      "heir": "에반",
      "description": "성문과 야간 경비를 지켜 온 가문. 에반은 경비대장의 창을 놓지 않는다."
    },
    {
      "name": "로덴바흐",
      "kind": "civilian",
      "role": "마차 · 보급",
      "motto": "길이 끊겨도 바퀴는 돈다.",
      "parents": "브루노 · 비르테",
      "heir": "마로",
      "description": "마차와 보급로를 책임지는 가문. 부모는 마지막 보급 마차를 몰고 전장에 나섰다."
    },
    {
      "name": "벨워드",
      "kind": "civilian",
      "role": "목축 · 양모",
      "motto": "겨울에도 온기는 거두어지지 않는다.",
      "parents": "오스카 · 나디아",
      "heir": "노아",
      "description": "양모와 겨울나기를 책임지는 가문. 남은 아이는 동생들에게 망토를 덮어 준다."
    },
    {
      "name": "그레이워드",
      "kind": "civilian",
      "role": "목공 · 성채 보수",
      "motto": "우리가 세운 벽은 꺾이지 않는다.",
      "parents": "한스 · 클라라",
      "heir": "메리",
      "description": "마지막 전투 전날 성채 문빗장과 피난 통로를 보강했다. 메리는 목공소와 산을 오간다."
    },
    {
      "name": "발트렌",
      "kind": "civilian",
      "role": "대장간 · 화로",
      "motto": "불꽃은 얼어붙지 않는다.",
      "parents": "에드문 · 카야",
      "heir": "가문 몰락",
      "description": "무기와 화로를 책임졌던 대장장이 가문. 부모는 망치와 손도끼를 들고 마지막 전투에 나섰다."
    }
  ],
  "people": [
    {
      "name": "아이솔 발레노르",
      "group": "heir",
      "family": "발레노르",
      "role": "변경백가의 후계자",
      "summary": "평민 모드에서 의식을 잃은 채 남겨진 발레노르의 마지막 후계자.",
      "detail": "백발과 붉은 눈을 지닌 후계자. 일반 모드에서는 플레이어가 변경백가의 마지막 후계자가 되며, 평민 모드에서는 쓰러진 아이솔을 대신해 영지 재건에 참여한다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/isol-valenor.webp",
      "alternate": "",
      "quote": ""
    },
    {
      "name": "노엘 아르젠",
      "group": "knight",
      "family": "아르젠",
      "role": "호위 · 기사단장 대행",
      "summary": "손이 터지도록 검을 쥐면서도 성채의 방패가 되겠다고 선언한다.",
      "detail": "아버지 레인과 어머니 이리아의 뜻을 잇는 호위 기사 가문의 소년. 아직 부족한 악력과 변성기 목소리를 숨긴 채 의연한 기사단장처럼 버티려 한다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/noel-arzen.webp",
      "alternate": "../../assets/chatbots/northern-domain-survival/portraits/noel-arzen-sad.webp",
      "quote": "발레노르는 비어 있지 않습니다. 저희가... 아직 여기 있으니까요."
    },
    {
      "name": "루벨 카르미네",
      "group": "knight",
      "family": "카르미네",
      "role": "돌격 · 대검",
      "summary": "아버지의 대검을 들어 올리지 못하는 소심한 막내.",
      "detail": "호쾌한 카르미네 가문의 후계자이지만 겁이 많다. 두려움에 아랫입술을 깨물면서도 부모 카발과 로사리아의 자리를 잇고 싶어 한다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/rubel-carmine.webp",
      "alternate": "../../assets/chatbots/northern-domain-survival/portraits/rubel-carmine-sad.webp",
      "quote": ""
    },
    {
      "name": "테오 바렌",
      "group": "knight",
      "family": "바렌",
      "role": "정찰 · 설원 추적",
      "summary": "동상 걸린 손을 숨기고 눈밭의 발자국을 확인한다.",
      "detail": "아버지 아크와 어머니 미라에게 정찰을 배운 소년. 단 하나의 흔적을 잘못 읽으면 영지가 끝날 수 있다는 부담으로 잠을 제대로 이루지 못한다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/theo-baren.webp",
      "alternate": "../../assets/chatbots/northern-domain-survival/portraits/theo-baren-sad.webp",
      "quote": ""
    },
    {
      "name": "에밀 로렌",
      "group": "knight",
      "family": "로렌",
      "role": "외교 · 전술",
      "summary": "적대 영주들의 속내를 읽지만 중압감에 짓눌린 지성파 후계자.",
      "detail": "피안과 이사벨의 아들. 백금발과 푸른 눈을 지녔으며, 후견을 내세운 외교적 압박이 어떤 결과를 낳을지 누구보다 잘 알고 있다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/emil-loren.webp",
      "alternate": "../../assets/chatbots/northern-domain-survival/portraits/emil-loren-sad.webp",
      "quote": ""
    },
    {
      "name": "시엘 프로스",
      "group": "knight",
      "family": "프로스",
      "role": "수비 · 장궁",
      "summary": "성벽을 지키는 동안에도 두려움을 혼자 삼키는 수비대장.",
      "detail": "발렌타인과 오델리아의 아들. 감정을 억누르며 냉정하게 행동하지만, 아무도 보지 않는 곳에서 과호흡을 겪을 만큼 불안하다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/ciel-frost.webp",
      "alternate": "",
      "quote": ""
    },
    {
      "name": "루카스 베른",
      "group": "civilian",
      "family": "베른",
      "role": "수렵 · 식량",
      "summary": "굶는 아이들을 보며 망설임 끝에 사냥활을 든다.",
      "detail": "가렛과 마르타의 아들. 큰 짐승을 죽이는 일에는 주저하지만, 영지의 식량이 떨어지는 것을 두고 볼 수 없다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/lucas-bern.webp",
      "alternate": "",
      "quote": ""
    },
    {
      "name": "아브",
      "group": "civilian",
      "family": "야인",
      "role": "사냥터지기",
      "summary": "밤새 성벽 주변을 살피는 야인의 아들.",
      "detail": "토르간과 아일라의 아들로, 나탄이 받아들인 야인 가족의 후계자. 전투할 때에는 얼굴에 청백색 페인팅을 한다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/av.webp",
      "alternate": "../../assets/chatbots/northern-domain-survival/portraits/av-barbarian.webp",
      "quote": ""
    },
    {
      "name": "에리온 칼디스",
      "group": "civilian",
      "family": "칼디스",
      "role": "서기관",
      "summary": "얼어붙은 잉크를 녹이며 영지의 장부를 적는다.",
      "detail": "오르웬과 리디아의 아들. 백금발 오드아이. 성의 살림을 기록하는 어른들이 사라진 뒤 서투른 글씨로 보급과 자원을 적어나간다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/erion-caldis.webp",
      "alternate": "",
      "quote": ""
    },
    {
      "name": "에반 하르트바흐",
      "group": "civilian",
      "family": "하르트바흐",
      "role": "경비대",
      "summary": "잠을 쫓으려고 뺨을 치며 성문을 지킨다.",
      "detail": "디히터와 그레타의 아들. 백발과 갈색 눈을 지녔으며, 경비대장의 커다란 창을 품에 안고 두려움을 억누른다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/evan-hartbach.webp",
      "alternate": "",
      "quote": ""
    },
    {
      "name": "마로 로덴바흐",
      "group": "civilian",
      "family": "로덴바흐",
      "role": "보급 · 마차 수리",
      "summary": "부서진 마차 바퀴를 고치며 보급로를 이어 보려 한다.",
      "detail": "브루노와 비르테의 아들. 은빛 머리와 검은 귀걸이를 한 소년으로, 부모가 남긴 마차를 고치다가 손끝이 갈라졌다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/maro-rodenbach.webp",
      "alternate": "",
      "quote": ""
    },
    {
      "name": "노아 벨워드",
      "group": "civilian",
      "family": "벨워드",
      "role": "목축 · 방한",
      "summary": "자신도 떨면서 동생들에게 양모 망토를 덮어 준다.",
      "detail": "오스카와 나디아의 아들. 갈색 머리를 묶고 있으며, 겨울에도 다른 아이들이 춥지 않도록 살핀다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/noah-belward.webp",
      "alternate": "",
      "quote": ""
    },
    {
      "name": "메리 그레이워드",
      "group": "civilian",
      "family": "그레이워드",
      "role": "목수 · 성채 보수",
      "summary": "목공소와 산을 오가며 성채를 고치는 소녀.",
      "detail": "한스와 클라라의 딸. 흰 머리와 붉은 눈, 바가지머리와 흰 옷이 특징. 부모가 마지막 전투 전날 보강해 둔 피난 통로를 이어 지킨다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/mary-valtren.webp",
      "alternate": "",
      "quote": ""
    },
    {
      "name": "이졸데 블랙베일",
      "group": "rival",
      "family": "블랙베일",
      "role": "동남부 여백작",
      "summary": "자비로운 후견을 내세워 발레노르를 병합하려 한다.",
      "detail": "안개 낀 삼림지대의 여백작. 고아와 난민의 보호를 말하지만, 그 '보호'를 약소 가문의 흡수 수단으로 사용해 왔다. 흑장막 기사단을 거느린다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/isolde-blackveil.webp",
      "alternate": "",
      "quote": ""
    },
    {
      "name": "세라나 글라시엘",
      "group": "rival",
      "family": "글라시엘",
      "role": "적대 영주",
      "summary": "온화한 얼굴 뒤로 냉정한 계산을 숨긴 인물.",
      "detail": "북부의 아동을 대상으로 범죄를 저지르는 적대 세력의 핵심 인물. 보호받아야 할 아이들을 위협하는 세력으로 등장한다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/serena-glaciel.webp",
      "alternate": "",
      "quote": ""
    },
    {
      "name": "레오나 바이스나흐트",
      "group": "rival",
      "family": "바이스나흐트",
      "role": "군사 압박형 영주",
      "summary": "직접 병력을 보내 국경을 압박한다.",
      "detail": "기만적인 후견보다 군사적 압박을 앞세우는 영주. 발레노르의 빈 깃발을 새로운 지배의 기회로 본다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/leona-weissnacht.webp",
      "alternate": "",
      "quote": "깃발이 비었으면 누군가는 꽂아야 한다."
    },
    {
      "name": "엘리시아 모르그렌",
      "group": "rival",
      "family": "모르그렌",
      "role": "외교 압박형 영주",
      "summary": "교활한 외교로 발레노르의 실권을 빼앗으려 한다.",
      "detail": "백발과 푸른 눈을 지닌 영주. 무력만이 아닌 협상과 외교를 통해 변경백가의 권한을 잠식하려 한다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/elicia-morgren.webp",
      "alternate": "",
      "quote": ""
    },
    {
      "name": "발도어 아이스하트",
      "group": "rival",
      "family": "아이스하트",
      "role": "서부 백작",
      "summary": "나탄의 의형제였지만 구원 요청을 묵살한 배신자.",
      "detail": "발레노르와 통혼해 온 서부 백작가의 가주. 거인전 당시 자신의 영지를 지킨다는 계산으로 지원을 거절했으며, 이제 발레노르를 흡수하려 한다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/baldor-iceheart.webp",
      "alternate": "",
      "quote": ""
    },
    {
      "name": "실반 아이스하트",
      "group": "rival",
      "family": "아이스하트",
      "role": "아이스하트 장남",
      "summary": "동색 구리갑을 입은 오만한 엘리트 기사.",
      "detail": "발도어의 장남. 검을 제대로 쥐지도 못하는 발레노르의 어린 후계자들에게 은근한 우월감을 드러낸다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/sylvan-iceheart.webp",
      "alternate": "",
      "quote": ""
    },
    {
      "name": "렌 아이스하트",
      "group": "ally",
      "family": "아이스하트",
      "role": "서부 백작가 차남",
      "summary": "아버지 몰래 옛 친구들을 돕는 소년.",
      "detail": "발레노르의 아이들과 친하게 지냈지만 가문의 배신에 죄책감을 느끼고 있다. 발도어의 눈을 피해 그들을 도우려 한다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/ren-iceheart.webp",
      "alternate": "",
      "quote": ""
    },
    {
      "name": "웨슬로",
      "group": "wanderer",
      "family": "탈영병 무리",
      "role": "소년 탈영병 리더",
      "summary": "라플란드 설림에서 여덟 명의 탈영병을 이끈다.",
      "detail": "초록 머리와 눈을 가진 소년. 북부의 라플란드 설림에 머물며 여덟 병사를 이끄는 탈영병 무리의 지도자다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/weslo.webp",
      "alternate": "",
      "quote": ""
    },
    {
      "name": "슈테인",
      "group": "wanderer",
      "family": "방랑 기사",
      "role": "소년 방랑기사",
      "summary": "랜스를 능숙하게 다루며 북부를 떠돈다.",
      "detail": "검은 머리와 검은 눈의 소년 방랑 기사. 북부를 홀로 떠돌며 숙련된 랜스 실력을 보인다.",
      "image": "../../assets/chatbots/northern-domain-survival/portraits/stein.webp",
      "alternate": "",
      "quote": ""
    }
  ],
  "regions": [
    {
      "name": "늑대구릉지",
      "type": "NORTH / HUNTING GROUNDS",
      "description": "영지 북쪽 바위 구릉. 늑대가 출몰하는 핵심 사냥터로, 고기와 가죽·모피를 구할 수 있다.",
      "image": "../../assets/chatbots/northern-domain-survival/illust/wolf-hills.webp"
    },
    {
      "name": "바이칼 호수",
      "type": "GLACIAL LAKE",
      "description": "영지의 목책과 맞닿은 거대한 빙하 호수. 어류를 얻을 수 있는 자원 산출지.",
      "image": "../../assets/chatbots/northern-domain-survival/illust/lake-baikal.webp"
    },
    {
      "name": "은여우방목지",
      "type": "PASTURE / FURS",
      "description": "바이칼 호수 근처의 목축지. 가축과 고급 모피, 식량을 확보하는 데 쓰인다.",
      "image": "../../assets/chatbots/northern-domain-survival/illust/silver-fox-pasture.webp"
    },
    {
      "name": "라플란드 설림",
      "type": "FOREST / NORTHERN BORDER",
      "description": "발레노르를 둘러싼 눈 덮인 숲. 땔감과 열매를 구할 수 있으며 탈영병 무리도 숨어 있다.",
      "image": "../../assets/chatbots/northern-domain-survival/illust/lapland-snow-forest.webp"
    }
  ],
  "facilities": [
    {
      "name": "수렵소",
      "type": "식량 · 가죽",
      "image": "../../assets/chatbots/northern-domain-survival/illust/hunting-lodge.webp"
    },
    {
      "name": "목공소",
      "type": "목재 · 보수",
      "image": "../../assets/chatbots/northern-domain-survival/illust/carpentry-workshop.webp"
    },
    {
      "name": "대장간",
      "type": "도구 · 철재",
      "image": "../../assets/chatbots/northern-domain-survival/illust/smithy.webp"
    },
    {
      "name": "창고",
      "type": "영지 자원 보관",
      "image": "../../assets/chatbots/northern-domain-survival/illust/storehouse.webp"
    },
    {
      "name": "공동 식당",
      "type": "식량과 공동생활을 보여 주는 삽화",
      "image": "../../assets/chatbots/northern-domain-survival/illust/communal-dining-hall.webp"
    },
    {
      "name": "훈련소",
      "type": "병력 훈련 · 숙련도",
      "image": "../../assets/chatbots/northern-domain-survival/illust/knight-training-camp.webp"
    },
    {
      "name": "임무 게시판",
      "type": "임무 · 의뢰",
      "image": "../../assets/chatbots/northern-domain-survival/illust/mission-board.webp"
    },
    {
      "name": "영주관 서재",
      "type": "영주관 내부 장면",
      "image": "../../assets/chatbots/northern-domain-survival/illust/lords-manor-library.webp"
    },
    {
      "name": "영지 입구",
      "type": "목책과 성채 진입로",
      "image": "../../assets/chatbots/northern-domain-survival/illust/domain-entrance.webp"
    }
  ],
  "gallery": [
    {
      "name": "늑대와의 전투",
      "image": "../../assets/chatbots/northern-domain-survival/illust/battle-wolf.webp",
      "description": "설원 사냥과 전투 장면"
    },
    {
      "name": "레오나와의 전투",
      "image": "../../assets/chatbots/northern-domain-survival/illust/battle-leona.webp",
      "description": "적대 세력과의 전투 장면"
    },
    {
      "name": "이졸데의 패배",
      "image": "../../assets/chatbots/northern-domain-survival/illust/defeat-isolde.webp",
      "description": "가능한 전투 결과의 연출 이미지"
    },
    {
      "name": "레오나의 패배",
      "image": "../../assets/chatbots/northern-domain-survival/illust/defeat-leona.webp",
      "description": "가능한 전투 결과의 연출 이미지"
    }
  ],
  "giants": [
    {
      "no": "01",
      "name": "보레아스",
      "power": "빙결 안개의 화신",
      "detail": "시야를 차단하고 방향 감각을 잃게 한다."
    },
    {
      "no": "02",
      "name": "얄루",
      "power": "얼어붙는 대지",
      "detail": "대지와 성벽을 얼려 부순다."
    },
    {
      "no": "03",
      "name": "바르그",
      "power": "늑대 형상의 거인",
      "detail": "영지민을 사냥하고 공포를 퍼뜨린다."
    },
    {
      "no": "04",
      "name": "브란트",
      "power": "눈보라",
      "detail": "눈보라를 몰고 온다."
    },
    {
      "no": "05",
      "name": "그레이스",
      "power": "황폐한 땅",
      "detail": "대지를 메마르게 한다."
    },
    {
      "no": "06",
      "name": "모란트",
      "power": "침묵의 바위",
      "detail": "모든 소리와 진동을 흡수하며 성채를 압박한다."
    },
    {
      "no": "07",
      "name": "우르스",
      "power": "얼음 거인",
      "detail": "요새의 외벽을 단숨에 무너뜨렸다."
    },
    {
      "no": "08",
      "name": "아트로포스",
      "power": "역병",
      "detail": "역병을 일으키는 거인."
    },
    {
      "no": "09",
      "name": "칼라미티",
      "power": "파멸",
      "detail": "산 하나를 통째로 무너뜨리며 진격했다."
    },
    {
      "no": "10",
      "name": "카론",
      "power": "환청과 환각",
      "detail": "환청과 환각을 일으킨다."
    },
    {
      "no": "11",
      "name": "라그나",
      "power": "극한의 절망",
      "detail": "불꽃마저 얼려 버리는 종말의 거인."
    },
    {
      "no": "12",
      "name": "에레보스",
      "power": "가수면 · 최후의 거인",
      "detail": "겨울 그 자체라 불리는 가장 잔혹한 거인. 나탄의 심장을 꿰뚫었지만, 자신의 심장에 박힌 나탄의 검 때문에 아직 깨어나지 못하고 있다."
    }
  ],
  "modes": [
    {
      "name": "변경백 후계자",
      "label": "일반 모드",
      "detail": "플레이어가 발레노르 변경백가의 마지막 후계자가 되어 어린 가신들과 영지를 지킨다."
    },
    {
      "name": "평민의 재건",
      "label": "평민 모드",
      "detail": "후계자 아이솔이 쓰러진 뒤, 평민인 플레이어가 개인 임무를 수행하며 영지 재건에 참여한다."
    }
  ],
  "upgrades": [
    "Lv.1 잔존",
    "Lv.2 긴급복구",
    "Lv.3 자립",
    "Lv.4 전시화",
    "Lv.5 계승 완성"
  ],
  "resources": [
    "식량",
    "향신료",
    "목재",
    "철재",
    "모피",
    "가죽",
    "도구"
  ],
  "bannerFamily": "성벽은 돌로 세우는 것이 아니라, 사람으로 세운다."
};
