import React, { useState } from 'react';
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [status, setStatus] = useState('all');

  return (
    <div>
      <Header />
      <TodoForm />
      <TodoList status={status} setStatus={setStatus} /> 
    </div>
  );
}

export default App;
