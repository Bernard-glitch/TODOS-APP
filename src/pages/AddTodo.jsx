import { useState, useContext } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContexts";
import { useNavigate } from "react-router-dom";

export default function AddTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);
    const setTodos = useContext(TodoContext).setTodos;
    const todos = useContext(TodoContext).todos;
    const navigate = useNavigate();

    return (
        <Container>
            <h1 className="my-3">Add Todo</h1>
            <Form
                onSubmit={(event) => {
                    event.preventDefault()
                    console.log(todos)
                    setTodos([...todos, { id: Date.now(), title, description, completed }]);
                    navigate("/");
                }}>

                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Get a software developer job"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder={`1. Create amazing project\n2.Apply to Google & Netflix\n3.Crush Interview`} value={description} onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="completed"
                        label="Mark as completed"
                        checked={completed}
                        onChange={(event) => setCompleted(event.target.checked)}
                        className="mb-3"
                    />
                    <Button variant="primary" type="submit">Submit</Button>
                </Form.Group>
            </Form>
        </Container>)
};