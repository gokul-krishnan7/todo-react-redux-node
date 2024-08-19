import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosAsync } from '../redux/todoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);

	useEffect(() => {
		dispatch(getTodosAsync());
	}, [dispatch]);

	return (
		<ul className='list-group'>
			{todos.map((todo, index) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} from_date={todo.from_date} to_date={todo.to_date} />
			))}
		</ul>
	);
};

export default TodoList;
