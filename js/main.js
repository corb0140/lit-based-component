import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

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
    this.data = data;
  }

  changeCompletionStatus(ev) {
    console.log(ev.target.parentElement.parentElement.getAttribute("index"));

    // if (ev.target.parentElement.parentElement.classList.contains("complete")) {
    //   this.complete = true;
    // } else {
    //   this.complete = false;
    // }
  }

  toggleCompleteClass(ev) {
    if (ev.target) {
      //get index of the item
      // const index = ev.target.parentElement.parentElement;
      // console.log(index);
    }

    // if (ev.target) {
    //   ev.target.parentElement.parentElement.classList.toggle("complete");
    //   this.changeCompletionStatus(ev);
    //   console.log(ev.target.parentElement.parentElement, this.complete);
    // }
  }

  toggleImage(ev) {
    // if (this.complete === true) {
    //   ev.target.src = "./imgs/cancel.svg";
    // } else {
    //   ev.target.src = "./imgs/complete.svg";
    // }
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
