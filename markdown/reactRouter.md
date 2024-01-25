# 라우팅

클라이언트 측 라우팅을 처리하기 위해서 React Router 와 같은 라이브러리를 사용합니다.

라이브러리를 프로젝트에 추가 `npm install react-router-dom`

```js
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from '/About';
import Contact from './Contact';

const app = () => {
    return (
        <Router>
            <Routes>
                <Route path="/about" component={<About />} />
                <Route path="contact" conponent={<Contact />} />
                <Routes path="/" conponent={<Home />}>
            </Routes>
        </Router>
    )
}
```

라우팅 할 컴포넌트를 **BrowserRouter** 컴포넌트(Router로 별명 설정)가 최상위 태그로 감싸게 되며 하나의 라우터만 사용해야합니다.  

해당 경로에 접근할 경우 설정한 component가 유저에게 보여지게 됩니다. `http://localhost:3000/about` 인 경우 About 컴포넌트가 보입니다.
