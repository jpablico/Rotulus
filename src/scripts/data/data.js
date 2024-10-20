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
	}
];

export { labelsPermanent, labelsRemovable, tasks };