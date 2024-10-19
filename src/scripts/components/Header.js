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



export { Header };
