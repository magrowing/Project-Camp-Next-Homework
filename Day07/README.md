# 7일차 과제

## 🎯 과제 요구사항

- TodoList 할일 추가 기능 구현 복습
- [과제] TodoList 체크박스 토글 버튼, 삭제 버튼 기능 구현

## 👩🏻‍💻 실습 과정

### 1. 체크박스 토글 버튼 기능 구현

개별 Todo의 id 값을 매개변수로 전달받아, Todos 목록들의 배열에서 순회하면서 매개변수로 전달 받은 id와 일치하는 요소를 찾아 기존의 completed와 반대 되도록 boolean값을 변경해주고, id와 일치하지 않는 요소는 그대로 반환되는 배열을 setTodos 함수의 매개변수로 적용해주었다.

```jsx
const toggleTodo = (id: string) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};
```

### 2. 삭제 버튼 기능 구현

개별 Todo의 id 값을 매개변수로 전달받아, Todos 목록들의 배열에서 순회하면서 매개변수로 전달 받은 id와 일치하지 않는 요소들만 반환하는 배열을 setTodos 함수의 매개변수로 적용해주었다.

```jsx
const removeTodo = (id: string) => {
  setTodos(todos.filter((todo) => todo.id !== id));
};
```

### 3. useState → useReducer 변경해보기

기존에 useState 사용했지만, useReducer 사용해서 상태 변화 함수를 분리하는 작업을 진행해보았다.

```jsx
const reducer = (state: TTodo[], action: TAction) => {
  switch (action.type) {
    case 'ADD': {
      return [{ id: uuidv4(), task: action.value, completed: false }, ...state];
    }
    case 'TOGGLE': {
      return state.map((item) =>
        item.id === action.value
          ? { ...item, completed: !item.completed }
          : item
      );
    }
    case 'REMOVE': {
      return state.filter((item) => item.id !== action.value);
    }
    default:
      return state;
  }
};

const [todos, dispatch] = useReducer(reducer, []);

const addTodo = (task: string) => {
  dispatch({
    type: 'ADD',
    value: task,
  });
};

const toggleTodo = (id: string) => {
  dispatch({
    type: 'TOGGLE',
    value: id,
  });
};

const removeTodo = (id: string) => {
  dispatch({
    type: 'REMOVE',
    value: id,
  });
};
```

<br/>

## 🔥 과제 회고

개인 프로젝트로 TodoList App을 만들어 본 경험이 있어서 과제는 어렵지 않았다. useState가 아닌 useReducer로 적용하고 보니, Type을 지정하는 부분에서 어려움이 있었다. `reducer` 함수의 default 값을 적용하지 않아, 자꾸 dispatch 함수에서 error가 발생되었다. switch문의 default 부분도 꼭 적용해주자.
