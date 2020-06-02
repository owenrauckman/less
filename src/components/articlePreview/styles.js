import { css } from "@emotion/core";
import * as config from "../../config";

export const wrapper = css`
  width: calc(100% - 10vmin);
  max-width: 750px;
  margin: 0 auto;
  padding: 5vh 0;
  position: relative;
`;

export const heading = css`
  font-size: 4.8rem;
  color: rgba(51, 51, 51, 0.1);
  font-family: "Poppins", sans-serif;
  letter-spacing: -0.5px;
  font-weight: 700;
  margin: 0;
  display: none;
  @media screen and (min-width: ${config.breakpoints.desktop}px) {
    display: block;
    position: absolute;
    transform: rotate(-90deg);
    left: -17vw;
    top: calc(10vh + 5vh + 65px);
  }
`;

export const articleList = css`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 6vmin;
  row-gap: 40px;
  justify-content: center;
  padding: 5vh 0;
  @media screen and (min-width: ${config.breakpoints.desktop}px) {
    padding: 10vh 0;
    row-gap: 6vmin;
  }
`;

export const article = css`
  text-decoration: none;
  &:hover {
    & .article-preview-decorator {
      background: rgba(0, 0, 0, 0.1);
      width: 80%;
    }
  }
`;

export const previewTitle = css`
  font-size: 2.4rem;
  font-family: "Poppins", sans-serif;
  letter-spacing: -0.5px;
  font-weight: 700;
  margin: 0;
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
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 2.4rem;
  color: rgba(51, 51, 51, 0.2);
`;

export const decoratorBar = css`
  background: rgba(0, 0, 0, 0.2);
  height: 2px;
  width: 10px;
  transition: all 0.2s ease-in-out;
`;
