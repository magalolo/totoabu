import './form.css';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import {addTodo} from '../../redux/redux'

const TodoForm = ({ status, setStatus }) => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const addTodoBtn = () => dispatch(addTodo({text}))

  // const addTodo = () => {
  //   if (text.trim()) {
  //     setData([
  //       {
  //         completed: false,
  //         important: false,
  //         deleted: false,
  //         correct: false,
  //         id: data.length > 0 ? data[0].id + 1 : 1,
  //         text,
  //       },
  //       ...data.map(item => ({ ...item, correct: false })),
  //     ]);
  //     setText('');
  //     setStatus('all');
  //   }
  // };

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={e => setText(e.target.value)}
        disabled={status === 'trash'}
        autoFocus
        // onKeyDown={e => {
        //   if (e.key === 'Enter') addTodo();
        // }}
      />
        <button onClick={addTodoBtn}>Add</button>
    </div>
  );
};

export default TodoForm;
