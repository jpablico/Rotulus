import React from "react";
import "../../styles/style.scss";
import portraitJoshP from '../../assets/portraitJoshP.jpeg';

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
  
	// Clear existing items in headerNavList before repopulating
	headerNavList.innerHTML = '';
  
	// Helper function to create list item
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
		  event.stopPropagation(); // Prevent list item click event
		  removeItem(label.Label); // Remove item from array and update the list
		});
		li.appendChild(removeBtn);
	  }
  
	  li.addEventListener('click', (event) => {
		event.preventDefault();
		// Remove 'active' class from all items and add it to the clicked item
		document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
		li.classList.add('active');
		if (updateComponent) {
		  updateComponent(label.Label); // Call updateComponent to handle the label change
		}
		li.blur();
	  });
  
	  return li;
	}
  
	// Populate permanent items
	labelsPermanent.forEach((label, index) => {
	  const li = createListItem(label, false);
	  headerNavList.appendChild(li);
  
	  // Set the first item as active by default
	  if (index === 0) {
		li.classList.add('active');
		if (updateComponent) {
		  updateComponent(label.Label);
		}
	  }
	});
  
	// Add a horizontal line to separate permanent and removable labels
	const hzLine = document.createElement('hr');
	headerNavList.appendChild(hzLine);
  
	// Populate removable items
	labelsRemovable.forEach((label) => {
	  const li = createListItem(label, true);
	  headerNavList.appendChild(li);
	});
  }

function removeItem(label) {
	// Remove the item from the labelsRemovable array
	labelsRemovable = labelsRemovable.filter(item => item.Label !== label);
	// Repopulate the header nav list to reflect changes
	populateHeaderNav(labelsPermanent, labelsRemovable);
}

export { Header, populateHeaderNav, removeItem}; // Export updateComponent and removeItem
