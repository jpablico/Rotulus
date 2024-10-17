import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/style.scss'; 

import { modalTask } from './components/Modal.js';


const container = document.getElementById('app');
const root = createRoot(container);
root.render(
		<>
			<h1>Hello, React!</h1>
			
		</>
	);
modalTask();

document.addEventListener('DOMContentLoaded', function() {
	const modal = document.getElementById('modalTask');
	modal.showModal();
	}
);
