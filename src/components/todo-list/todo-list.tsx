import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { TodoListProps } from "types/todo.type";

export const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Completed</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.length > 0 ? (
          props.todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>
                  <input
                    type="checkbox"
                    name="completed"
                    checked={todo.completed}
                    onChange={(e) => e.preventDefault}
                  />
                </td>
                <td>
                  <button onClick={() => props.deleteTodoById(todo.id)}>
                    Delete
                  </button>
                </td>
                <td>
                  <button onClick={() => props.editTodo(todo)}>Edit</button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={4}>No Todos</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
