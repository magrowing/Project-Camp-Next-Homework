import { useReducer } from 'react';

import Title from '../components/Title';
import TodoEditor from '../components/TodoEditor';
import TodoList from '../components/TodoList';

import { v4 as uuidv4 } from 'uuid';

export type TTodo = {
  id: string;
  task: string;
  completed: boolean;
};

type TAction = {
  type: string;
  value: string;
};

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

export default function Todo() {
  // const [todos, setTodos] = useState<TTodo[]>([]);
  const [todos, dispatch] = useReducer(reducer, []);

  const addTodo = (task: string) => {
    dispatch({
      type: 'ADD',
      value: task,
    });
  };

  const toggleTodo = (id: string) => {
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //   )
    // );
    dispatch({
      type: 'TOGGLE',
      value: id,
    });
  };

  const removeTodo = (id: string) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    dispatch({
      type: 'REMOVE',
      value: id,
    });
  };

  return (
    <section className="section-wrapper">
      <div>
        <Title type="main">Todo List App</Title>
        <Title type="sub">Please enter your details to continue.</Title>
      </div>
      <TodoEditor addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </section>
  );
}
