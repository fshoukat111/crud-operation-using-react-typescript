import React, { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./create-todo.css";
import { TodoCreateProps } from "types/todo.type";

export const TodoCreate: React.FC<TodoCreateProps> = (props) => {
  return (
    <div className="test">
      <Form className="form-test">
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={props.todo.title}
            type="text"
            name="title"
            placeholder="Enter Title"
            onChange={props.handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={props.todo.description}
            name="description"
            type="text"
            onChange={props.handleInputChange}
            placeholder="Description"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            name="completed"
            id="disabledFieldsetCheck"
            defaultChecked={props.todo.completed}
            // onChange={e => setChecked(e.target.checked)}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={props.saveTodo}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
