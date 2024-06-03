import { useState } from 'react';
import Login from './pages/Login';
import Sign from './pages/Sign';
import TodoList from './pages/TodoList';

export default function App() {
  const [tab, setTab] = useState('login');
  const handleClick = (target: string) => {
    setTab(target);
  };
  return (
    <article className="flex flex-col items-center justify-center h-[100vh]">
      <div className="flex items-center justify-center mb-10 gap-10">
        <button
          type="button"
          className={`text-white text-lg ${tab === 'login' ? `bold` : ''}`}
          onClick={() => handleClick('login')}
        >
          Login
        </button>
        <button
          type="button"
          className={`text-white text-lg ${tab === 'sign' ? `bold` : ''}`}
          onClick={() => handleClick('sign')}
        >
          Sign
        </button>
        <button
          type="button"
          className={`text-white text-lg ${tab === 'todolist' ? `bold` : ''}`}
          onClick={() => handleClick('todolist')}
        >
          TodoList
        </button>
      </div>
      {tab === 'login' && <Login />}
      {tab === 'sign' && <Sign />}
      {tab === 'todolist' && <TodoList />}
    </article>
  );
}
