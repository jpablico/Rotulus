import '../styles/style.scss'; 

import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { modalTask, labelSelection, taskForm, modalLabel, openModals, closeModals } from './components/Modal.js'; // Import populateHeaderNav
import { labelsPermanent, labelsRemovable, tasks } from './data/data.js';
import { storedLabelsPermanent, storedTasks, storedTasksCompleted, storedLabelsRemovable, clearLocalStorage, localStorageAvailable  } from './data/storage.js';
import { Header, populateHeaderNav } from './components/Header.js';
import { Main } from './components/Main.js';

const App = () => {
  useEffect(() => {
    modalTask();
    modalLabel(labelsRemovable, storedLabelsPermanent);
    labelSelection(labelsPermanent, labelsRemovable);
    taskForm(tasks, storedTasks);

    populateHeaderNav(labelsPermanent, labelsRemovable, storedLabelsPermanent, storedLabelsRemovable);
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

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);