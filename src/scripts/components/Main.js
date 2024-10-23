import React from "react";
import '../../styles/style.scss';

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
				<p class = 'task-priority'>${element.priority}</p>
			</div>
			<div class = 'task-lower'>
				<span class='material-symbols-outlined empty-btn'>radio_button_unchecked</span>
			</div> 
		`;
		tasksContainer.appendChild(taskCard);
		const chevron = taskCard.querySelector('.task-chevron');
		chevron.addEventListener('click', (event) => {
			expandTask(taskCard);
			console.log(taskCard);
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

export { Main, createTask };