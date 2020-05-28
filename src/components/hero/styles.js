import { css } from "@emotion/core";
import * as config from "../../config";

export const heroContainer = css`
  max-height: 700px;
  min-height: 600px;
  position: relative;
`;

export const heroImageContainer = css`
  max-height: 700px;
  min-height: 600px;
`;

export const featuredArticle = css`
  position: absolute;
  left: 20px;
  background: white;
  padding: 30px;
  width: calc(100% - 40px);
  bottom: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    width: 100%;
    max-width: 400px;
    bottom: unset;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const featuredArticleContainer = css`
  width: 100%;
  max-width: 1180px;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 20px;
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    bottom: unset;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const featuredArticleNumber = css`
  font-family: "Gothic A1", sans-serif;
  font-weight: 800;
  font-size: 1.2rem;
`;

export const featuredArticleTitle = css`
  font-family: "Playfair Display", sans-serif;
  font-weight: 700;
  font-size: 2.4rem;
  margin: 10px 0 0 0;
`;

export const featuredArticleExcerpt = css`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: rgba(0, 0, 0, 0.5);
`;

export const readMoreContainer = css`
  align-self: flex-end;
  flex-direction: row;
  margin: 10px 0 0 0;
  display: flex;
  text-decoration: none;
  & svg {
    height: 1.4rem;
    width: 1.4rem;
    margin-top: 0.1rem;
    margin-left: 5px;
    transform: translateX(0);
    transition: transform 0.2s ease;
  }
  &:hover {
    & svg {
      transform: translateX(4px);
    }
  }
`;

export const readMoreText = css`
  font-family: "Gothic A1", sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 1.2rem;
`;
