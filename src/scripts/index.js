import '../styles/style.scss'; 

import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { modalTask, labelSelection, taskForm, modalLabel, openModals, closeModals } from './components/Modal.js'; // Import populateHeaderNav
import { labelsPermanent, labelsRemovable, tasks, pullStorage } from './data/data.js';
import { updateStorage } from './data/storage.js';
import { Header, populateHeaderNav } from './components/Header.js';
import { Main } from './components/Main.js';

const App = () => {
  useEffect(() => {
    pullStorage();
    modalTask();
    modalLabel(labelsRemovable);
    labelSelection(labelsPermanent, labelsRemovable);
    taskForm(tasks);

    populateHeaderNav(labelsPermanent, labelsRemovable);
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