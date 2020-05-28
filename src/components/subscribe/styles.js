import { css } from "@emotion/core";
import * as config from "../../config";

export const wrapper = css`
  width: calc(100% - 10vmin);
  max-width: 1180px;
  margin: 0 auto;
  padding: 140px 0 100px 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    flex-direction: row;
    padding: 180px 0;
  }
`;

export const heading = css`
  font-family: "Gothic A1", serif;
  font-weight: 700;
  margin: 0 0 20px 0;
  font-size: 2.4rem;
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    font-size: 3.6rem;
    margin: 0 0 30px 0;
  }
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
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    margin-top: 0;
  }
`;

export const inputContainer = css`
  background: #f1f1f1;
  height: 60px;
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  position: relative;
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
  transform: translateY(-50%);
  & svg {
    height: 16px;
    width: 16px;
  }
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
  @media screen and (min-width: ${config.breakpoints.phone}px) {
    text-align: right;
    max-width: 300px;
  }
`;
