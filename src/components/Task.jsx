import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleComplete } from '../redux/tasksSlice';
import { ListItem, ListItemText, Checkbox, IconButton } from '@mui/material';
import EditTaskModal from './EditTaskModal';
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggleComplete = () => {
    dispatch(toggleComplete(task.id));
  };

  return (
    <div>
      <ListItem>
        <Checkbox checked={task.completed} onChange={handleToggleComplete} />
        <ListItemText
          primary={task.text}
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        />
        <IconButton onClick={() => setIsEditing(true)}>
          <MdModeEditOutline />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <MdDelete/>
        </IconButton>
      </ListItem>
      <EditTaskModal open={isEditing} onClose={() => setIsEditing(false)} task={task} />
    </div>
  );
};

export default Task;
