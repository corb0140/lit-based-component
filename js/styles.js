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
