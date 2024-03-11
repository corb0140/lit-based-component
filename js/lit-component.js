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

  toggleCompleteClass(ev) {
    if (ev.target) {
      ev.target.parentElement.parentElement.classList.toggle("complete");
    }
  }

  init() {
    document.querySelector("ul").addEventListener("click", this.deleteItem);
  }

  deleteItem(ev) {
    if (ev.target) {
      ev.target.remove();
    }
  }

  render() {
    return html`<li class=${this.complete === true ? "complete" : ""}>
      <span>${this.index}: ${this.text}</span>
      <div class="icons-container">
        <img
          src=${this.complete === false
            ? "./imgs/complete.svg"
            : "./imgs/cancel.svg"}
          alt=${this.complete === false ? "complete icon" : "cancel icon"}
          @click=${(ev) => {
            this.toggleCompleteClass(ev);

            if (ev.target) {
              this.complete = !this.complete;
            }
          }}
        />

        <img src="./imgs/delete.svg" alt="trash can icon" @click=${this.init} />
      </div>
    </li>`;
  }
}

customElements.define("todo-item", TodoItem);
