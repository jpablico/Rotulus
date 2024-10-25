import React from "react";
import '../../styles/style.scss';
import { labelsPermanent, labelsRemovable, tasksCompleted, tasks } from '../data/data.js';
import { populateHeaderNav, updateTasks } from "./Header.js";
import { saveTasksToLocalStorage, saveCompletedTasksToLocalStorage, loadTasksFromLocalStorage } from "../data/storage.js";

function Main() {
  return (
	<main id = 'main-container'>
	
	</main>
  );
}

function createTask(array) {
	array = array || [];
	const tasksContainer = document.getElementsByClassName('tasks-container')[0];
	tasksContainer.innerHTML = '';

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
    let storedTasks = loadTasksFromLocalStorage();
    let combinedTasks = [...tasks, ...storedTasks];  

    let taskToComplete = combinedTasks.find(task => task.name === taskName);
    if (taskToComplete) {
        taskToComplete.label = 'Completed';  
        tasksCompleted.push(taskToComplete);  

        let updatedTasks = combinedTasks.filter(task => task.name !== taskName);

        let newHardcodedTasks = updatedTasks.filter(task => tasks.some(t => t.name === task.name));
        let newStoredTasks = updatedTasks.filter(task => !tasks.some(t => t.name === task.name));

        tasks.splice(0, tasks.length, ...newHardcodedTasks);

        saveTasksToLocalStorage(newStoredTasks);
        saveCompletedTasksToLocalStorage(tasksCompleted);

        updateTasks('All', document.getElementById('main-container'), updatedTasks);  
        createTask(updatedTasks);  
    }
}

function removeTasks(taskName) {
    let storedTasks = loadTasksFromLocalStorage();
    let combinedTasks = [...tasks, ...storedTasks];

    let updatedTasks = combinedTasks.filter(task => task.name !== taskName);

    let newHardcodedTasks = updatedTasks.filter(task => tasks.some(t => t.name === task.name));
    let newStoredTasks = updatedTasks.filter(task => !tasks.some(t => t.name === task.name));

    tasks.splice(0, tasks.length, ...newHardcodedTasks);

    saveTasksToLocalStorage(newStoredTasks);

    updateTasks('All', document.getElementById('main-container'), updatedTasks);  
    createTask(updatedTasks);  
}
export { Main, createTask, completeTasks};