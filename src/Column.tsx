type ColumnType = {
  title?: string,
  content: string
}
export function Column(props: ColumnType) {
  return (
    <div className="column">
      <h1>Hi</h1>
      <div className="tasks">
        <h3>
          {props.content} {props.title}
        </h3>
      </div>
    </div>
  );
}