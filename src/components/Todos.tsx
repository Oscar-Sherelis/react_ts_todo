import React from "react";
import { Todo } from "../model";

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const Todos:React.FC<Props> = ({todos, setTodos}) => {

    return (
      <div className="todos">
        {todos.map((todoObj) => (
          <form key={todoObj.id}>
            <span>{todoObj.todo}</span>
            <div className="toolkit">
              <span className="icon"></span>
              <span className="icon"></span>
              <span className="icon"></span>
            </div>
          </form>
        ))}
      </div>
    );
}

export default Todos