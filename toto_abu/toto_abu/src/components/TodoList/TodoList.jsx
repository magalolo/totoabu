import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './todoList.css';
import FilterButtons from '../FilterButtons/FilterButtons';
import CorrectItem from '../TodoItem/CorrectItem';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, setKey, setCorrect, editText } from '../../redux/redux';

const TodoList = ({ status, setStatus }) => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  
  const deleteTodo = id => {
    dispatch(removeTodo({ id }));
  };

  const foundKey = (id) => {
    dispatch(setKey({ id }));
  };

  const foundCorrect = (id) => {
    dispatch(setCorrect({ id }));
  };

  const correctFunc = (text, id) => {
    dispatch(editText({ text, id }));
  };

  return (
    <div className="todo-list">
      <FilterButtons setStatus={setStatus} status={status} />
      {todos.map(item =>
        item.correct ? (
          <CorrectItem
            correctFunc={correctFunc}
            setKey={foundKey}
            item={item}
            key={item.id}
          />
        ) : (
          <TodoItem
            deleteTodo={deleteTodo}
            status={status} 
            setKey={foundKey}
            key={item.id}
            item={item}
            findCorrect={foundCorrect}
          />
        )
      )}
    </div>
  );
};

export default TodoList;
