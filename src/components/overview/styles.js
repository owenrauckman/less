import { css } from "@emotion/core";
import * as config from "../../config";

export const wrapper = css`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 100px 20px 140px 20px;
  text-align: center;
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    padding: 100px 20px;
  }
`;

export const heading = css`
  font-family: "Playfair Display", serif;
  font-weight: 700;
  margin: 0 0 30px 0;
  text-align: center;
  font-size: 6rem;
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    font-size: 7.2rem;
  }
`;

export const callout = css`
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  margin: 0 0 30px 0;
`;

export const description = css`
  font-size: 1.6rem;
  line-height: 2.8rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: black;
  margin: 0;
`;
