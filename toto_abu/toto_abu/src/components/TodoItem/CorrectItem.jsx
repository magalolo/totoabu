import { useDispatch } from 'react-redux';
import './todoItem.css';
import { useState } from 'react';
import { setCorrect } from '../../redux/redux';

const CorrectItem = ({ item, correctFunc, setKey }) => {
  const [text, setText] = useState(item.text);

  const dispatch = useDispatch();
  const cancle = (id) => {    
    dispatch(setCorrect({id}))
  }

  return (
    <div className="todo-item-correct">
      <input
        type="text"
        className="todo-item-correct-input"
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <button
        className="todo-item-correct-btn"
        onClick={() => correctFunc(text, item.id)}
      >
        Save
      </button>
      <button
        className="todo-item-correct-btn"
        onClick={() => cancle(item.id)}
      >
        Cancel
      </button>
    </div>
  );
};

export default CorrectItem;
