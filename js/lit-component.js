import {
  LitElement,
  html,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";
import { styles } from "./styles.js";

export class TodoItem extends LitElement {
  static properties = {
    index: { type: Number },
    text: { type: String },
    complete: { type: Boolean },
  };

  static styles = styles;

  constructor() {
    super();
    this.index = 0;
    this.text = "";
    this.complete = false;
  }

  toggleCompleteClass() {
    this.complete = !this.complete;
  }

  deleteItem() {
    this.remove();
  }

  render() {
    return html` <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        rel="stylesheet"
      />

      <li>
        <span class=${this.complete === true ? "complete" : ""}
          >${this.index}: ${this.text}</span
        >

        <div class="icons-container">
          <span
            class="material-icons-outlined"
            @click=${(ev) => {
              this.toggleCompleteClass(ev);
            }}
          >
            ${this.complete === false ? "check_box_outline_blank" : "check_box"}
          </span>

          <span class="material-icons-outlined delete" @click=${this.deleteItem}
            >delete</span
          >
        </div>
      </li>`;
  }
}

customElements.define("todo-item", TodoItem);
