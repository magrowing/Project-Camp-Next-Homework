/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useReducer } from 'react';

import { todoReducer } from '../reducer/todoReducer';

import { TAction, TTodo } from '../type/todoType';

const TodoStateContext = createContext<TTodo[] | null>(null);
const TodoDispatchContext = createContext<React.Dispatch<TAction> | null>(null);

/**
 * TodoStateContext 초기값을 null 지정하여 별도의 hooks 생성
 */
export const useStateContext = () => {
  const todos = useContext(TodoStateContext);
  if (!todos) throw new Error('stateContext Error!');
  return todos;
};

/**
 * todoDispatchContext 초기값을 null 지정하여 별도의 hooks 생성
 */

export const useDispatchContext = () => {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error('DispatchContext Error!');
  return dispatch;
};

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
