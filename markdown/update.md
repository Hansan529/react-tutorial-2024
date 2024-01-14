# Update

Create 한 데이터를 변경하기 위한 작업이며, CRUD에서 가장 중요도가 높다.

```jsx
function Update(props) {
    const [formData, setFormData] = useState({
        title: props.target.title,
        body: props.target.body,
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name] : e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, body } = formData;
        props.topics.forEach((element) => {
            if(element.id === props.target.id) {
                element.title = title;
                element.body = body;
            }
        });
        props.onUpdate(props.topics);
    }
    return (
        <article>
            <form onSubmit={handleSubmit}>
                <p><input type="text" name="title" placeholder="title" value={formData.title} onChange={handleInputChange} /></p>
                <p><textarea name="body" placeholder="body" value={formData.body} onChange={handleInputChange}></textarea></p>
                <p><input type="submit" value="Update" /></p>
            </form>
        </article>
    )
}

function App() {
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
      <Header title="props" onChangeMode={() => setMode('WELCOME')} />
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
        )}
      </ul>
    </div>
  );
}
```

Update 컴포넌트에서 기존에 작성한 데이터에 접근하기 위해서 props에서 받은 데이터를 변수 및 state에 저장합니다.  
input, textarea의 value에 불러온 데이터를 변경하면, 고정값이 변경되지 않는데 이를 해결하기 위해서 `onChange`를 사용하여  
State에 입력 값을 갱신하며 input, textarea에 변경내용을 동기화시킨다.

handleInputChange 함수에서 기존 formData 구조를 유지하면서 title, body의 값만 업데이트한다.

단일 topic를 업데이트한 내용을 전체 topics를 업데이트하기 위해 **handleSubmit** 함수를 실행시켜 Update가 진행됩니다.