import React from 'react';
import '../../styles/style.scss';

function modalTask() {
	const dialog = document.createElement('dialog');
	dialog.id = 'modalTask';
	dialog.innerHTML = `
		<form class = 'modal-form'>
			<section class ='modal-upper'>
				<h3 class='modal-task-title'>Add Task</h3>
				<span class='material-symbols-outlined'>close</span>
			</section>
			<section class = 'modal-middle'>
				<label for = 'task'>Task name</label>
				<input type = 'text' id = 'task' name = 'task' required>

				<label for = 'description'>Description</label>
				<textarea id = 'description' name = 'description' required></textarea>

				<label for = 'date'>Due date</label>
				<input type = 'date' id = 'date' name = 'date' required>

				<label for = 'priority'>Priority</label>
				<select id = 'priority' name = 'priority' required>
					<option value = 'low'>Low</option>
					<option value = 'medium'>Medium</option>
					<option value = 'high'>High</option>
				</select>

				<label for = 'label'>Label</label>
				<select id = 'label' name = 'label' required>
					<!-- Label selection will be inserted here -->
				</select>
				
			</section>
			<section class = 'modal-lower'>
				<button type = 'button' class = 'cancel-task-btn'>Cancel</button>
				<button type = 'submit' class = 'add-task-btn'>Add Task</button>
			</section>
		</form>
	`;
	document.body.appendChild(dialog);
}

function labelSelection(labels) {
	const labelSelect = document.getElementById('label');
	labelSelect.innerHTML = '';
	labels.forEach(label => {
		const option = document.createElement('option');
		option.value = label.Label;
		option.textContent = label.Label;
		labelSelect.appendChild(option);
	});
}

function taskForm(tasks) {
	const form = document.querySelector('.modal-form');
	form.addEventListener('submit', function(event) {
		event.preventDefault();
		const task = document.getElementById('task').value;
		const description = document.getElementById('description').value;
		const date = document.getElementById('date').value;
		const priority = document.getElementById('priority').value;
		const label = document.getElementById('label').value;

		tasks.push({
			name: task,
			description: description,
			date: date,
			priority: priority,
			label: label
		});
		console.log(taskData);
	});
}



export { modalTask, labelSelection, taskForm };