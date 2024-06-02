import Button from '../components/Button';
import TextField from '../components/TextField';
import Title from '../components/Title';
import Todo from '../components/Todo';

export default function TodoList() {
  return (
    <section className="section-wrapper">
      <div>
        <Title type="main">Todo List App</Title>
        <Title type="sub">Please enter your details to continue.</Title>
      </div>
      <div className="flex items-center justify-center gap-[0.8rem] mb-[1.6rem]">
        <TextField style={{ flex: '1' }} placeholder="Enter Todo List" />
        <Button style={{ width: '7.7rem' }} btnStyleType="full">
          Add
        </Button>
      </div>
      <ul className="flex flex-col items-center justify-center gap-[1.6rem]">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </ul>
    </section>
  );
}
