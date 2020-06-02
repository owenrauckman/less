import { css } from "@emotion/core";
import * as config from "../../config";

export const wrapper = css`
  width: 100%;
  min-height: 90vh;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  background: #333;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    height: 80vh;
  }
`;

export const heading = css`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  padding: 0 20px;
  text-align: left;
  font-size: 4.2rem;
  line-height: 5rem;
  color: white;
  @media screen and (min-width: ${config.breakpoints.tablet}px) {
    font-size: 4.8rem;
    line-height: 6rem;
    max-width: 600px;
    padding: 0 20px 0 100px;
  }
`;

export const circles = css`
  width: 100%;
  min-width: 1000px;
  height: auto;
  padding: 0 20px;
  position: absolute;
  left: 0;
  bottom: 10vh;
  @media screen and (min-width: ${config.breakpoints.tablet}px) {
    padding: 0 100px;
  }
`;

export const year = css`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  letter-spacing: 5px;
  position: absolute;
  top: 10vh;
  right: 20px;
  color: white;
  @media screen and (min-width: ${config.breakpoints.tablet}px) {
    right: 100px;
  }
`;
