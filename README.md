# API를 사용한 영화소개 & 추천 페이지

**PROJECT 소개**

노마드 코더의 ReactJS로 영화 웹 서비스 만들기의 function Hook까지의 강의를 듣고 제작해본 개인 프로젝트입니다. 강의를 복습하기 위해 creact-react-app부터 시작하여 작성 중 욕심이 생겨 styled-component를 배워 반응형으로 구현해봤습니다.

🗓️ **작업기간** : 2021.05.11-2022.05.13

🙋 **참여인원** : 1명

📘 **주요업무 :**

- 영화 리스트 API를 가져와 영화 목록 페이지 제작
- 영화 목록 API의 ID를 확인하여 movie_details API, movie_suggestions API 정보를 가져와 영화 소개 페이지 제작
- 공통 혹은 반복적으로 사용하는 코드는 createGlobalStyle, ThemeProvider를 사용하여 제작
- 버튼 재사용이 가능하도록 버튼을 컴포넌트로 제작하여 props를 통해 재사용

🌱 **스킬 및 사용툴** : `GIT` `VSCODE` `Styled-component` `React`

📚 **보완해야 할 점** :

- ThemeProvider 사용이 미숙해 매개변수를 입력하는 함수 사용을 실패했다. 반복적인 코드의 양을 줄이기 위해 추후에는 props에 프로퍼티 키를 입력하여 값을 빼내는 theme 뿐만이 아닌, 매개변수를 입력하여 함수로 사용할 수 있게 해야 함.
- styled-componet의 컴포넌트 명을 계획적으로 지정하지 못한 것에 대한 아쉬움이 있다. 다음 프로젝트를 진행하게 될 때는 규칙을 정해 컴포넌트 명을 지정할 것

📝 **프로젝트 진행 후 느낀 점** :

- 리액트 프로젝트는 이번이 두번째인데 이번 프로젝트를 진행하며 useState와 onClick 등등의 리액트 이벤트, useEffect, useParams의 용도에 대해 제대로 알고 사용한다
- `.then()` 이 아닌 `async/await`에 대한 사용법을 제대로 익힐 수 있었고, API와 함께 콘솔을 확인하며 코드를 사용하다 보니 습관적으로 사용하게 되었던 메서드들의 용도를 제대로 알고 익히게 되었다.
- 이번 프로젝트를 계기로 styled-component를 배우고 익히게 되었는데 기존에 사용하던 scss를 사용하며 느꼈던 js파일과 scss 파일을 같이 봐야 한다는 점(그래서 관리가 어렵다는 점+js,css,scss파일이 따로 존재)과 className, tag가 중복되었을 때의 불편함을 해소할 수 있어서 좋았다.
  - 또한 사용해보지 않은 프레임워크에 대한 두려움이 많이 해소되었다.
- 컴포넌트의 재사용에 대한 개념만 알고 있다 필요성을 느끼고 직접 작성하게 되어 뿌듯했고, 이외에도 다양한 코드에서 사용할 수 있을 것 같아 코드 작성 전 기획단계의 중요성을 다시 한 번 느꼈다.
- 컴포넌트를 나누는 기준이 생긴 것 같았다. styled-component를 사용하다보니 한 파일에 많은 양의 코드를 담는 것이 부담스러웠고, 용도 및 코드 길이에 따라 컴포넌트를 분리하게 되었다.

[👉 _프로젝트 Link_](https://199jeonga.github.io/react-moive-challenge/)  
[👉 _git-hub Link_](https://github.com/199jeonga/react-moive-challenge)

---

## 페이지 이동

![react_movie_web1](./public/readmeImg/page1.gif)

- Home(`"/"`) 에서 영화 리스트 페이지(`"/movie"`) 까지의 이동

![react_movie_web2](./public/readmeImg/page2.gif)

- 영화 리스트 페이지(`"/movie"`) 에서 영화 상세 설명(`"/movie/:id"`) 까지의 이동

---

## 반응형

![react_movie_web_responsive1](./public/readmeImg/respon1.gif)

- 홈화면의 반응형 구현

![react_movie_web_responsive2](./public/readmeImg/respon2.gif)

- 영화 리스트 페이지의 반응형 구현

![react_movie_web_responsive3](./public/readmeImg/respon3.gif)

- 영화 상세 설명 페이지의 반응형 구현
