import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo, addTodo }) => {

  return (
    <form
      className="todo-input"
      onSubmit={(e) => {
        addTodo(e);
      }}
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        placeholder="New todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default InputField;
