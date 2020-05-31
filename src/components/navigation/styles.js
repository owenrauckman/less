import { css } from "@emotion/core";
import * as config from "../../config";

export const nav = css`
  padding: 30px;
  position: absolute;
  left: 0;
  width: 100%;
  z-index: +1;
  background: transparent;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const logoContainer = css`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const title = css`
  font-family: "Playfair Display", sans-serif;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2rem;
  margin-left: 10px;
  display: none;
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    display: block;
  }
`;

export const hamburgerContainer = css`
  display: flex;
  align-items: center;
`;

export const letsTalk = css`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.2rem;
  @media screen and (min-width: ${config.breakpoints.tablet}px) {
    letter-spacing: -1px;
  }
  /* margin-right: 30px; */
`;
