function saveTasksToLocalStorage(tasks) {
	localStorage.setItem('tasks', JSON.stringify(tasks));
	console.log('tasks', tasks);
  }
  
function saveLabelsToLocalStorage(labelsRemovable, labelsPermanent) {
	localStorage.setItem('labelsRemovable', JSON.stringify(labelsRemovable));
}

function saveCompletedTasksToLocalStorage(tasksCompleted) {
	localStorage.setItem('tasksCompleted', JSON.stringify(tasksCompleted));
}

function loadTasksFromLocalStorage() {
	const storedTasks = localStorage.getItem('tasks');

	return storedTasks ? JSON.parse(storedTasks) : [];
}

function loadLabelsFromLocalStorage() {
	const storedLabelsRemovable = localStorage.getItem('labelsRemovable');

	return {
		labelsRemovable: storedLabelsRemovable ? JSON.parse(storedLabelsRemovable) : []
	};
}

function loadCompletedTasksFromLocalStorage() {
	const storedTasksCompleted = localStorage.getItem('tasksCompleted');
	
	return storedTasksCompleted ? JSON.parse(storedTasksCompleted) : [];
}

export {
saveTasksToLocalStorage,
saveLabelsToLocalStorage,
saveCompletedTasksToLocalStorage,
loadTasksFromLocalStorage,
loadLabelsFromLocalStorage,
loadCompletedTasksFromLocalStorage
};