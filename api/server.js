import bodyParser from 'body-parser'; // Import body-parser as a default import
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { nanoid } from 'nanoid'; // Import nanoid correctly

// Destructure json from bodyParser
const { json } = bodyParser;

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

let todos = [
  {
    id: nanoid(),
    title: 'todo 1',
    completed: "",
    from_date : "",
    to_date:""
  }
  
];

app.get('/todos', (req, res) => res.send(todos));

app.post('/todos', (req, res) => {
  const todo = { title: req.body.title, id: nanoid(), completed: false ,from_date:req.body.from_date,to_date:req.body.to_date };
  todos.push(todo);
  console.log(todo)
  return res.send(todo);
});

app.patch('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id === id);
  const completed = Boolean(req.body.completed);
  if (index > -1) {
    todos[index].completed = completed;
  }
  return res.send(todos[index]);
});

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id === id);
  if (index > -1) {
    todos.splice(index, 1);
  }

  res.send(todos);
});

const PORT = 7000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
