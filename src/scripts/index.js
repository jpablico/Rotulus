import '../styles/style.scss'; 

import React from 'react';
import { createRoot } from 'react-dom/client';


import { modalTask, labelSelection, taskForm, modalLabel, labelForm } from './components/Modal.js';
import { labels, tasks  } from './data/data.js';
import { Header } from './components/Header.js';


const container = document.getElementById('app');
const root = createRoot(container);
root.render(
		<>
			<Header />
			
		</>
	);
modalTask();
modalLabel();
labelSelection(labels);
taskForm(tasks);
labelForm(labels);


document.addEventListener('DOMContentLoaded', function() {
	const modalTask = document.getElementById('modalTask');
	const modalLabel = document.getElementById('modalLabel');

	//modalLabel.showModal();
	//modalTask.showModal();
	}
);
