import React from 'react';
import '../../styles/style.scss';
import { labelsPermanent  } from '../data/data';
import { storedLabelsPermanent, storedLabelsRemovable, updateStorage } from '../data/storage';
import { populateHeaderNav } from './Header';
import { createTask, clearTasks } from './Main';

function modalTask() {
	const dialog = document.createElement('dialog');
	dialog.id = 'modalTask';
	dialog.innerHTML = `
		<form class='task-modal-form'>
			<section class='modal-upper'>
				<h3 class='modal-task-title'>Add Task</h3>
				<span class='material-symbols-outlined cancel-task-btn'>close</span>
			</section>
			<section class='modal-middle'>
				<label for='task'>Task name</label>
				<input type='text' id='task' name='task' required>

				<label for='description'>Description</label>
				<textarea id='description' name='description' required></textarea>

				<label for='date'>Due date</label>
				<input type='date' id='date' name='date' required>

				<label for='priority'>Priority</label>
				<select id='priority' name='priority' required>
					<option value='low'>Low</option>
					<option value='medium'>Medium</option>
					<option value='high'>High</option>
				</select>

				<label for='taskLabel'>Label</label>
				<select id='taskLabel' name='taskLabel' required>
					<!-- Label selection will be inserted here -->
				</select>
				
			</section>
			<section class='modal-lower'>
				<button type='submit' class='add-task-btn'>Add Task</button>
			</section>
		</form>
	`;
	document.body.appendChild(dialog);
}

function labelSelection(labelsPermanent, labelsRemovable) {
	const labelSelect = document.getElementById('taskLabel');
	labelSelect.innerHTML = '';

		labelsPermanent.forEach(label => {
			const option = document.createElement('option');
			option.value = label.Label;
			option.textContent = label.Label;
			labelSelect.appendChild(option);
		});
		labelsRemovable.forEach(label => {
			const option = document.createElement('option');
			option.value = label.Label;
			option.textContent = label.Label;
			labelSelect.appendChild(option);
		});
	
}

function taskForm(tasks) {
	const form = document.querySelector('.task-modal-form');
	const modalTask = document.getElementById('modalTask');
	form.addEventListener('submit', function(event) {
		event.preventDefault();
		const task = document.getElementById('task').value;
		const description = document.getElementById('description').value;
		const date = document.getElementById('date').value;
		const priority = document.getElementById('priority').value;
		const label = document.getElementById('taskLabel').value;

		tasks.push({
			name: task,
			description: description,
			date: date,
			priority: priority,
			label: label
		});
		clearTasks();
		createTask(tasks);
		updateStorage(); 
		modalTask.close();
	});
}

function modalLabel(labelsRemovable, callback) {
	const dialog = document.createElement('dialog');
	dialog.id = 'modalLabel';
	dialog.innerHTML = `
	  <form class='label-modal-form'>  
		<section class='modal-upper'>
		  <h3 class='modal-task-title'>Add Label</h3>
		  <span class='material-symbols-outlined cancel-label-btn'>close</span>
		</section>
		<section class='modal-middle'>
		  <label for='newLabel'>Label name</label>
		  <input type='text' id='newLabel' name='newLabel' required>
		</section>
		<section class='modal-lower'>
		  <button type='submit' class='add-label-btn'>Add Label</button>
		</section>
	  </form>
	`;
	
	document.body.appendChild(dialog);
  
	const form = dialog.querySelector('.label-modal-form');
	const modalLabel = document.getElementById('modalLabel');
	if (form) {
	  form.addEventListener('submit', function(event) {
		event.preventDefault();
		const label = document.getElementById('newLabel').value;
		  labelsRemovable.push({
			Label: label
		  });
		  updateStorage();
		  labelSelection(labelsPermanent, labelsRemovable);
		  populateHeaderNav(labelsPermanent, labelsRemovable);
		  modalLabel.close();
		});
	}
	if (typeof callback === 'function') {
	  callback();
	}
}

function labelForm(labelsRemovable) {
	const form = document.querySelector('.label-modal-form');
	form.addEventListener('submit', function(event) {
		event.preventDefault();
		const label = document.getElementById('newLabel').value;
			labelsRemovable.push({
				Label: label
			});
			updateStorage();
			populateHeaderNav(labelsPermanent, labelsRemovable);
		
	});
}

function openModals() {
	document.body.addEventListener('click', (event) => {
		const target = event.target;
		if (target.id === 'addTaskButton') {
			const modalTask = document.getElementById('modalTask');
			modalTask.showModal();
		} else if (target.id === 'addLabelButton') {
			const modalLabel = document.getElementById('modalLabel');
			modalLabel.showModal();
		}
	});
}

function closeModals() {
	document.body.addEventListener('click', (event) => {
		const target = event.target;
		if (target.classList.contains('cancel-task-btn')) {
			const modalTask = document.getElementById('modalTask');
			modalTask.close();
		} else if (target.classList.contains('cancel-label-btn')) {
			const modalLabel = document.getElementById('modalLabel');
			modalLabel.close();
		}
	});
}

export { modalTask, labelSelection, taskForm, modalLabel, labelForm, openModals, closeModals };