import React, { useState } from 'react';

export default function Todos() {
  const [todos, setTodos] = useState([]); // yapılacaklar listesi

  const handleAddTodo = e => {
    e.preventDefault();
    const newTodo = e.target.elements.todo.value;
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      e.target.reset();
    }
  };

  const handleToggleTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleRemoveTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className='widget-todos container'>
      <h2>Yapılacaklar Listesi</h2>
      <form onSubmit={handleAddTodo}>
        <input type='text' name='todo' placeholder='Yapılacak ekle...' />
        <button type='submit'>Ekle</button>
      </form>
      <ul className='todos'>
        {todos.map(todo => (
          <li
            key={todo.id}
            className={todo.completed ? 'completed' : ''}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
