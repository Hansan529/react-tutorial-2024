# 컴포넌트 생성

```jsx
function App() {
  return (
    <div>
      <header>
        <h1>
          <a href="/">WEB</a>
        </h1>
      </header>
      <nav>
        <ol>
          <li>
            <a href="/read/1">html</a>
          </li>
          <li>
            <a href="/read/2">css</a>
          </li>
          <li>
            <a href="/read/3">js</a>
          </li>
        </ol>
      </nav>
      <article>
        <h2>Welcome</h2>
        Hello, Web
      </article>
    </div>
  );
}

export default App;
```

다음과 같은 App.js 파일에 코드가 입력되어 있다고 예를 들면, header, nav, article 대로 그룹지어서 분리하는게  
가독성과 관리에 더 수월 할 것 같습니다. 그래서 이를 분리하겠습니다.

```jsx
function Header() {
  return (
    <header>
      <h1>
        <a href="/">WEB</a>
      </h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
        <li>
          <a href="/read/3">js</a>
        </li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, Web
    </article>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Article />
    </div>
  );
}

export default App;
```

각각 function으로 분리하면 App 컴포넌트에서는 &lt;Header&gt;, &lt;Nav&gt; &lt;Article&gt; 3개의 컴포넌트만 입력해도  
위에 입력한 header, nav, article의 내용이 정상적으로 나타납니다. 리액트는 사용자 정의 태그를 만드는 기술입니다.