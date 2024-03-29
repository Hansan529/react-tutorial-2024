/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Product';
import Header from './components/Header';

export const baseBgColor = 'skyblue';
export const baseTxtColor = 'white';


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
  useEffect(() => {
    console.log('props', props);
  }, props);
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="Create" />
        </p>
      </form>
    </article>
  );
}

function Update(props) {
  const [formData, setFormData] = useState({
    title: props.target.title,
    body: props.target.body,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, body } = formData;
    props.topics.forEach((element) => {
      if (element.id === props.target.id) {
        element.title = title;
        element.body = body;
      }
    });
    props.onUpdate(props.topics);
  };

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <textarea
            name="body"
            placeholder="body"
            value={formData.body}
            onChange={handleInputChange}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="Update" />
        </p>
      </form>
    </article>
  );
}

function App() {
  const [headerTitle, setHeaderTitle] = useState('props');
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html~~' },
    { id: 2, title: 'css', body: 'css~~' },
    { id: 3, title: 'js', body: 'js~~' },
  ]);
  const [nextId, setNextId] = useState(topics.length + 1);
  const [target, setTarget] = useState(null);

  let content = null;
  if (mode === 'WELCOME') {
    content = 'World';
  } else if (mode === 'READ') {
    content = topics[id].body;
  } else if (mode === 'CREATE') {
    content = (
      <Create
        onCreate={(title, body) => {
          const newTopic = { id: nextId, title, body };
          const newTopics = [...topics, newTopic];
          setTopics(newTopics);
          setMode('READ');
          setId(topics.length);
          setNextId(nextId + 1);
        }}
      />
    );
  } else if (mode === 'UPDATE') {
    content = (
      <Update
        topics={topics}
        target={target}
        onUpdate={(newTopics) => {
          setTopics(newTopics);
          setMode('READ');
        }}
      />
    );
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/product/*" element={<Product />}></Route>
        </Routes>
        <Header title={headerTitle} onChangeMode={() => setMode('WELCOME')} />
        <Nav
          topics={topics}
          onChangeMode={(_id) => {
            setMode('READ');
            setId(_id);
          }}
        />
        <Article title={mode} body={content} />
        <ul>
          <li>
            <a
              href="/create"
              onClick={(event) => {
                event.preventDefault();
                setMode('CREATE');
              }}
            >
              Create
            </a>
          </li>
          {mode === 'READ' && (
            <>
              <li>
                <a
                  href={`/update/${id + 1}`}
                  onClick={(event) => {
                    event.preventDefault();
                    setMode('UPDATE');
                    setTarget(topics[id]);
                  }}
                >
                  Update
                </a>
              </li>
              <li>
                <input
                  type="button"
                  value="Delete"
                  onClick={() => {
                    const copyTopics = [...topics];
                    const newTopics = copyTopics.filter(
                      (el) => el.id !== id + 1
                    );
                    setTopics(newTopics);
                    setMode('WELCOME');
                  }}
                />
              </li>
            </>
          )}
        </ul>
      </Router>
    </div>
  );
}

export default App;
