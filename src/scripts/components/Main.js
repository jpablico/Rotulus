import React from "react";
import '../../styles/style.scss';
import { labelsPermanent, labelsRemovable, tasksCompleted, tasks } from '../data/data.js';
import { populateHeaderNav } from "./Header.js";
import { storedLabelsPermanent, storedLabelsRemovable } from "../data/storage.js";

function Main() {
  return (
	<main id = 'main-container'>
	
	</main>
  );
}

function createTask(array) {
	const tasksContainer = document.getElementsByClassName('tasks-container')[0];

	array.forEach(element => {
		const taskCard = document.createElement('div');
		taskCard.classList.add('task-card');
		taskCard.innerHTML = `
			<div class = 'task-upper'>
				<h2 class = 'task-name'>${element.name}</h2>
				<span class='material-symbols-outlined task-chevron'>keyboard_arrow_up</span>
			</div>
			<div class = 'task-middle'>
				<p class = 'task-description'>${element.description}</p>
				<p class = 'task-date'>${element.date}</p>
				<p class = 'task-priority task-priority-${element.priority}'>${element.priority}</p>
			</div>
			<div class = 'task-lower'>
				<span class='material-symbols-outlined cancel-btn'>cancel</span>
				<span class='material-symbols-outlined check-btn'>check_circle</span>
			</div> 
		`;
		tasksContainer.appendChild(taskCard);

		const chevron = taskCard.querySelector('.task-chevron');
		chevron.addEventListener('click', (event) => {
			expandTask(taskCard);
   		 });

		const cancelBtn = taskCard.querySelector('.cancel-btn');
		cancelBtn.addEventListener('click', () => {
			removeTasks(element.name);
		});
	
		const checkBtn = taskCard.querySelector('.check-btn');
		checkBtn.addEventListener('click', () => {
			completeTasks(element.name); 
		});
	});
}

function expandTask(taskCard) {
	const taskDescription = taskCard.querySelector('.task-description');
	const taskDate = taskCard.querySelector('.task-date');
	const taskPriority = taskCard.querySelector('.task-priority');
	const taskChevron = taskCard.querySelector('.task-chevron');
	taskDescription.classList.toggle('expanded');
	taskDate.classList.toggle('expanded');
	taskPriority.classList.toggle('expanded');
	taskChevron.classList.toggle('expanded');
}


function completeTasks(taskName) {
	tasks.forEach((task, index) => {
		if (task.name === taskName) {
			task.label = 'Completed'; 
			tasksCompleted.push(task);
			tasks.splice(index, 1);
		}
	});
	populateHeaderNav(labelsPermanent, labelsRemovable, storedLabelsPermanent, storedLabelsRemovable);
	
}
function removeTasks(taskName) {
	tasksCompleted.forEach((task, index) => {
		if (task.name === taskName) {
			tasksCompleted.splice(index, 1); 
		}
	});
	populateHeaderNav(labelsPermanent, labelsRemovable, storedLabelsPermanent, storedLabelsRemovable);
}

export { Main, createTask, completeTasks};