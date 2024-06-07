import React, { useState } from 'react';
import Todos from './components/Todos'; // Menggabungkan impor dari create_todos_and_todoItem_component

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ]);

  console.log(todos);

  return (
    <div>
      <h1>My Todo List</h1>
      {/* Menggunakan komponen Todos untuk merender daftar todos */}
      <Todos todos={todos} />
    </div>
  );
}

export default App;