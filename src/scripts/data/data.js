const labelsPermanent = [
	{ Label: 'All' },
	{ Label: 'Completed' },
	{ Label: 'Overdue' }
];

let labelsRemovable = [
	{ Label: 'Work' },
	{ Label: 'Personal' },
	{ Label: 'Shopping' }
];

let tasks = [
	{
		name: 'Complete Rotulus app',
		description: 'Finish the Rotulus app by the end of the week',
		date: '2024-10-28',
		priority: 'High',
		label: 'All'
	},
	{
		name: 'Check javascript for errors',
		description: 'Check the javascript code for errors and fix them',
		date: '2024-10-28',
		priority: 'Medium',
		label: 'All'
	},
	{
		name: 'Study React',
		description: 'Study React for 1 hour',
		date: '2024-10-28',
		priority: 'Low',
		label: 'All'
	},
	{
		name: 'Learn Redux',
		description: 'Study Redux for 1 hour',
		date: '2024-10-28',
		priority: 'Low',
		label: 'Personal'
	},
	{
		name: 'Go workout',
		description: 'Workout for 1 hour',
		date: '2024-10-28',
		priority: 'Low',
		label: 'Personal'
	},
	{
		name: 'Buy groceries',
		description: 'Buy milk, eggs, and bread',
		date: '2024-10-29',
		priority: 'Medium',
		label: 'Shopping'
	},
	{
		name: 'Prepare presentation',
		description: 'Prepare slides for the Monday meeting',
		date: '2024-10-30',
		priority: 'High',
		label: 'Work'
	},
	{
		name: 'Read a book',
		description: 'Read 20 pages of a novel',
		date: '2024-10-31',
		priority: 'Low',
		label: 'Personal'
	},
	{
		name: 'Clean the house',
		description: 'Vacuum and dust all rooms',
		date: '2024-10-31',
		priority: 'Medium',
		label: 'Personal'
	},
	{
		name: 'Test overdue task',
		description: 'Date is in the past',
		date: '2024-09-31',
		priority: 'Medium',
		label: 'Personal'
	}
];

let tasksCompleted = [
	{
		name: 'Write a test task',
		description: 'Create a fake task to test the app',
		date: '2024-10-28',
		priority: 'High',
		label: 'Completed'
	}
];

function pullStorage() {
	const storedLabelsRemovable = JSON.parse(localStorage.getItem('labelsRemovable'));
	const storedTasks = JSON.parse(localStorage.getItem('tasks'));
	const storedTasksCompleted = JSON.parse(localStorage.getItem('tasksCompleted'));

	if (storedLabelsRemovable) labelsRemovable = storedLabelsRemovable;
	if (storedTasks) tasks = storedTasks;
	if (storedTasksCompleted) tasksCompleted = storedTasksCompleted;
}

export { labelsPermanent, labelsRemovable, tasks, tasksCompleted, pullStorage };