<p align="center">
  <img src="https://github.com/sangmin802/loa-hands/blob/master/public/img/markdown.gif?raw=true" alt="readme-loahands" />
</p>

## Loa-Hands - 로스트아크 유저 검색 앱

- `Next.js` 버전으로, 실제 모습과 좀 다를 수 있습니다.
- `React.js` 버전보다 느리게 업데이트 됩니다.

### 서버 및 API

- 이벤트 및, 유저 정보를 받아오기 위해 `heroku` 를통해 프록시 겸 데이터를 받아오는 서버 활용
- 비동기 작업을 수행하고, 공통적으로 사용하는 데이터 관리를 위해 `Redux` + `Redux-saga` 활용
  > `Redux-saga`를 사용하여 최신 요청만 수행하도록 하는 `debounce` 기능
- 하단 타이머의 경우, `json`파일로 관리하여 별도의 비동기 작업 없이 바로 노출. 이벤트의 경우 비동기 작업이 필요하여 `loading spinner` 사용
  > 일부분의 `http` 통신으로 인해 전체 화면 대기가 아닌 필요한 부분만 대기시켜 비교적 빠르게 화면을 접하도록 함

### UI

- 각각 컨텐츠 시작시간을 표시하는 타이머
  > 10분전, 3분전, 닫히기 1분전 등 각각의 다른 스타일로 표시토록 함
- 먼저 시작되는 컨텐츠 순서대로 정렬
- 유저 검색 이후, 탭 변경시 새롭게 그리는것이 아닌, 모든 컨텐츠 생성 이후 `display` 속성으로 보여지는 컨텐츠 분리
  > `React` 특유의 깜빡임 제거(`vue`의 `isShow`와 유사한 방식으로 변경)
- `Dialog` 노출 시, 스크롤 된 높이에서 화면 고정
- 반응형 최적화

### src 디렉토리 구조

- api : 전반적인 `http` 통신 작업 메소드 관리
- components : 재활용가능한 컴포넌트 관리. 대부분 단순 `UI`를 그리기 위한 컴포넌트
- hooks : 각종 로직이 담긴 디렉토리
- json : 정적인 `json`데이터 관리
- pages : 각종 로직이 연결되는 최상위 컴포넌트
  > `Route` 개념
- store : `Redux`+`Redux-Saga` 디렉토리. `Redux` 툴킷을 사용하였으며, `Saga`는 미들웨어로 분리
  > 이후, `Redux`에서 일반 `Hook`으로 변경할까 고민중
- style : `Sass`활용을 통한 전역 스타일이나 변수 관리
- utility : 재사용 가능한 이벤트 관리
