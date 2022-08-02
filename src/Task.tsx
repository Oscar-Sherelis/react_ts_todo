// export default function Task(content: String) {
//   return <div className="task">{content}</div>;
// }

type TaskType = {
  content: string;
  children: React.ReactNode;
};
const Task = (props: TaskType) => {
  return (
    <>
      <div className="task">
        {props.content}
        {props.children}
      </div>
    </>
  );
};

export default Task;
