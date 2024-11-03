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
	const labelsPermanent = JSON.parse(localStorage.getItem('labelsPermanent'));
	let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
	let storedTasksCompleted = JSON.parse(localStorage.getItem('tasksCompleted')) || [];
	let storedLabelsRemovable = JSON.parse(localStorage.getItem('labelsRemovable')) || [];
	return { labelsPermanent, storedTasks, storedTasksCompleted, storedLabelsRemovable };
}

function updateStorage() {
	localStorage.setItem('labelsPermanent', JSON.stringify(labelsPermanent));
	localStorage.setItem('tasks', JSON.stringify(storedTasks));
	localStorage.setItem('tasksCompleted', JSON.stringify(storedTasksCompleted));
	localStorage.setItem('labelsRemovable', JSON.stringify(storedLabelsRemovable));
}




/*
localStorage.setItem('labelsPermanent', JSON.stringify(labelsPermanent));
const storedLabelsPermanent = JSON.parse(localStorage.getItem('labelsPermanent'));

localStorage.setItem('tasks', JSON.stringify(tasks));
let storedTasks = JSON.parse(localStorage.getItem('tasks'));

localStorage.setItem('tasksCompleted', JSON.stringify(tasksCompleted));
let storedTasksCompleted = JSON.parse(localStorage.getItem('tasksCompleted'));

localStorage.setItem('labelsRemovable', JSON.stringify(labelsRemovable));
let storedLabelsRemovable = JSON.parse(localStorage.getItem('labelsRemovable'));
*/
/*
console.log('Stored tasks:', JSON.stringify(storedTasks, null, 2));
console.log('Stored tasks completed:', JSON.stringify(storedTasksCompleted, null, 2));
console.log('Stored labels removable:', JSON.stringify(storedLabelsRemovable, null, 2));
*/
function clearLocalStorage() {
	localStorage.clear();
	console.log('Local storage cleared');
}

export { storedLabelsPermanent, storedTasks, storedTasksCompleted, storedLabelsRemovable, clearLocalStorage };