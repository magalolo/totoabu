import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './redux';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
