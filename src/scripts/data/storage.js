import { labelsPermanent, labelsRemovable, tasks, tasksCompleted } from "./data";

localStorage.setItem('labelsPermanent', JSON.stringify(labelsPermanent));
const storedLabelsPermanent = JSON.parse(localStorage.getItem('labelsPermanent'));

localStorage.setItem('tasks', JSON.stringify(tasks));
let storedTasks = JSON.parse(localStorage.getItem('tasks'));

localStorage.setItem('tasksCompleted', JSON.stringify(tasksCompleted));
let storedTasksCompleted = JSON.parse(localStorage.getItem('tasksCompleted'));

localStorage.setItem('labelsRemovable', JSON.stringify(labelsRemovable));
let storedLabelsRemovable = JSON.parse(localStorage.getItem('labelsRemovable'));

console.log('Stored tasks:', JSON.stringify(storedTasks, null, 2));
console.log('Stored tasks completed:', JSON.stringify(storedTasksCompleted, null, 2));
console.log('Stored labels removable:', JSON.stringify(storedLabelsRemovable, null, 2));

function clearLocalStorage() {
	localStorage.clear();
	console.log('Local storage cleared');
}

export { storedLabelsPermanent, storedTasks, storedTasksCompleted, storedLabelsRemovable, clearLocalStorage };