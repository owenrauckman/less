import { css } from "@emotion/core";

export const footer = css`
  height: 100px;
  width: 100%;
  background: #333;
`;

export const wrapper = css`
  width: calc(100% - 10vmin);
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
`;
