import { css } from "@emotion/core";
import * as config from "../../config";

export const heroWrapper = css`
  padding: 20vh 0 0 0;
  position: relative;
  display: flex;
  align-items: center;
`;

export const heroContainer = css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    justify-content: center;
  }
`;

/* Article Styles */
export const articleDetails = css`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  &:first-of-type {
    margin-top: 20px;
  }
`;
export const articleContainer = css`
  width: 100%;
  padding-top: 10vh;
`;

export const article = css`
  max-width: 750px;
  margin: 0 auto;
  padding: 0px 30px;
  @media screen and (min-width: ${config.breakpoints.tablet}px) {
    padding: 60px 0;
  }
  & {
    p,
    ul,
    ol {
      font-size: 1.6rem;
      line-height: 2.8rem;
      font-family: "Roboto", sans-serif;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "Poppins", sans-serif;
    }
  }
`;

export const featuredArticle = css`
  display: flex;
  flex-direction: column;
  padding: 20px 30px 20px 30px;
  padding-right: 40px;
  flex: 1 0 70%;
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    max-width: 500px;
    padding: 20px 30px 20px 30px;
    padding-right: 80px;
    flex: 1 0 calc(70% - 120px);
  }
  @media screen and (min-width: ${config.breakpoints.tablet}px) {
    max-width: 500px;
    padding-right: 120px;
  }
`;

export const featuredArticleTitle = css`
  font-family: "Poppins", sans-serif;
  letter-spacing: -1px;
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 4rem;
  margin: 10px 0 0 0;
  word-break: break-word;
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    font-size: 6.4rem;
    line-height: 7rem;
  }
`;

export const featuredArticleExcerpt = css`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: rgba(0, 0, 0, 0.5);
`;

export const featuredArticleNumber = css`
  color: rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  position: absolute;
  transform: rotate(-90deg);
  font-size: 1.4rem;
  left: -2.4rem;
  top: -5px;
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    font-size: 3.6rem;
    left: -46px;
    top: -10px;
  }
`;

/* Image Styles */
export const featuredImageWrapper = css`
  flex: 1 0 calc(30% - 40px);
  max-height: 400px;
  max-width: 100px;
  position: relative;
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    flex: 1 0 30%;
    max-width: 300px;
  }
`;

export const featuredImageContainer = css`
  height: 20vw;
  width: 15vw;
  position: relative;
  justify-content: center;
  max-width: 120px;
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    height: 40vw;
    width: 30vw;
    max-width: 300px;
    max-height: 400px;
  }
`;

export const featuredImage = css`
  height: 20vw;
  width: 15vw;
  z-index: +1;
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    height: 40vw;
    width: 30vw;
    max-width: 300px;
    max-height: 400px;
  }
`;

export const boxLeft = css`
  position: absolute;
  height: calc(20vw / 3);
  width: 15vw;
  border: solid 1px #333;
  left: calc(-15vw / 3 / 2);
  bottom: calc(-20vw / 3 / 2);
  z-index: 0;
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    height: calc(40vw / 3);
    bottom: calc(-20vw / 3);
    width: 30vw;
    left: -40px;
  }
  @media screen and (min-width: ${config.breakpoints.desktop}px) {
    height: calc(400px / 3);
    bottom: calc(-300px / 3);
    width: 300px;
  }
`;

export const boxRight = css`
  position: absolute;
  height: calc(20vw / 3);
  width: 15vw;
  background: #333;
  left: calc(15vw / 3 / 2);
  bottom: calc(-20vw / 3 / 4);
  z-index: 0;
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    height: calc(40vw / 3);
    bottom: calc(-20vw / 3 / 2);
    width: 30vw;
    left: 30px;
  }
  @media screen and (min-width: ${config.breakpoints.desktop}px) {
    height: calc(400px / 3);
    bottom: calc(-300px / 3 / 2);
    width: 300px;
    left: 40px;
  }
`;
