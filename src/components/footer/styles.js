import { css } from "@emotion/core";

export const footer = css`
  height: 100px;
  width: 100%;
  background: black;
`;

export const wrapper = css`
  width: calc(100% - 10vmin);
  max-width: 1180px;
  margin: 0 auto;
  padding: 5vmin 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
`;
