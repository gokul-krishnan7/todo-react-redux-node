import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoAsync, toggleCompleteAsync } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed,from_date,to_date }) => {
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(toggleCompleteAsync({ id, completed: !completed }));
	};

	
	const handleDeleteClick = () => {
		dispatch(deleteTodoAsync({ id }));
	};


	const startDate = new Date(from_date)
	const todate = new Date(to_date)

	const numberOfDays = todate.getTime() - startDate.getTime();
	const differenceInDays =  Math.floor( numberOfDays / (1000 * 3600 * 24));


	
	// fromDate.setDate(fromDate.getDate() + 1);
	// console.log(diffDays);

	

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}` }>
			<div className='d-flex justify-content-between' onClick={handleCheckboxClick} type="check-box">
				<span  className='d-flex align-items-center' >
					<input
						type='checkbox'
						className='mr-3 p-5'
						checked={completed}
					
					></input>
				<span >	{title} </span>
				{/* <span>{from_date}</span>
				<span>{to_date}</span> */}
				<span className='ms-5'>{differenceInDays} days</span>
				</span>
				<button onClick={handleDeleteClick} className='btn btn-danger'>
					Delete
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
