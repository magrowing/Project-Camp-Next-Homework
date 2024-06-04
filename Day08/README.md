# 8일차 복습

## 🎯 학습 목표

- useReducer 와 contextAPI 를 활용한 TodoList 기능 구현 복습 + 최적화 적용
- 수정 버튼 기능 구현 추가 해보기

## 👩🏻‍💻 복습 과정

### 1. Type 정의

우선 사용할 Type들의 정의 했고, 컴포넌트 내에서 재사용 되므로 별도의 폴더내의 파일로 분리했다.

- Todo
- reducer 함수의 매개변수 action

```typescript
// todoType.ts

export type TTodo = {
  id: string;
  task: string;
  completed: boolean;
};

export type TAction = {
  type: 'ADD_TODO' | 'TOGGLE_TODO' | 'DELETED_TODO' | 'EDIT_TODO';
  payload: TTodo;
};
```

### 2. todoReducer 함수 생성

todoReducer 함수는 todos의 추가/토클/수정/삭제 순으로 상태변화에 필요한 로직을 case 별로 정의했다.
수정 버튼 기능 구현을 위해 action의 payload는 todo 요소를 할당 받는 로직으로 적용했다.

`dispatch(type : action , plaload : todo)`

```typescript
// todoReducer.ts

import { TAction, TTodo } from '../type/todoType';

export const todoReducer = (todos: TTodo[], action: TAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [action.payload, ...todos];
    case 'TOGGLE_TODO':
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'EDIT_TODO': // 👈🏻 edit 로직 추가
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, task: action.payload.task }
          : todo
      );
    case 'DELETED_TODO':
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};
```

### 3. ContextAPI를 활용한 todos, dispatch 함수 공급

#### 3-1. createContext 생성

createContext를 사용해 2개의 context 생성했다. **각각 공급하는 이유는 state(todos)와 dispatch 하나의 값으로 공급하게 되면 state(todos) 업데이트 함에 따라 값이 변경되면서 공급 받는(구독하고) 컴포넌트의 불필요한 리렌더링이 발생을 방지하기 위해서이다.**

- state
- dispatch

```jsx
const TodoStateContext = createContext<TTodo[] | null>(null);
const TodoDispatchContext = createContext<React.Dispatch<TAction> | null>(null);
```

#### 3-2. useContext를 사용하기 위한 CustomHook 생성

`useContext`는 전역으로 관리하는 상태를 사용할 컴포넌트에서 import 해서 사용해도 되지만, CustomHook으로 생성하여 Provider로 value를 전달하여 useContext를 사용 할 때, 잘못된 값을 전달할 경우의 error를 확인하기 위해 조건문을 추가를 하였고, return 문의로 상태와 dispatch 함수를 반환하였다.

- 🔗 [참고](https://velog.io/@defaultkyle/react-with-ts-2)

```jsx
export const useStateContext = () => {
  const todos = useContext(TodoStateContext);
  if (!todos) throw new Error('stateContext Error!');
  return todos;
};

export const useDispatchContext = () => {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error('DispatchContext Error!');
  return dispatch;
};
```

#### 3-3. provider를 반환하는 별도의 컴포넌트 생성

`TodoContextProvider` 컴포넌트는 children 을 props로 전달받아 Context.Provider 컴포넌트들과 함께 렌더링 하는 역활을 한다.

> 🤔 왜 이렇게 사용해야하지? 공식문서를 찾아보니, 공급하는 Provider의 갯수가 추가되게 되면 복잡해지니, 코드의 가독성 측면을 위해 사용하는 것이다. 굳이 이렇게 사용하지 않아도 된다. 그러나 확장을 생각한다면 해당 방법을 사용해도 될 것 같다.

- 🔗 [공식문서](https://react.dev/learn/scaling-up-with-reducer-and-context#moving-all-wiring-into-a-single-file)

```jsx
export const TodoContextProvider = ({ children }: { children: ReactNode }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoStateContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};
```

#### 3-4. TodoContextProvider로 공급

```jsx
// Todo.tsx
import { TodoContextProvider } from '../context/todoContext';

import TodoEditor from './TodoEditor';
import TodoList from './TodoList';

const Todo = () => {
  return (
    <>
      <div className="w-[375px] bg-white py-10 px-6 text-[#4b4b4b]">
        <h1 className="text-xl font-bold mb-[10px]"> Todo Into App</h1>
        <p className="text-sm mb-5">Please enter your details to continue.</p>
        <TodoContextProvider>
          {/* 등록 */}
          <TodoEditor />
          {/* 리스트 */}
          <TodoList />
        </TodoContextProvider>
      </div>
    </>
  );
};
export default Todo;
```

### 4. TodoEditor의 useDispatchContext 사용

useDispatchContext를 활용해서 dispatch 함수를 공급받아, 매개변수로 상태변화에 필요한 action 정의했다.

```jsx
const TodoEditor = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatchContext(); // 👈🏻 dispatch 함수 공급

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      // 👇🏻 상태변화 함수 action 정의
      type: 'ADD_TODO',
      payload: { id: uuidv4(), task: text, completed: false },
    });
    setText('');
  };
  return <>(....중략.....)</>;
};
export default TodoEditor;
```

### 5. TodoList의 useStateContext 사용해서 상태 조회

useStateContext를 통해 Todos를 조회하고, Todos 순회하여 리스트 UI 화면에 노출 처리

```jsx
import TodoListItem from './TodoListItem';

import { useStateContext } from '../context/todoContext';

const TodoList = () => {
  const todos = useStateContext(); // 👈🏻 todos 상태 조회
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4">
        {todos &&
          todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)}
      </ul>
    </>
  );
};
export default TodoList;
```

### 6. TodoListItem의 useDispatchContext 사용

useDispatchContext를 활용해서 dispatch 함수를 공급받아, 토글버튼/삭제버튼을 구현하기 위해 각각 이벤트 핸들러에 dispatch 함수를 호출하고 매개변수로 상태변화에 필요한 action 정의했다.

```jsx
const dispatch = useDispatchContext();

const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  setTask(e.target.value);
};

const onDeleteClickHandler = () => {
  dispatch({ type: 'DELETED_TODO', payload: todo });
};
```

### 7. 수정 버튼 기능 구현 추가 해보기

수정 버튼 클릭시 입력창이 노출되고, 기존 할일이 노출되고

<br/>

## 🤗 결과물

|               Login                |               Sign               |                 TodoList                 |
| :--------------------------------: | :------------------------------: | :--------------------------------------: |
| ![Login UI](./image_src/login.png) | ![Sign UI](./image_src/sign.png) | ![TodoList UI](./image_src/todolist.png) |

<br/>

## 🔥 과제 회고

Tailwind CSS 의 공식문서를 열심히 찾아보았고, 해당 프레임워크가 제공하는 기능을 최대한 활용해보고자 했다.
디자인 시스템인 Theme 정의하고, 자주 사용될거 같아보이는 부분은 custom class를 생성했으며 동적인 Class 적용도 시도해보았다. 아직 완벽하게 사용법을 익히지는 못해서 추가적으로 다른 프로젝트를 진행해보면서 더 시도해보려고 한다.
