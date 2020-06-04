import { css } from "@emotion/core";

export const logo = (size = 32) => css`
  height: ${size}px;
  width: ${size}px;
`;

export const cup = (color = "#333") => css`
  @keyframes animate {
    to {
      transform: scaleY(0.5);
    }
  }
  height: 100%;
  width: 100%;
  fill: ${color};
  transform: scaleY(1);
  transform-origin: 50% 80%;
  animation: animate 2s ease-in-out forwards;
`;

export const circle = (color = "#333") => css`
  fill: ${color};
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
