import { Toaster } from 'react-hot-toast';
import { Routes, Route, Router } from 'react-router-dom';
import { TodosPage } from 'pages/Todos';
import { HomePage } from 'pages/Home';
import { CreateTodoPage } from 'pages/CreateTodo';

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/todos" exact element={<TodosPage />}></Route>
          <Route path="/todos/create" element={<CreateTodoPage />}></Route>
        </Routes>
      </Router>

      <Toaster position="top-right" />
    </>
  );
};
