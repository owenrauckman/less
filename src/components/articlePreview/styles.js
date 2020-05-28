import { css } from "@emotion/core";
// import * as config from "../../config";

export const wrapper = css`
  width: calc(100% - 10vmin);
  max-width: 1180px;
  margin: 0 auto;
  padding: 5vmin 0;
`;

export const articleList = css`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 5vmin;
  justify-content: center;
`;

export const article = css`
  text-decoration: none;
  &:hover {
    & .article-preview-decorator {
      background: black;
      border-radius: 10px;
      width: 10px;
      height: 10px;
    }
  }
`;

export const previewTitle = css`
  font-size: 2.4rem;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  margin: 15px 0;
`;

export const previewText = css`
  font-size: 1.6rem;
  line-height: 2.8rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
`;

export const decoratorContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const decoratorIndex = css`
  min-width: 50px;
  font-family: "Gothic A1", serif;
  font-weight: 800;
  font-size: 1.2rem;
`;

export const decoratorBar = css`
  background: rgba(0, 0, 0, 0.05);
  height: 2px;
  width: 100%;
  transition: all 0.2s ease-in-out;
`;
