import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice.js';
import todosReducer from './todoSlice'; // Assuming you have a todos slice


const store = configureStore({
  reducer: {
    theme: themeReducer, // Make sure this line exists
    todos: todosReducer, // Your other reducers
  },
});

export default store;
