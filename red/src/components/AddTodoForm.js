import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../redux/todoSlice';

const AddTodoForm = () => {
  // Initialize state with empty values
  const [todo, setTodo] = useState({
    todoName: '',
    from_date: '',
    to_date: '',
  });
  const dispatch = useDispatch();

  // Handle form submission
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo.todoName && todo.from_date && todo.to_date) {
      dispatch(
        addTodoAsync({
          title: todo.todoName,
          from_date: todo.from_date,
          to_date: todo.to_date,
        })
      );
      // Clear the input fields after submission
      setTodo({
        todoName: '',
        from_date: '',
        to_date: '',
      });
    }
  };

  // Disable the submit button if any field is empty
  const submitDisabled = !(todo.todoName && todo.from_date && todo.to_date);

  // Handle input field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  return (
    <form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
      <label className='sr-only'>Name</label>
      <input
        type='text'
        className='form-control mb-2 mr-sm-2'
        placeholder='Add todo...'
        value={todo.todoName}
        onChange={handleChange}
        name='todoName'
      />
			<label>From date:</label>
      <input
        type='date'
				 className=" mb-2 mr-sm-2 p-2 ms-2"
        value={todo.from_date}
        name='from_date'
        onChange={handleChange}
				min={new Date().toISOString().split("T")[0]}
      />
			<label className='ms-4'>To date :</label>
      <input
			 className=" mb-2 mr-sm-2 p-2 ms-3"
        type='date'
        value={todo.to_date}
        name='to_date'
        onChange={handleChange}
				 min={new Date().toISOString().split("T")[0]}
      />
      <button type='submit' className='btn btn-primary mb-2 p-3 d-block' disabled={submitDisabled}>
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
