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
              id={el.id}
              href={`/read/${el.id}`}
              onClick={(event) => {
                event.preventDefault();
                props.onChangeMode(event.target.id);
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
      {props.body}
    </article>
  );
}

function App() {
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
        onChangeMode={(id) => {
          alert(id);
        }}
      />
      <Article title="Welcome" body="Hello, WEB" />
    </div>
  );
}

export default App;
