import '../styles/style.scss'; 
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { modalTask, labelSelection, taskForm, modalLabel, openModals, closeModals } from './components/Modal.js';
import { labelsPermanent as defaultLabelsPermanent, labelsPermanent, tasksCompleted, tasks } from './data/data.js';
import { Header, populateHeaderNav, updateTasks } from './components/Header.js';
import { Main } from './components/Main.js';
import { loadLabelsFromLocalStorage, loadTasksFromLocalStorage, loadCompletedTasksFromLocalStorage, saveLabelsToLocalStorage } from './data/storage.js';

const App = () => {
  useEffect(() => {

    const tasksFromStorage = loadTasksFromLocalStorage();
    const completedTasksFromStorage = loadCompletedTasksFromLocalStorage();
    const { labelsRemovable } = loadLabelsFromLocalStorage();

    const combinedTasks = [...tasks, ...tasksFromStorage];
    
    tasksCompleted.splice(0, tasksCompleted.length, ...completedTasksFromStorage);

    modalTask();
    modalLabel(labelsRemovable);
    taskForm(combinedTasks);
    updateTasks('All', combinedTasks);
    labelSelection(labelsPermanent, labelsRemovable);
    populateHeaderNav(labelsPermanent, labelsRemovable, combinedTasks);

    openModals();
    closeModals();

  }, []); 

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

// Render React App
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);