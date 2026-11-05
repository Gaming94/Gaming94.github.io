# KAOR NOTE — GitHub Pages 라이트 디자인

민랩노트의 밝고 간결한 편집형 레이아웃을 참고하되, 취업용 포트폴리오와 채팅봇 아카이브에 맞게 독립적으로 디자인한 정적 웹사이트. HTML/CSS/JavaScript만 사용합니다. 별도의 빌드나 계정·서버·API 키가 필요하지 않습니다.

## 1. 구성

- `index.html`: 포트폴리오 메인, 대표 프로젝트, 채팅봇 검색 및 소개 팝업
- `styles.css`: 메인 사이트 디자인
- `app.js`: 필터·검색·상세 보기 등 기능
- `data/catalog.js`: **프로젝트와 채팅봇 콘텐츠를 등록하는 파일**
- `worlds/hibicus/index.html`: 하이비커스 연대기 세계관 아카이브 예시
- `worlds/hibicus/world.css` / `world.js`: 설정집의 디자인·동작
- `data/worlds/hibicus.js`: **세계관 지역/인물/세력/역사를 등록하는 파일**
- `assets/`: 향후 공개 이미지 저장 폴더

현재 이미지·채팅 링크·시작 상황·세계관 상세 내용은 **실제 자료가 없어서 시안/미등록 상태**입니다. 샘플을 공개용으로 쓰기 전에 교체하세요.

## 2. GitHub Pages 배포

1. [GitHub](https://github.com/)에 로그인합니다.
2. **New repository** → 저장소 이름을 `내GitHub아이디.github.io`로 작성합니다. 예: `example123.github.io`. `Public`으로 만들고 생성합니다.
3. 이 ZIP을 **압축 해제**한 다음 `kaor-pages-starter` 폴더 **안의 파일과 폴더**를 저장소 최상위(root)에 업로드합니다. GitHub의 `Add file` → `Upload files`에서 업로드할 수 있고, 폴더 구조를 보존해야 합니다. ZIP 파일 하나만 올리면 사이트가 실행되지 않습니다.
4. `Settings` → `Pages` → `Build and deployment` → `Source: Deploy from a branch` → `Branch: main`, `Folder: /(root)` → `Save`.
5. 배포가 완료되면 `https://내GitHub아이디.github.io/`에 접속합니다. 처음 배포하는 경우 GitHub에 게시되기까지 시간이 걸릴 수 있습니다.

GitHub 공식 안내: https://docs.github.com/ko/pages/quickstart

### 웹 업로드가 어려울 때 (터미널 사용)

저장소를 만든 뒤 압축 해제한 프로젝트 폴더 안에서 다음 명령어를 사용해도 됩니다.

```bash
git init
git add .
git commit -m "Launch creative archive prototype"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

`YOUR_USERNAME`은 두 군데 모두 실제 GitHub 아이디로 바꿉니다. GitHub 인증과 Git 설정이 필요할 수 있습니다.

## 3. 내 콘텐츠 등록하기

`data/catalog.js`를 편집합니다.

### 채팅봇

- `title`: 작품 이름
- `type`: `world`(대형 세계관) 또는 `single`(대화형)
- `description` / `tagline` / `tags`: 설명 및 태그
- `startSituation`: **실제 채팅봇 시작 상황 전문**
- `chatUrl`: babechat.ai 등 외부 채팅 시작 URL. 빈 문자열이면 버튼 비활성화
- `image`: 이미지 파일의 **루트 기준 상대 경로**. 예 `assets/chatbots/noel.webp`; 빈 문자열이면 추상 배경 표시
- `worldUrl`: 대형 설정집이 있으면 `./worlds/hibicus/` 같은 주소, 없으면 빈 문자열

작품이 늘면 같은 배열에 항목을 추가하면 됩니다. 새 작품 추가 시 `id`는 중복되지 않아야 합니다.

### 세계관 설정집

`data/worlds/hibicus.js`의 `regions`와 `entries`를 실제 설정으로 교체합니다. `kind`는 `character`, `faction`, `history` 중 하나입니다. 예시는 모두 임시 데이터로, 실제 하이비커스 설정을 의미하지 않습니다.

새로운 대형 세계관이 생기면 `worlds/hibicus/`를 복사해 새 폴더로 만들고, 데이터 파일과 제목을 바꾸는 방식으로 확장할 수 있습니다.

### 이미지

이미지 파일을 `assets/chatbots/`, `assets/projects/` 등에 저장한 다음 `image` 경로에 입력합니다. 지원 여부는 브라우저에 따라 다르지만 JPG, PNG, WebP 등을 사용할 수 있습니다. 외부에 공개하면 안 되는 원본·토큰·개인정보는 올리지 마세요.

## 4. 사이트 이름·연락처 바꾸기

- 사이트 이름 `KAOR`는 임시 브랜드명입니다. `index.html`과 `worlds/hibicus/index.html`에서 원하는 이름으로 바꾸세요.
- 메인 프로필 소개와 연락처 영역은 `index.html`의 `about` / `contact` 섹션을 편집하세요.
- 색상은 `styles.css` 최상단 `:root` CSS 변수에서 바꿀 수 있습니다. 기본은 크림색 배경 `#fffdfa`, 먹색 `#232323`, 산호색 포인트 `#ff385c`입니다.
- 실제 이력서 URL, 소스코드 공개 링크 등은 검토 후 추가하는 편이 좋습니다.

## 5. 미리 보기

`index.html`을 브라우저에서 열면 대부분의 기능이 동작합니다. 파일 경로 점검과 배포와 같은 환경 테스트에는 로컬 서버가 좋습니다.

```bash
python -m http.server 8000
```

브라우저에서 `http://localhost:8000`으로 접속합니다.

## 6. 보안·공개 범위

GitHub Pages에서 제공되는 사이트 파일은 공개적으로 접근할 수 있습니다. 비공개 GDD, 서버용 API 키, Discord 봇 토큰, 로그인 비밀번호 등을 넣지 마세요. 정적 사이트만으로 서버 측 로그인·데이터베이스 저장·봇 실행은 할 수 없습니다.

이 프로젝트는 **사이트의 첫 시안**입니다. 실제 자료를 반영하기 전인 만큼 수치와 설명을 최종 포트폴리오 증빙으로 사용하려면 원본 확인 및 업데이트가 필요합니다.

## 7. 디자인 방향

- 메인 페이지는 밝은 종이색 바탕, 선명한 타이포, 적은 강조색, 단정한 프로젝트 카드로 구성합니다.
- 이미지가 없을 때는 텍스트 기반 미리보기로 표시됩니다. 실제 이미지는 `assets/`에 추가한 뒤 `data/catalog.js`에서 `image` 속성으로 연결하세요.
- 대형 세계관 아카이브(`worlds/hibicus/`)는 독립된 몰입형 화면을 유지합니다. 메인 사이트 스타일과 별개입니다.
- 디자인은 민랩노트의 미학을 참고했지만 배치와 문구, 구성 요소는 KAOR 아카이브 목적에 맞춰 새로 작성한 것입니다.
