import { labelsRemovable, tasks, tasksCompleted } from "./data";

function updateStorage() {
  localStorage.setItem('labelsRemovable', JSON.stringify(labelsRemovable));
  localStorage.setItem('tasks', JSON.stringify(tasks));
  localStorage.setItem('tasksCompleted', JSON.stringify(tasksCompleted));
}


export { updateStorage };