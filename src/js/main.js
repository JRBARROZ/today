import { storage } from "./utils.js";
const todoForm = document.getElementById("todo-form");
const todoListContainer = document.querySelector(".todo-container ul");
const todos = [];

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // const  taskName = event.target.elements[0]
  // const  taskDescription = event.target.elements[1]
  const [taskName, taskDescription] = event.target.elements;

  const todo = {
    id: todos.length,
    name: taskName.value,
    description: taskDescription.value,
    createdAt: new Date().toLocaleString(),
  };

  todos.push(todo);

  const li = document.createElement("li");
  const div = document.createElement("div");
  const p = document.createElement("p");
  const pDesc = document.createElement("p");
  const h4 = document.createElement("h4");

  const taskTitle = h4;
  taskTitle.innerText = todo.name;

  const taskDescriptionParagraphy = pDesc;
  taskDescriptionParagraphy.innerText = todo.description;

  const taskDate = p;
  taskDate.innerText = todo.createdAt;

  const taskInfo = div;
  taskInfo.appendChild(taskTitle);
  taskInfo.appendChild(taskDescriptionParagraphy);

  li.appendChild(taskInfo);
  li.appendChild(taskDate);

  todoListContainer.appendChild(li);
  
  storage.set("todoList", JSON.stringify(todos));
});
