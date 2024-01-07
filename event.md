# 이벤트

컴포넌트에 이벤트를 부여하는 방법

기존의 [props](https://github.com/Hansan529/react-tutorial-2024/blob/main/props.md) 에 이벤트를 전달할 수 있습니다.

```jsx
function Header(props) {
    return (
        <header>
            <h1>
                <a href="/" onClick={(event)=>{
                    event.preventDefault();
                    props.onChangeMode();
                }}></a>
            </h1>
        </header>
    )
}

function Nav(props) {
    return (
    <nav>
        <ol>
            {props.topics.map((el, idx) => (
            <li key={el.id}>
                <a id={el.id} href={`/read/${el.id}`} onClick={event => {
                    event.preventDefault();
                    props.onChangeMode(event.target.id);
                }}>{el.title}</a>
            </li>
            ))}
        </ol>
    </nav>
    )
}

function App() {
    // ...
    return (
        <Header title="props" onChangeMode={() => alert('header')} />
        <Nav onChangeMode={(id) => {
            alert(id);
        }} />
        <Article />
    )
}
```

Header 컴포넌트의 a 태그 이벤트를 발동 시, onChangeMode 프롭 함수가 실행되어 `alert()` 문이 실행됩니다.

Nav 컴포넌트에 매개변수를 지정하여, 함수 실행 시 매개변수 값이 적용되도록 설정할 수 있습니다.