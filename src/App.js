import { useState } from 'react';

function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

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

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      Hello, {props.body}
    </article>
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

export default App;
