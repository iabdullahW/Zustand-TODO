import React, { useState } from 'react';
import useTodoStore from '../store/useTodoStore';

const TodoList = () => {
  const { tasks, addTask, toggleTask, removeTask } = useTodoStore();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="border border-gray-300 rounded-l px-3 py-2 flex-grow"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-r"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`p-2 border rounded flex justify-between items-center ${
              task.completed ? 'bg-green-200' : 'bg-red-100'
            }`}
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`flex-grow cursor-pointer ${
                task.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              {task.text}
            </span>
            <button
              onClick={() => removeTask(task.id)}
              className="text-red-500 hover:text-red-700 ml-2"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
