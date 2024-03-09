import { TodoItem } from "./lit-component.js";

const APP = {
  todoList: document.querySelector("ul"),
  todoItem: document.createElement("todo-item"),
  data: [
    { text: "Buy a burger", complete: false },
    { text: "Eat a burger", complete: false },
    { text: "Dream about a burger", complete: true },
    { text: "Cook a burger", complete: true },
  ],

  init: () => {
    console.log(APP.todoItem);
    console.log(TodoItem);
    console.log(APP.todoList);

    APP.todoList.addEventListener("click", APP.handleItemClick);

    APP.buildHtml;
  },

  handleItemClick: (ev) => {},

  buildHtml: () => {
    const df = document.createDocumentFragment();

    APP.data.forEach((item) => {
      APP.todoItem.text = item.text;
      APP.todoItem.complete = item.complete;
      df.appendChild(APP.todoItem);
    });

    APP.todoList.appendChild(df);
  },
};

document.addEventListener("DOMContentLoaded", APP.init);
