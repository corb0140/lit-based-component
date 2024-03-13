import { css } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export const styles = css`
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
  }

  .complete {
    text-decoration: line-through;
    color: #fff6;
  }

  .icons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.725rem;
  }

  .material-icons-outlined {
    cursor: pointer;
    font-size: 1.855rem;

    transition: color 0.3s;
  }

  .material-icons-outlined.delete:hover {
    color: #840032;
  }
`;
