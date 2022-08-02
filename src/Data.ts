export interface IInitialData {
  boards: {
    [boardKey: string]: {
      columns: {
        [columnKey: string]: {
          column: IColumn;
          tasks: ITask;
        };
      };
      columnOrder: Array<string | number>;
    };
  };
}

export interface IColumn {
  columnId: number | string;
  columnOrder: number | string,
  title: string;
  tasks: ITask;
}

export interface ITask {
  [key: string]: { id?: number | string; content: string };
}

const initialData = {
  boards: {
    "board-1": {
      columns: {
        "column-1": {
          columnId: "column-1",
          title: "To do",
          columnOrder: "column-1",
          tasks: {
            "task-1": { id: "task-1", content: "Clean table" },
            "task-2": { id: "task-2", content: "Clean bath" },
            "task-3": { id: "task-3", content: "Clean room" },
            "task-4": { id: "task-4", content: "Wash cat" },
          },
        },
      },
    },
  },
};

// tasks: {
//   "task-1": { id: "task-1", content: "Clean table" },
//   "task-2": { id: "task-2", content: "Clean bath" },
//   "task-3": { id: "task-3", content: "Clean room" },
//   "task-4": { id: "task-4", content: "Wash cat" },
// },

// columns: {
//   "column-1": {
//     id: "column-1",
//     title: "To do",
//     taskIds: ["task-1", "task-2", "task-3"],
//   },
// },
// columnOrder: ["column-1"],

export default initialData;
