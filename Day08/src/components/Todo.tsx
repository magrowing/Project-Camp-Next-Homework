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
