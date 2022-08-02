import React from "react";
import "./App.css";
import "./style.css";
import InputField from "./components/InputField"
import { Todo } from "./model";
import Todos from "./components/Todos";

const App:React.FC = () => {
  const [todo, setTodo] = React.useState<string>("")
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const addTodo = (e:React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      // After adding text to input onChange event will save input value to todo state
      // ...todos passes all previous todo.
      // {id: Date.now(), todo, isDone:false} - adds new todo
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }

    // console.log(todos)
    // returns object array [{id:number = Date.now(), todo:string = "", isDone:boolean = false}]

  }
  return (
    <div className="App">
      <div className="container">
        <h1>Trello Clone App</h1>
        <InputField todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
