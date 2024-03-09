import {
  LitElement,
  html,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
import { styles } from "./styles.js";

const data = [
  { text: "Buy a burger", complete: false },
  { text: "Eat a burger", complete: false },
  { text: "Dream about a burger", complete: true },
  { text: "Cook a burger", complete: true },
];

export class TodoItem extends LitElement {
  static properties = {
    text: { type: String },
    complete: { type: Boolean },
  };

  static styles = styles;

  constructor() {
    super();
    this.data = data;
  }

  toggleCompleteClass(ev) {
    if (ev.target) {
      ev.target.parentElement.parentElement.classList.toggle("complete");
    }
  }

  deleteItem(ev) {
    ev.target.parentElement.parentElement.remove();
  }

  render() {
    return html` <ul>
      ${this.data.map(
        (content, index) =>
          html`
            <li>
              ${index + 1}: ${content.text}

              <div class="icons-container">
                <img
                  src="./imgs/complete.svg"
                  alt="complete"
                  @click=${(ev) => {
                    console.log(content.complete);
                    this.toggleCompleteClass(ev);
                  }}
                />

                <img
                  src="./imgs/delete.svg"
                  alt="delete"
                  @click=${(ev) => {
                    this.deleteItem(ev);
                  }}
                />
              </div>
            </li>
          `
      )}
    </ul>`;
  }
}

customElements.define("todo-item", TodoItem);
