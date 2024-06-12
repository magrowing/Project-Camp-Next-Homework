const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

let todos = [];

// 할일 조회
app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

// 할일 생성
app.post('/todos', (req, res) => {
  const { task } = req.body;
  const newTodo = {
    id: uuidv4(),
    task,
    completed: false,
  };
  todos.unshift(newTodo);
  res.status(200).json(newTodo);
});

// 할일 체크박스 상태 업데이트
app.patch('/todos/:id', (req, res) => {
  const { id } = req.params;
  const findTodo = todos.find((todo) => todo.id === id);

  if (!findTodo) {
    res.status(400).send('Not found Todo');
  }

  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );

  res.status(200).send('Todo Completed Update');
});

// 할일 내용 업데이트
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const findTodo = todos.find((todo) => todo.id === id);

  if (!findTodo) {
    res.status(400).send('Not found Todo');
  }

  todos = todos.map((todo) => (todo.id === id ? { ...todo, task } : todo));

  res.status(200).send('Todo Task Update');
});

// 할일 삭제
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const findTodo = todos.find((todo) => todo.id === id);

  if (!findTodo) {
    res.status(400).send('Not found Todo');
  }

  todos = todos.filter((todo) => todo.id !== id);
  res.status(200).send('Todo Delete Success');
  //res.status(200).json(todos);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
