import { GlobalStyles } from './App.style.js';
import React from 'react';
import { TasksPage } from '../pages/index.ts';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <TasksPage />
    </>
  )
};

export default App;