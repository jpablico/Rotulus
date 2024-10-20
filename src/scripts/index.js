import '../styles/style.scss'; 

import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { modalTask, labelSelection, taskForm, modalLabel } from './components/Modal.js'; // Import populateHeaderNav
import { labelsPermanent, labelsRemovable, tasks } from './data/data.js';
import { Header, populateHeaderNav } from './components/Header.js';

// React App Component
const App = () => {
  const [activeLabel, setActiveLabel] = useState(null);

  const updateComponent = (label) => {
    console.log(`Updating component with label: ${label}`);
    setActiveLabel(label);
    // Add any other logic here to update when a label is clicked
  };

  useEffect(() => {
    // This runs once the component is mounted
    modalTask();
    modalLabel(labelsRemovable);
    labelSelection(labelsPermanent, labelsRemovable);
    taskForm(tasks);

    // Populate header navigation list and pass updateComponent function
    populateHeaderNav(labelsPermanent, labelsRemovable);

    const modalLabelEl = document.getElementById('modalLabel');
    if (modalLabelEl) {
      modalLabelEl.showModal();
    }

    // If you need to show the task modal as well
    // const modalTaskEl = document.getElementById('modalTask');
    // if (modalTaskEl) {
    //   modalTaskEl.showModal();
    // }
  }, []); // Empty dependency array means this runs only once when the component is mounted

  return (
    <>
      <Header />
      <div>
        {activeLabel && <p>Currently Selected Label: {activeLabel}</p>}
      </div>
    </>
  );
};

// Render React App
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);