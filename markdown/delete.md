# Delete

CRUD의 Delete로 데이터를 제거하고, 이를 저장하는 작업입니다.

```jsx
function App() {
    return (
        <Header />
        <Nav />
        <Article />
        <ul>
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
                        const newTopics = copyTopics.filter((el) => el.id !== id + 1);
                        setTopics(newTopics);
                        setMode('WELCOME');
                        }}
                    />
                    </li>
                </>
        )}
        </ul>
    )
}
```

기존 topics 배열에서, 선택한 li 값을 참조해 배열을 복제한 뒤에, 해당 값을 제거하며 새롭게 갱신해준다.