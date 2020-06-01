import { css } from "@emotion/core";
import * as config from "../../config";

export const heroWrapper = css`
  min-height: 400px;
  height: 75vh;
  position: relative;
  display: flex;
  align-items: center;
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    min-height: 600px;
    height: 80vh;
  }
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
  line-height: 3rem;
  margin: 10px 0 0 0;
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    font-size: 6.4rem;
    line-height: 6rem;
  }
`;

export const featuredArticleExcerpt = css`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: rgba(0, 0, 0, 0.5);
`;

export const readMoreContainer = (isAbsolute) => css`
  align-self: flex-end;
  flex-direction: row;
  margin: 40px 5px 0 0;
  display: flex;
  text-decoration: none;
  & svg {
    height: 1.2rem;
    width: 3rem;
    margin-top: 0.1rem;
    margin-left: 15px;
    transform: translateX(0);
    transition: transform 0.2s ease;
  }
  &:hover {
    & svg {
      transform: translateX(4px);
    }
  }
  display: ${isAbsolute ? "block" : "none"};
  width: ${isAbsolute ? "100%" : "auto"};
  padding: ${isAbsolute ? "0 20px" : "auto"};
  text-align: ${isAbsolute ? "right" : "left"};
  margin-top: ${isAbsolute ? "20px" : "40px"};
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    display: ${!isAbsolute ? "block" : "none"};
  }
`;

export const readMoreText = css`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.6rem;
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
