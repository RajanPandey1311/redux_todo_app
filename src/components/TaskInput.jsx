import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { TextField, Button } from '@mui/material';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <TextField
        label="New Task"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTask}
        style={{ marginTop: '10px' }}
      >
        Add Task
      </Button>
    </div>
  );
};

export default TaskInput;
