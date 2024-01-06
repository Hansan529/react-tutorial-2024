# React 환경 구성

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

<a href="https://github.com/Hansan529/react-tutorial-2024/blob/main/Component.md" target="_blank" rel="noopener">Component 컴포넌트</a>

<a href="https://github.com/Hansan529/react-tutorial-2024/blob/main/props.md" target="_blank" rel="noopener">props 프롭</a>