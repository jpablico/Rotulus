import '../../styles/style.scss';
import React from 'react';


function modalTask() {
	const dialog = document.createElement('dialog');
	dialog.id = 'modalTask';
	dialog.innerHTML = `
		<form class = 'modal-form'>
			<section class ='modal-upper'>
				<h1 class='modal-task-title'>Add Task</h1>
				<span class='material-symbols-outlined'>close</span>
			</section>
			
			<input type = 'text' id = 'task' name = 'task' required>


			<button type = 'submit'>Add Task</button>
		</form>
	`;
	document.body.appendChild(dialog);
}


export { modalTask }