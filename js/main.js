import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class TodoItem extends LitElement {
  static properties = {
    text: { attribute: false, type: String },
    complete: { attribute: false, type: Boolean },
  };

  static styles = css`
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    li {
      color: white;
      background-color: #002642;
      padding: 1rem;
      font-size: 1.25rem;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    li:hover {
      cursor: pointer;
    }

    .complete {
      text-decoration: line-through;
      color: #fff6;
    }

    .icons-container {
      display: flex;
      gap: 1rem;
    }
  `;

  constructor() {
    super();
    this.text = [
      "Buy a burger",
      "Eat a burger",
      "Dream about a burger",
      "Cook a burger",
    ];
    this.complete = false;
  }

  changeCompletionStatus(ev) {
    if (ev.target.parentElement.parentElement.classList.contains("complete")) {
      this.complete = true;
    } else {
      this.complete = false;
    }
  }

  toggleCompleteClass(ev) {
    if (ev.target) {
      ev.target.parentElement.parentElement.classList.toggle("complete");

      this.changeCompletionStatus(ev);
      console.log(this.complete);
    }
  }

  toggleImage(ev) {
    if (this.complete === true) {
      ev.target.src = "./imgs/cancel.svg";
    } else {
      ev.target.src = "./imgs/complete.svg";
    }
  }

  deleteItem(ev) {
    ev.target.parentElement.parentElement.remove();
  }

  render() {
    return html` <ul>
      ${this.text.map(
        (item) =>
          html`
            <li>
              ${item}

              <div class="icons-container">
                <img
                  src="./imgs/complete.svg"
                  alt="complete"
                  @click=${(ev) => {
                    this.toggleCompleteClass(ev);
                    this.toggleImage(ev);
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
