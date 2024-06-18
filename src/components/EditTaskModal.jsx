import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/tasksSlice';
import { Modal, TextField, Button } from '@mui/material';

const EditTaskModal = ({ open, onClose, task }) => {
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleEditTask = () => {
    if (newText.trim()) {
      dispatch(editTask({ id: task.id, text: newText }));
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ padding: '20px', backgroundColor: 'white', margin: '100px auto', width: '300px' }}>
        <TextField
          label="Edit Task"
          variant="outlined"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleEditTask}
          style={{ marginTop: '10px' }}
        >
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default EditTaskModal;
