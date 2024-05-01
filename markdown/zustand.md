# Zustand

Redux에 비해 반복되는 코드가 적으며, 간단하게 사용이 가능합니다.  
또한 redux의 provider 를 wrap 하지 않아도 됩니다.

Typescrip를 사용하면, 불변성을 위해 immer를 사용하거나, Redux 패턴과 유사한 코드를 작성할 수 있습니다.

변경 사항이 있는 경우에만 구성 요소를 렌더링합니다.

---

## Zustand 사용

`npm i zustand`

Zustand 라이브러리를 설치

스토어를 만들 때는 create 함수를 이용하며 상태와 그 상태를 변경하는 액션을 정의합니다.

```js
import create from 'zustand'

// set 함수로 상태 변경
const useStore = create(set => ({
    bears: 0,
    increasePopulation: () => set(state => ({ bears: state.bears + 1})),
    removeAllBears: () => set({ bears: 0})
}))
```

컴포넌트에서 `useStore` 훅을 사용할 때는 어떤 형태로 꺼내올지 결정하는 셀렉터 함수를 전달해 주어야 한다.  
만약 셀렉터 함수를 전달하지 않는다면 스토어 전체가 리턴됩니다.

```js
// 상태를 꺼낸다
function BearCounter() {
    const bears = useStore(state => state.bears);
    return <h1>{bears} around here ...</h1>
}

// 상태를 변경하는 액션을 꺼낸다
function Controls() {
    const increasePopulation = useStore(state => state.increasePopulation);
    return <button onClick={increasePopulation}>one up</button>
}
```

Store에 저장을 하여도, 새로고침을 하면 해당 데이터가 기본값으로 초기화되는 데, 이를 새로고침 후에도 기존의 데이터를 유지하고자 할려면 persist 미들웨어를 사용한다.

```js
// useStore.js
import { persist } from "zustand/middleware";

const useStore = create(
    persist((set) => ({
        data: null,
        text: null,

        dataChange: (value) => set(() => ({ data: value })),
    }),
    {
        name: 'cache',
    })
);

export default useStore;
```

```js
// index.js
import useStore from "./useStore";

function App() {
    const { data, text, dataChange } = useState(state => state);

    return (
        <div>
            <button onClick={() => dataChange('abc')}>abc</button>
        </div>
    )
}
```

버튼을 클릭하면, useStore의 data 타겟이 'abc' 로 변하게 되며, 해당 데이터는 localStorage에 'cache' key 값을 갖고 저장된다.

해당 로컬 스토리지 값을 제거하려면 `useStore.persist.clearStorage()` 옵션을 사용하면 된다.

### `name`

필수 조건이며 로컬 스토리지의 key 값에 해당한다.

### `storage`

default: localstorage 기본값이 로컬 스토리지이다.

```js
import { persist, createJSONStorage } from 'zustand/middleware';

export const useStore = create(
    persist((set) => ({
        // ...
    })),
    {
        // ...
        storage: createJSONStorage(() => sessionStorage),
    }
)
```

세션 스토리지에 저장하고자 하면 다음과 같이 createJSONStroage를 사용하면 된다.

