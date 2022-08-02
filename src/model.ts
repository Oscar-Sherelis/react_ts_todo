export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

// id is numeric type, but if I id: Date.now(), it works perfectly