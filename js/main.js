import "./lit-component.js";

const APP = {
  todoList: document.querySelector("ul"),
  data: [
    { text: "Buy a burger", complete: false },
    { text: "Eat a burger", complete: false },
    { text: "Dream about a burger", complete: true },
    { text: "Cook a burger", complete: true },
  ],

  init: () => {
    APP.todoList.addEventListener("click", APP.handleItemClick);

    APP.buildHtml();
  },

  handleItemClick: (ev) => {},

  buildHtml: () => {
    const list = new DocumentFragment();

    APP.data.map((content, index) => {
      console.log(content);
      const todoItem = document.createElement("todo-item");

      todoItem.index = index + 1;
      todoItem.text = content.text;
      todoItem.complete = content.complete;

      list.appendChild(todoItem);
    });

    APP.todoList.appendChild(list);
  },
};

document.addEventListener("DOMContentLoaded", APP.init);
