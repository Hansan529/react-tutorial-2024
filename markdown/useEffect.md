# useEffect

컴포넌트가 마운트 됐을 때, 언마운트시, 업데이트시 처리하는 작업입니다.

```jsx
import { useState, useEffect } from 'react';

function App() {
    useEffect(() => {
        console.log("컴포넌트 나타남");
        return () => {
            console.log("컴포넌트 사라짐");
        }
    })
    return (
        
    )
}
```

useEffect 파라미터는 1번째 함수, 2번째 의존값을 받습니다.  
2번째 파라미터를 공백으로 비워둔다면 컴포넌트가 처음 나타날 때만 useEffect에 등록한 함수가 실행됩니다.

마운트시 사용하는 작업
- props 로 받은 값을 로컬 상태로 설정
- API 요청
- 라이브러리 사용
- setInterval 반복작업, setTimeout 예약

함수를 반환 할 수 있는데, `cleanup` 함수라고 합니다. 2번째인 `deps`가 비어있는 경우 컴포넌트가 사라질 때 cleanup 함수가 호출됩니다.

언마운트시 사용하는 작업
- setInterval, setTimeout 작업 clear하기
- 라이브러리 인스턴스 제거하기