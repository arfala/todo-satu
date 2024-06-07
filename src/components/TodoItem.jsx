import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <p className="text-xl font-semibold text-gray-800">{todo.title}</p>
      <p className="text-sm text-gray-600">{todo.date}</p>
    </div>
  );
}

export default TodoItem;