import { labelsPermanent, labelsRemovable, tasks, tasksCompleted } from "./data";

let storedLabelsPermanent = JSON.parse(localStorage.getItem('labelsPermanent'));
let storedTasks = JSON.parse(localStorage.getItem('tasks'));
let storedTasksCompleted = JSON.parse(localStorage.getItem('tasksCompleted'));
let storedLabelsRemovable = JSON.parse(localStorage.getItem('labelsRemovable'));

if (localStorage.getItem('labelsPermanent') === null || localStorage.getItem('tasks') === null || localStorage.getItem('tasksCompleted') === null || localStorage.getItem('labelsRemovable') === null) {
	localStorage.setItem('labelsPermanent', JSON.stringify(labelsPermanent));
	localStorage.setItem('tasks', JSON.stringify(tasks));
	localStorage.setItem('tasksCompleted', JSON.stringify(tasksCompleted));
	localStorage.setItem('labelsRemovable', JSON.stringify(labelsRemovable));
	storedLabelsPermanent = JSON.parse(localStorage.getItem('labelsPermanent'));
	storedTasks = JSON.parse(localStorage.getItem('tasks'));
	storedTasksCompleted = JSON.parse(localStorage.getItem('tasksCompleted'));
	storedLabelsRemovable = JSON.parse(localStorage.getItem('labelsRemovable'));
}

function LoadStorage() {
	const labelsPermanent = JSON.parse(localStorage.getItem('labelsPermanent')) || [];
	const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
	const storedTasksCompleted = JSON.parse(localStorage.getItem('tasksCompleted')) || [];
	const storedLabelsRemovable = JSON.parse(localStorage.getItem('labelsRemovable')) || [];

	console.log('Local Storage - Labels Permanent:', labelsPermanent);
	console.log('Local Storage - Tasks:', storedTasks);
	console.log('Local Storage - Tasks Completed:', storedTasksCompleted);
	console.log('Local Storage - Labels Removable:', storedLabelsRemovable);

	return { labelsPermanent, storedTasks, storedTasksCompleted, storedLabelsRemovable };
}

function updateStorage() {
	localStorage.setItem('labelsPermanent', JSON.stringify(storedLabelsPermanent));
	localStorage.setItem('tasks', JSON.stringify(storedTasks));
	localStorage.setItem('tasksCompleted', JSON.stringify(storedTasksCompleted));
	localStorage.setItem('labelsRemovable', JSON.stringify(storedLabelsRemovable));
}

function clearLocalStorage() {
	localStorage.clear();
	console.log('Local storage cleared');
}

export { storedLabelsPermanent, storedTasks, storedTasksCompleted, storedLabelsRemovable, clearLocalStorage, updateStorage, LoadStorage };