import { css } from "@emotion/core";

export const logo = css`
  height: 32px;
  width: 32px;
`;

export const cup = css`
  @keyframes animate {
    to {
      transform: scaleY(0.5);
    }
  }
  height: 100%;
  width: 100%;
  fill: #333;
  transform: scaleY(1);
  transform-origin: 50% 80%;
  animation: animate 2s ease-in-out forwards;
`;

export const hamburger = css`
  width: 25px;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.3s ease;
  &:hover {
    transform: scale(0.9);
  }
`;
