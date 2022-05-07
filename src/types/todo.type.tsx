import { ITodos } from "models/todos.model";

export type TodoListProps = {
  deleteTodoById: (id: string) => void;
  editTodo: (todo: ITodos) => void;
  todos: ITodos[];
};

export type TodoCreateProps = {
  todo: ITodos;
  saveTodo: () => void;
  setTodo:ITodos|any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TodoEditProps = {
  todo: ITodos;
  setEditing: boolean |any;
  updateTodoById: (todo: ITodos) => void;
  toggleTodoCompleted: (id: any) => void;
};
