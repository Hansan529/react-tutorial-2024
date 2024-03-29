# State

Prop은 컴포넌트를 사용하는 외부 함수에 사용할 수 있는 데이터이며,  
State는 컴포넌트를 만드는 내부자를 위한 데이터입니다.


```jsx
function Nav(props) {
  return (
    <nav>
      <ol>
        {props.topics.map((el, idx) => (
          <li key={el.id}>
            <a
              href={`/read/${el.id}`}
              onClick={(event) => {
                event.preventDefault();
                props.onChangeMode(Number(el.id) - 1);
              }}
            >
              {el.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(0);
  const topics = [
    { id: 1, title: 'html', body: 'html~~' },
    { id: 2, title: 'css', body: 'css~~' },
    { id: 3, title: 'js', body: 'js~~' },
  ];
  let content = null;
  if (mode === 'WELCOME') {
    content = 'World';
  } else if (mode === 'READ') {
    content = topics[id].body;
  }
  return (
    <div>
      <Header title="props" onChangeMode={() => setMode('WELCOME')} />
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode('READ');
          setId(_id);
        }}
      />
      <Article title={mode} body={content} />
    </div>
  );
}
```

컴포넌트에 State 값을 전달하는 방식도 사용 가능합니다.

```jsx
function Nav(props) {
  return (
    <nav>
      <ol>
        {props.topics.map((el, idx) => (
          <li key={el.id}>
            <a
              href={`/read/${el.id}`}
              onClick={(event) => {
                event.preventDefault();
                props.onChangeMode(el.title);
                props.setBody(el.body);
              }}
            >
              {el.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [body, setBody] = useState('World');
  const topics = [
    { id: 1, title: 'html', body: 'html~~' },
    { id: 2, title: 'css', body: 'css~~' },
    { id: 3, title: 'js', body: 'js~~' },
  ];
  return (
    <div>
      <Header title="props" onChangeMode={() => alert('Header')} />
      <Nav
        topics={topics}
        onChangeMode={(mode) => setMode(mode)}
        setBody={(mode) => setBody(mode)}
      />
      <Article title={mode} body={body} />
    </div>
  );
}
```

state 값에 따라서 컴포넌트가 렌더가 될 지, 안 될지 선택 가능합니다.

```jsx
function True() {
  return (
    <div>True</div>
  )
}

function False() {
  return (
    <div>False</div>
  )
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div>
      {isLoggedIn ? <True /> : <False />}
      {isLoggedIn && <True />}
    </div>
  )
}
```

1. isLoggedIn 상태값이 true일 경우, `<True />` 컴포넌트를 불러오며, 만약 false이면 `<False />` 컴포넌트를 불러옵니다.  
2. isLoggedIn 상태값이 true일 경우에만 `<True />` 컴포넌트를 불러옵니다.