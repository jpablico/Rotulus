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
			<h2 class = 'task-name'>${element.name}</h2>
			<p>${element.description}</p>
			<p>${element.date}</p>
			<p>${element.priority}</p>
		`;
		tasksContainer.appendChild(taskCard);
	});
}

export { Main, createTask };