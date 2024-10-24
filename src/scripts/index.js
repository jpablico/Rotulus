import '../styles/style.scss'; 
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { modalTask, labelSelection, taskForm, modalLabel, openModals, closeModals } from './components/Modal.js';
import { labelsPermanent as defaultLabelsPermanent, labelsRemovable as defaultLabelsRemovable, tasks, tasksCompleted } from './data/data.js';
import { Header, populateHeaderNav } from './components/Header.js';
import { Main } from './components/Main.js';
import { loadLabelsFromLocalStorage, loadTasksFromLocalStorage, loadCompletedTasksFromLocalStorage, saveLabelsToLocalStorage } from './data/storage.js';

const App = () => {
  useEffect(() => {

    const tasksFromStorage = loadTasksFromLocalStorage();
    const completedTasksFromStorage = loadCompletedTasksFromLocalStorage();

    const { labelsPermanent, labelsRemovable } = loadLabelsFromLocalStorage();
    const updatedLabelsPermanent = labelsPermanent.length ? labelsPermanent : defaultLabelsPermanent;
    const updatedLabelsRemovable = labelsRemovable.length ? labelsRemovable : defaultLabelsRemovable;

    tasksCompleted.splice(0, tasksCompleted.length, ...completedTasksFromStorage);

    modalTask();
    modalLabel(updatedLabelsRemovable);
    labelSelection(updatedLabelsPermanent, updatedLabelsRemovable);
    taskForm(tasksFromStorage);

    populateHeaderNav(updatedLabelsPermanent, updatedLabelsRemovable);

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