# React 환경 구성 

## 목표

## 설정
- React-create-app (CSR)
- Typescript (타입 지정)
- NextJS (SSR)

### 라이브러리
- 상태관리 라이브러리 (recoil, zustand ...)
- 스타일시트 라이브러리 (emotion & styled-components)

---

## 웹 에디터를 이용하는 방법

[CodePen](https://ko.legacy.reactjs.org/redirect-to-codepen/hello-world)  
[CodeSandbox](https://codesandbox.io/s/new)  
[Stackblitz](https://stackblitz.com/fork/react)

다음과 같은 웹 에디터상에서 설치 없이 사용이 가능합니다.

## 로컬에서 이용하는 방법

Create React App 을 사용해 React 환경 구축을 하기 위해서는 다음과 같은 명령어를 입력하면 됩니다.

```bash
npx create-react-app my-app
cd my-app
npm start
```

npx 명령어를 사용하기 위해서는 NodeJS 가 필요합니다.

`npm start` 를 통해 개발 프리뷰를 확인 할 수 있습니다.

해당 파일에 접근하면 다음과 같은 구조로 되어있습니다.

```
├── .gitignore
├── README.md  
├── package-lock.json  
├── package.json  
├── public  
│   ├── favicon.ico  
│   ├── index.html  
│   ├── logo192.png  
│   ├── logo512.png  
│   ├── manifest.json  
│   └── robots.txt  
└── src  
    ├── App.css  
    ├── App.js  
    ├── App.test.js  
    ├── index.css  
    ├── index.js  
    ├── logo.svg  
    ├── reportWebVitals.js  
    └── setupTests.js  
```

### 수정

src/index.js가 `npm start` 를 진행하면 실행되며 index.js 파일에서 App.js 자바스크립트 파일을 로드해 사용자에게 출력하는 일을 하고 있습니다.

index.js 스크립트 파일에서는 public 폴더의 index.html 에서 확인이 가능합니다.

공통 이미지로 사용되는 요소들은 정적인 파일인 public 폴더에 저장하며,  
__특정 컴포넌트__ (App.js 와 같이 분리한 것)에만 사용되는 이미지는 src에 저장하는 방법으로 폴더 관리를 할 수 있습니다.

### 배포

`npm run build` 명령어를 제출하면 build 라는 폴더가 새롭게 생성되며 public 폴더에 있던 파일들은 변경 없기 복제가 되며,  
src 폴더에 존재하던 파일들은 불필요한 요소들은 제거하고 코드를 압축하여 파일의 용량을 줄여 배포 시 무리 없이 원할하게 작동되도록 변환됩니다.

빌드한 요소를 웹 서버를 통해 확인하려면 `npx serve -s build` 를 입력하면 build/index.html 파일을 서비스합니다.  
터미널에 로컬 주소를 확인 할 수 있습니다.

---

## React 활용

<a href="https://github.com/Hansan529/react-tutorial-2024/blob/main/markdown/Component.md" target="_blank" rel="noopener">Component 컴포넌트</a>

<a href="https://github.com/Hansan529/react-tutorial-2024/blob/main/markdown/props.md" target="_blank" rel="noopener">props 프롭</a>

<a href="https://github.com/Hansan529/react-tutorial-2024/blob/main/markdown/event.md" target="_blank" rel="noopener">event 이벤트</a>

<a href="https://github.com/Hansan529/react-tutorial-2024/blob/main/markdown/state.md" target="_blank" rel="noopener">state 상태</a>

<a href="https://github.com/Hansan529/react-tutorial-2024/blob/main/markdown/create.md" target="_blank" rel="noopener">Create 생성</a>

<a href="https://github.com/Hansan529/react-tutorial-2024/blob/main/markdown/update.md" target="_blank" rel="noopener">Update 업데이트</a>

<a href="https://github.com/Hansan529/react-tutorial-2024/blob/main/markdown/delete.md" target="_blank" rel="noopener">Delete 제거</a>

<a href="https://github.com/Hansan529/react-tutorial-2024/blob/main/markdown/useEffect.md" target="_blank" rel="noopener">useEffect</a>

<a href="https://github.com/Hansan529/react-tutorial-2024/blob/main/markdown/reactRouter.md" target="_blank" rel="noopener">react-router-dom</a>

---

## React Css-in-JS

스타일을 적용시키는 방법 중 하나이며, 이를 선호합니다.

왜냐하면 CSS 파일로 적용을 시키려면, 이를 모듈화를 하여 JS와 CSS간의 연결 작업을 해주어야 하며 개인적으로는 번거롭다고 생각합니다.

대표적으로 styled-components, emotion 이 있습니다.  
두 방식의 차이는 크게 나지 않으며 사용자의 취향에 따라 원하는 라이브러리를 사용하면 됩니다.

### styled-components

styled-components의 경우 컴포넌트 형식으로 스타일을 구성할 수 있습니다.

```js
import styled from "styled-components";

const Title = styled.h1`
    font-size: 32px;
    text-align: center;
`;

function App() {
    return (
        <Title>Hello</Title>
    )
}
```

다음과 같은 방식으로 작성됩니다.

### emotion

```js
/** @jsx jsx */
import { css, jsx } from "@emotion/react"

const divStyle = css`
    background-color: skyblue;
    font-size: 24px;
    text-align: center;
`

function App() {
    return (
        <div css={divStyle}>Hello</div>
    )
}
```

해당 스타일이 적용된 HTML DOM을 구분하기 쉽다는 점이 장점같습니다.

emotion 에서도 styled-components와 같이 적용시킬 수 있습니다.  
@emotion/styled 라이브러리를 사용하면 됩니다.

```js
import styled from '@emotion/styled'

const Container = styled.div`
    background-color: red;
`

function App() {
    return (
        <Container>Hello</Container>
    )
}
```

---

## React 상태 관리 라이브러리

Redux, Recoil, Zustand, Jotai, Valtio, React-query

서버 상태 관리는 React Query, 로컬 상태는 Zustand + immer 라이브러리가 이상적인 것 같은 개인적인 의견입니다.

Redux의 점유율이 가장 높지만 보일러 플레이트를 많이 준비해야 한 다는 점이 단점입니다

<a href="https://github.com/Hansan529/react-tutorial-2024/blob/main/markdown/zustand.md" target="_blank" rel="noopener">Zustand</a>
