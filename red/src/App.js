
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";
import { selectDarkMode, toggleDarkMode } from "./redux/themeSlice";
const App = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);
	return (
  <div >
      <div className="container-fluid pt-1 pb-2 
      " style={{ background: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
      
      <div className='container p-4 mt-5'>
			<div className="d-flex justify-content-between">
      <h1>My Todo List</h1>
      <button className="bg-transparent border-0 rounded" onClick={() => dispatch(toggleDarkMode())}>
        {darkMode? <div className=" fs-1"><FaMoon style={{ color: '#fff' }}/></div> : <div className="fs-1"><FaSun  style={{ color: '#333' }}/></div>}
      </button>
      </div>
			<div className="d-flex justify-content-between ">
      <AddTodoForm/>
    <div className="mt-5">
    <TotalCompleteItems />
    </div>
      </div>
			<TodoList />
		
		</div>
     
    </div>
		
  </div>
	);
};

export default App;
