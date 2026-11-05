/* 하이비커스 연대기 설정집 데이터
 * 지금 적힌 항목은 모두 '시안용 샘플'입니다. 실제 세계관을 지어 넣지 않았습니다.
 * entries에 character / faction / history 항목을 추가하면 카드가 자동 생성됩니다.
 * regions를 추가하면 상단 지역 탭에 자동 표시됩니다.
 */
window.HIBICUS_WORLD = {
  regions: [
    {id:'region-01',label:'01',name:'지역 기록 A',sub:'REGION / SAMPLE A',description:'여기에 첫 번째 지역의 지리, 문화, 주요 사건과 등장인물에 대한 설명을 등록합니다. 이 문장은 사이트 기능 확인용 예시입니다.',tags:['지역 설정','샘플 데이터']},
    {id:'region-02',label:'02',name:'지역 기록 B',sub:'REGION / SAMPLE B',description:'선택한 지역에 따라 이미지와 설명이 변경되는 구조입니다. 원본 지명과 이미지를 준비하면 이곳을 교체하면 됩니다.',tags:['지리 정보','샘플 데이터']},
    {id:'region-03',label:'03',name:'지역 기록 C',sub:'REGION / SAMPLE C',description:'인물·국가·세력 간의 연결 관계도 추후 이 페이지에서 제공할 수 있습니다.',tags:['세계관','샘플 데이터']}
  ],
  entries: [
    {id:'person-sample',kind:'character',title:'인물 기록 예시',subtitle:'CHARACTER / SAMPLE',summary:'캐릭터 초상화, 소속과 주요 관계를 소개하는 카드 예시',description:'실제 캐릭터 이름, 성격, 소속, 인물 관계 및 비공개로 유지할 내용을 구분해서 이 칸에 작성합니다.',tags:['등장인물','예시'],symbol:'♟'},
    {id:'faction-sample',kind:'faction',title:'세력 기록 예시',subtitle:'FACTION / SAMPLE',summary:'조직의 목표, 영향력, 대립 관계를 소개하는 카드 예시',description:'실제 세력의 명칭과 역사, 조직 내부 구조, 주요 인물 관계를 이곳에 기록합니다.',tags:['세력','예시'],symbol:'⚑'},
    {id:'history-sample',kind:'history',title:'역사 기록 예시',subtitle:'HISTORY / SAMPLE',summary:'중요한 시대·사건의 시간 순서를 정리하는 카드 예시',description:'실제 사건의 연대, 원인, 결과를 정리합니다. 스포일러에 해당하는 정보는 공개 전에 검토해 주세요.',tags:['역사','예시'],symbol:'⌛'}
  ]
};
