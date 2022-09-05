import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useCreateTodoMutation } from 'redux/todos/todoSlice';


export const CreateTodoPage = () => {
  const [createTodo, { isLoading, isSuccess }] = useCreateTodoMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    createTodo(e.currentTarget.elements.content.value);
    e.currentTarget.reset();

    toast.success('Заметка создана!');
  };

  return (
    <>
      {isSuccess && <Navigate to="/todos" />}
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="content" />
        <button type="submit" disabled={isLoading}>
          {/* {isLoading && <Spinner size={12} />} */}
          Create
        </button>
      </form>
    </>
  );
};
