import { css } from "@emotion/core";
import * as config from "../../config";

export const wrapper = css`
  width: calc(100% - 10vmin);
  max-width: 750px;
  margin: 5vh auto 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  outline: solid 1px #333;
  padding: 40px;
  @media screen and (min-width: ${config.breakpoints.tablet}px) {
    padding: 50px;
    flex-direction: row;
  }
`;

export const heading = css`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin: 0 0 20px 0;
  font-size: 2.4rem;
  letter-spacing: -0.5px;
`;

export const flexChildLeft = css`
  flex: 1;
  width: 100%;
`;

export const flexChildRight = css`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
  @media screen and (min-width: ${config.breakpoints.tablet}px) {
    margin-top: 0;
  }
`;

export const inputContainer = css`
  background: #f1f1f1;
  height: 60px;
  width: 100%;
  max-width: 500px;
  position: relative;
  @media screen and (min-width: ${config.breakpoints.tablet}px) {
    min-width: 300px;
  }
`;

export const input = css`
  background: transparent;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  outline: none;
  border: solid 1px #f1f1f1;
  font-size: 1.6rem;
  font-family: "Roboto", sans-serif;
  transition: border 0.2s ease-in-out;
  border-radius: 0;
  -webkit-appearance: none;
  &:focus {
    border: solid 1px black;
  }
`;

export const arrow = css`
  position: absolute;
  right: 15px;
  top: calc(50% + 2px);
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 56 16" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h55.84v15.84H0z"/><path d="M0 6.92v2h52l-5.5 5.5 1.42 1.42 7.92-7.92L47.92 0 46.5 1.42l5.5 5.5H0z"/></svg>')
    no-repeat;
  background-size: 24px;
  transform: translateY(-50%);
  border: none;
  width: 24px;
  height: 24px;
  background-position: 50% 50%;
  cursor: pointer;
`;

export const description = css`
  font-size: 1.6rem;
  line-height: 2.8rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
  text-align: left;
  width: 100%;
  @media screen and (min-width: ${config.breakpoints.tablet}px) {
    max-width: 240px;
  }
`;
