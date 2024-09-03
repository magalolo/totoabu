import React from 'react';
import "./todoItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCircleExclamation, faTrash,  } from '@fortawesome/free-solid-svg-icons';
import { toggleImportant, setKey } from '../../redux/redux';
import { useDispatch } from 'react-redux';


const TodoItem = ({ item, status, deleteTodo, findCorrect }) => {
  const dispatch = useDispatch()
  const toogle = (id) => {
    dispatch(toggleImportant({id}))
  }

  const comp = (id) => {
    dispatch(setKey({id}))
  }
  return (
    <div className="todo-item">
      <div className="todo-item-left">
        <input
          type="checkbox"
          disabled={status === "trash"}
          onClick={() => toogle(item.id)}

 
          checked={item.important}
        />
        <p className="todo-item-text">{item.text}</p>
      </div>

      <div className="todo-item-right">

            <button onClick={() => findCorrect(item.id)}>
              <FontAwesomeIcon icon={faPen} /> 
            </button>

            <button
              className={item.completed ? "important" : ""}
              onClick={() => comp(item.id)}
            >
              <FontAwesomeIcon icon={faCircleExclamation} />
            </button> 

            <button onClick={() => deleteTodo(item.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
  

      </div>
    </div>
  );
};

export default TodoItem;
