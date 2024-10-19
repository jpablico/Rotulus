import '../styles/style.scss'; 

import React from 'react';
import { createRoot } from 'react-dom/client';


import { modalTask, labelSelection, taskForm } from './components/Modal.js';
import { labels, tasks  } from './data/data.js';


const container = document.getElementById('app');
const root = createRoot(container);
root.render(
		<>
			<h1>Hello, React!</h1>
			
		</>
	);
modalTask();
labelSelection(labels);
taskForm(tasks);

document.addEventListener('DOMContentLoaded', function() {
	const modal = document.getElementById('modalTask');
	modal.showModal();
	}
);
