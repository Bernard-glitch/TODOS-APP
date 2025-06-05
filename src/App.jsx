import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { TodoContext } from "./contexts/TodoContexts";
import AddTodo from "./pages/AddTodo";

function Layout() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Todos</Navbar.Brand>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
}

export default function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/add" element={<AddTodo />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TodoContext.Provider>
  );
}