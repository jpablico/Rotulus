# Rotulus

Rotulus is a streamlined to-do app designed to help users organize and manage tasks efficiently. With a focus on simplicity and functionality, Rotulus allows users to create, update, and categorize tasks, all while saving progress through local storage for persistent tracking. Key features include customizable labels, completed tasks tracking, and a clean, intuitive interface. Whether for daily tasks or long-term projects, Rotulus aims to keep users organized and productive.

![Rotulus Screenshot](./Rotulus.png)

Learning Goals

	•	Object-Oriented Programming (OOP): Apply OOP principles to dynamically create and manage ‘todo’ items with properties like title, description, due date, and priority.
	•	Modular Code Structure: Use JavaScript modules to separate application logic from DOM manipulation, creating a clear and maintainable codebase.
	•	DOM Manipulation: Develop a user interface for managing tasks, viewing projects, editing details, and deleting items.
	•	Data Persistence: Implement local storage to save data across sessions, ensuring todos persist even after page reloads.

Technologies Used

	•	HTML/SCSS: Structure and styling for a clean, user-friendly interface.
	•	JavaScript (ES6+) & React: Core functionality, OOP principles, modular code, and component-based structure for enhanced reusability.
	•	Webpack: Module bundler to compile and bundle JavaScript and SCSS files.
	•	localStorage (Web Storage API): Ensures data persistence without needing a backend.

 Development Challenges and Solutions in Rotulus

	1.	Initial Setup and Task Management:
	•	After setting up the basics, you focused on designing modals for task management, initially requiring a separate function to handle modal open and close actions. You later optimized this by refactoring into a single, streamlined function.
	2.	Modal and Label Functionality:
	•	Implementing the modal and label functionality required changes to the index structure, causing some initialization issues. You solved this by reworking class names and adjusting SCSS to reflect these changes.
	•	Building the header with account information and navigation for labels revealed the need for a new function, updateComponent, for dynamic header updates.
	3.	UI Challenges with Task Display and Filtering:
	•	Task population and UI updates, especially within the main container, posed additional challenges. You enhanced the updateUI function to filter and display tasks based on labels, implementing overdue and completed task filtering for better organization.
	4.	Task Card Structure and Interaction:
	•	Styling and restructuring task cards to manage tasks’ completion and deletion was an iterative process. By introducing separate arrays for completed tasks, you improved efficiency and made the UI more intuitive.
	5.	Local Storage Integration:
	•	Integrating local storage was a significant undertaking. After creating a separate branch to focus on this, you refined the logic to pull data from local storage rather than hardcoded values, encapsulating storage functionality within dedicated functions.
	•	Ensuring the app updated the UI correctly when switching between local storage and hardcoded data required careful testing and adjustments across multiple components.
	6.	Reverting and Optimizing Final Implementation:
	•	After testing different methods for local storage, you identified a new approach that better aligned with the project’s needs, encapsulating state changes and using functions like useEffect() to handle storage updates effectively.
	•	Through careful revisions and testing, you finalized the project, achieving a fully functional and efficient to-do app with persistent storage.
