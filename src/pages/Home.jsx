import { Container, Card, Col, Row, Badge } from "react-bootstrap";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContexts";

export default function Home() {
    const todos = useContext(TodoContext).todos;
    return (<Container>
        <h1 className="my-3">Your todos</h1>
        <Row>
            <CardGroup todos={todos} />
        </Row>
    </Container>)
}

function CardGroup({ todos }) {


    return <>
        {todos.map((todos) => {
            const completed = todos.completed;
            const bg = completed ? "success" : "danger";
            return (
                <Col md={4} key={todos.id}>
                    <Card className="my-3">
                        <Card.Body>
                            <Card.Title>{todos.title}</Card.Title>
                            <Card.Text>{todos.description}</Card.Text>
                            <Badge bg={bg}>{!completed && "Not"}
                                Completed</Badge>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })}</>
}