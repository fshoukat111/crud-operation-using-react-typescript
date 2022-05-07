import "./App.css";
import { Routes, Route } from "react-router-dom";
import { EditTodo, TodoCreate, TodoList } from "components";
import { ChangeEvent, useEffect, useState } from "react";
import { ITodos } from "models/todos.model";
import {
  createTodo,
  deleteTodo,
  getAllTodo,
  updateTodo,
} from "services/todos.service";

const App = () => {
  /**
   * Todo List
   */
  const [todos, setTodos] = useState<ITodos[]>([]);
  const initialTodoState = {
    id: null,
    title: "",
    description: "",
    completed: false,
  };

  /**
   *
   */
  const [todo, setTodo] = useState<ITodos>(initialTodoState);
  const [editing, setEditing] = useState(false);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  /**
   * use effect
   */
  useEffect(() => {
    getTodos();
  }, []);

  /**
   * get todo list
   */
  const getTodos = () => {
    getAllTodo()
      .then((res: any) => {
        setTodos(res.data);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };

  /**
   * delete todo by id
   * @param id
   */
  const deleteTodoById = (id: any) => {
    deleteTodo(id)
      .then((res: any) => {
        getTodos();
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };

  /**
   * edit todo by id
   * @param todo
   */
  const editTodo = (todo: ITodos) => {
    setEditing(true);
    setTodo(todo);
  };

  const saveTodo = () => {
    let data = {
      title: todo.title,
      description: todo.description,
      completed: todo.completed,
    };
    createTodo(data)
      .then((res: any) => {
        setTodo({
          id: res.data.id,
          title: res.data.title,
          description: res.data.description,
          completed: res.data.completed,
        });
        getTodos();
        setTodo(initialTodoState);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };

  const toggleTodoCompleted = (id: any) => {
    let checkTodo = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(checkTodo);
  };

  const updateTodoById = (todo: ITodos) => {
    updateTodo(todo.id, todo).then((res) => {
      getTodos();
    });
    setTodo(initialTodoState);
    setEditing(false);
  };

  return (
    <div className="main-app">
      <div className="divivde">
        {editing ? (
          <div>
            <h2>Edit todo</h2>
            <EditTodo
              todo={todo}
              setEditing={setEditing}
              toggleTodoCompleted={toggleTodoCompleted}
              updateTodoById={updateTodoById}
            />
          </div>
        ) : (
          <div>
            <h2>Add Todo</h2>
            <TodoCreate
              todo={todo}
              handleInputChange={handleInputChange}
              saveTodo={saveTodo}
              setTodo={setTodo}
            />
          </div>
        )}

        <div className="todo-list">
          <TodoList
            todos={todos}
            deleteTodoById={deleteTodoById}
            editTodo={editTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
