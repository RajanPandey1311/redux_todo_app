import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container, Typography } from '@mui/material';

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" style={{ textAlign: 'center', margin: '20px 0' }}>
          React To-Do App
        </Typography>
        <TaskInput />
        <TaskList />
      </Container>
    </Provider>
  );
};

export default App;
