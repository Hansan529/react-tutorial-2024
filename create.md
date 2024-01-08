# Create

CRUD (Create, Read, Update, Delete) 과정 중 Create에 대한 내용입니다.

데이터를 생성하는 방법은 여러가지가 있지만 useState를 활용하여 사용자에게 데이터를 받아 추가하는 작업을 해보겠습니다.

```jsx
function Create(props) {
    return (
        <article>
            <h2>Create</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                const title = e.target.title.value;
                const body = e.target.body.value;
                props.onCreate(title, body);
            }}>
                <p><input type="text" name="title" placeholder="title" /></p>
                <p><textarea name="body" placeholder="body"></textarea></p>
                <p><input type="submit" /></p>
            </form>
        </article>
    )
}

function App() {
    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState(0);
    const [topics, setTopics] = useState([
        { id: 1, title: 'html', body: 'html~~' },
        { id: 2, title: 'css', body: 'css~~' },
        { id: 3, title: 'js', body: 'js~~' },
    ]);
    const [nextId, setNextId] = useState(topics.length + 1);
    if (mode === 'WELCOME') {
        content = 'World';
    } else if (mode === 'READ') {
        content = topics[id].body;
    } else if (mode === 'CREATE') {
        content = <Create onCreate={(title, body) => {
            const newTopic = {id: nextId, title, body};
            const newTopics = [...topics, newTopic];
            setTopics(newTopics);
            setMode('READ');
            setId(topics.length);
            setNextId(nextId + 1);
        }} />
    }
    return (
        <>
            <Header title="props" onChangeMode={() => setMode('WELCOME')} />
            <Nav
                topics={topics}
                onChangeMode={(_id) => {
                    setMode('READ');
                setId(_id);
                }}
            />
            <Article title={mode} body={content} />
            <a href="/create" onClick={(e) => {
                e.preventDefault();
                setMode("CREATE");
            }}>Create</a>
        </>
    )
}

```

body의 a 태그의 Create 텍스트를 클릭 시, mode가 "CREATE"로 변경되며, App 함수의 useState가 변경되어 재실행되어  
if문의 CREATE에 true되어 **content**의 내용을 변경합니다.

사용자의 데이터를 받을 form을 생성하고, submit 을 요청 받으면 name 값을 받아서, App 함수로 State를 업데이트시킵니다.  
해당 state의 값을 사용하여 **topics**에 추가할 객체를 만듭니다. 변수에 기존 **topics** 값과 추가된 newTopic 값을 state에  
새롭게 지정해주면, 데이터 추가가 완료됩니다.

데이터를 추가했으니, 해당 상세페이지로 이동하도록 mode를 "READ"로 변경시켜주며 id값을 갱신합니다.