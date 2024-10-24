function saveTasksToLocalStorage(tasks) {
	localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
function saveLabelsToLocalStorage(labelsRemovable, labelsPermanent) {
	localStorage.setItem('labelsRemovable', JSON.stringify(labelsRemovable));
	localStorage.setItem('labelsPermanent', JSON.stringify(labelsPermanent));
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
	const storedLabelsPermanent = localStorage.getItem('labelsPermanent');

	return {
		labelsRemovable: storedLabelsRemovable ? JSON.parse(storedLabelsRemovable) : [],
		labelsPermanent: storedLabelsPermanent ? JSON.parse(storedLabelsPermanent) : []
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