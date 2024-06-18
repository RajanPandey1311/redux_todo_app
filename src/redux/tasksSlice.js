import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload, completed: false });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, text } = action.payload;
      const existingTask = state.tasks.find(task => task.id === id);
      if (existingTask) {
        existingTask.text = text;
      }
    },
    toggleComplete: (state, action) => {
      const existingTask = state.tasks.find(task => task.id === action.payload);
      if (existingTask) {
        existingTask.completed = !existingTask.completed;
      }
    },
  },
});

export const { addTask, deleteTask, editTask, toggleComplete } = tasksSlice.actions;

export default tasksSlice.reducer;
