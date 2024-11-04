import '../styles/style.scss'; 

import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { modalTask, labelSelection, taskForm, modalLabel, openModals, closeModals } from './components/Modal.js'; // Import populateHeaderNav
import { labelsPermanent, labelsRemovable, tasks } from './data/data.js';
import { storedLabelsPermanent, storedTasks, storedTasksCompleted, storedLabelsRemovable, clearLocalStorage, localStorageAvailable, updateStorage, LoadStorage } from './data/storage.js';
import { Header, populateHeaderNav } from './components/Header.js';
import { Main } from './components/Main.js';

const App = () => {
  useEffect(() => {
    const { labelsPermanent: loadedLabelsPermanent, storedTasks: loadedTasks, storedTasksCompleted: loadedTasksCompleted, storedLabelsRemovable: loadedLabelsRemovable } = LoadStorage();

    console.log('Loaded Labels Permanent:', loadedLabelsPermanent);
    console.log('Loaded Labels Removable:', loadedLabelsRemovable);
    console.log('Loaded Tasks:', loadedTasks);
    console.log('Loaded Tasks Completed:', loadedTasksCompleted);

    const finalLabelsPermanent = loadedLabelsPermanent.length ? loadedLabelsPermanent : labelsPermanent;
    const finalLabelsRemovable = loadedLabelsRemovable.length ? loadedLabelsRemovable : labelsRemovable;
    const finalTasks = loadedTasks.length ? loadedTasks : tasks;
    const finalTasksCompleted = loadedTasksCompleted.length ? loadedTasksCompleted : tasksCompleted;

    modalTask();
    modalLabel(finalLabelsRemovable, finalLabelsPermanent);
    labelSelection(finalLabelsPermanent, finalLabelsRemovable);
    taskForm(finalTasks, finalTasks);

    populateHeaderNav(finalLabelsPermanent, finalLabelsRemovable, finalLabelsPermanent, finalLabelsRemovable);
    openModals();
    closeModals();
    updateStorage();
  }, []); 

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);