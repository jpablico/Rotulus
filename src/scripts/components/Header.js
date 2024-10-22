import React from "react";
import "../../styles/style.scss";
import portraitJoshP from '../../assets/portraitJoshP.jpeg';
import { labelsPermanent, tasks } from '../data/data.js';
import { createTask } from "./Main.js";
import { labelsRemovable as importedLabelsRemovable } from "../data/data.js";
let labelsRemovable = [...importedLabelsRemovable];

function Header() {
	return <header id = 'header-container'>
		<div className="header-account-wrapper">
			<img src={portraitJoshP} alt="Portrait of Josh P" className="header-account-portrait" />
			<div className="header-account-info">
				<h2 className="header-account-name">Josh Pablico</h2>
				<p className="header-account-email">jpablico27@gmail.com</p>
			</div>
		</div>
		<nav className="header-nav">
			<button className='task-button' id='addTaskButton'>Add task</button>
			<ul className="header-nav-list">
				
			</ul>
			<button className='label-button' id='addLabelButton'>Add label</button>
		</nav>
	</header>;
}

function populateHeaderNav(labelsPermanent, labelsRemovable) {
	const headerNavList = document.querySelector('.header-nav-list');
	if (!headerNavList) {
	  console.error("No element with class 'header-nav-list' found.");
	  return;
	}
	headerNavList.innerHTML = '';
  
	labelsPermanent.forEach((label, index) => {
	  const li = createListItem(label, false);
	  headerNavList.appendChild(li);
  
	  if (index === 0) {
		li.classList.add('active');
		updateUI(label.Label);
	  }
	});
  
	const hzLine = document.createElement('hr');
	hzLine.classList.add('nav-divider');
	headerNavList.appendChild(hzLine);
  
	labelsRemovable.forEach((label) => {
	  const li = createListItem(label, true);
	  headerNavList.appendChild(li);
	});
  }
  
  function createListItem(label, isRemovable) {
	const li = document.createElement('li');
	li.textContent = label.Label;
	li.classList.add('nav-item');
	li.dataset.label = label.Label;
  
	if (isRemovable) {
	  const removeBtn = document.createElement('span');
	  removeBtn.classList.add('material-symbols-outlined');
	  removeBtn.textContent = 'close';
	  removeBtn.addEventListener('click', (event) => {
		event.stopPropagation();
		removeItem(label.Label);
	  });
	  li.appendChild(removeBtn);
	}
  
	li.addEventListener('click', (event) => {
	  event.preventDefault();
	  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
	  li.classList.add('active');
	  updateUI(label.Label);
	  li.blur();
	});
  
	return li;
  }
  
  function updateUI(label) {
	console.log(`UI updated to show tasks with label: ${label}`);
	const mainContainer = document.getElementById('main-container');
	mainContainer.innerHTML = '';

	const labelTitle = document.createElement('h1');
	labelTitle.classList.add('label-title');
	labelTitle.textContent = label;
	mainContainer.appendChild(labelTitle);

	updateTasks(label, mainContainer);
  }

  function updateTasks(label, mainContainer) {
	console.log(`Tasks updated to show tasks with label: ${label}`);

	const tasksContainer = document.createElement('div');
	tasksContainer.classList.add('tasks-container');
	tasksContainer.innerHTML = '';
	mainContainer.appendChild(tasksContainer);

	if (label === 'All') {
	   console.log(tasks);
	   createTask(tasks);
	} else {
		const filteredTasks = tasks.filter(task => {
			return task.label === label});
	
			console.log(filteredTasks);
			createTask(filteredTasks);
		}
	}


  function removeItem(label) {

	labelsRemovable = labelsRemovable.filter(item => item.Label !== label);
	populateHeaderNav(labelsPermanent, labelsRemovable);
  }

export { Header, populateHeaderNav}; 
