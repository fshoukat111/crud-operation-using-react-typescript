import { ITodos } from "models/todos.model";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/esm/Form";
import { useParams } from "react-router";
import { getTodobyId } from "services/todos.service";
import { TodoEditProps } from "types/todo.type";

export const EditTodo: React.FC<TodoEditProps> = (props) => {
  const [currentTodo, setCurrentTodo] = useState<ITodos>(props.todo);

  useEffect(() => {
    setCurrentTodo(props.todo);
  }, [props.todo]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentTodo({ ...currentTodo, [name]: value });
  };

  return (
    <div className="test">
      <Form className="form-test">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={currentTodo?.title}
            type="text"
            name="title"
            placeholder="Enter Title"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={currentTodo?.description}
            name="description"
            type="text"
            onChange={handleInputChange}
            placeholder="Description"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            name="completed"
            defaultChecked={currentTodo?.completed}
            id="disabledFieldsetCheck"
            value={currentTodo?.completed}
            onChange={() => {
              props.toggleTodoCompleted(currentTodo.id);
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          onClick={() => props.updateTodoById(currentTodo)}
        >
          Update
        </Button>
      </Form>
    </div>
  );
};
