# props

컴포넌트는 함수며, 함수는 재사용하기 쉽다는 장점이 있습니다.

이를 통해 함수 내에 일부 내용을 다르게 변경하도록 매개변수를 받아서 적용하기 위해서 React에서는 props 을 사용합니다.

```jsx
function Header(props) {
    return (
        <header>
            <h1>
                <a href="/">{props.title}</a>
            </h1>
        </header>
    );
}

function App() {
    return (
        <Header title="props" />
    )
}

// props: {title: 'props'}
```

Header 컴포넌트에서 props로 받는 요소는, 사용하는 함수에서 prop에 적용됩니다.  
App 함수에서 `title="props"` 로 데이터를 전달하면 Header에서 `{title: 'props'}` key value로 인식됩니다.

들어오는 프롭의 개수만큼의 DOM을 생성시키려면 다음과 같이 **map**을 사용합니다.

```jsx
function Nav(props) {
    return (
        <nav>
            <ol>
                {props.topics.map(el => (
                    <li key={el.id}><a href={`/read/${el.id}`}>{el.title}</a></li>
                ))}
            </ol>
        </nav>
    )
}

function App() {
    const topics = [
        {id: 1, title: 'html', body: 'html..'},
        {id: 2, title: 'css', body: 'css..'},
        {id: 3, title: 'js', body: 'js..'},
    ];
    return (
        <Header title="props" />
        <Nav topics={topics} />
        <Article />
    )
}
```

기존 하드코드에서, 매개변수를 받는 함수로 변경되었습니다.  
Nav 함수의 &lt;li&gt; 태그의 key는 map와 같은 반복문에서는 고유 값이 필요합니다.