import {create} from "zustand";

const useTodoStore = create((set) => ({
  tasks: [],
  addTask: (text) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), text, completed: false }],
    })),

  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));

export default useTodoStore;
