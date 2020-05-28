import React from "react";
import * as styles from "./styles.js";

export default () => (
  <svg
    css={styles.logo}
    viewBox="0 0 218 218"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
  >
    <path fill="none" d="M0 0h217v217H0z" />
    <path
      css={styles.cup}
      d="M108.51 176.68c-44.052 0-55.002-39.215-55.002-87.512 0-48.298 10.95-46.702 55.001-46.702 44.043 0 54.994-1.596 54.994 46.702 0 48.297-10.95 87.512-54.994 87.512z"
    />
    <path d="M108.505 0c59.883 0 108.5 48.616 108.5 108.5S168.387 217 108.504 217C48.62 217 .005 168.383.005 108.5S48.621 0 108.505 0zm0 15.502c51.326 0 93.001 41.672 93.001 92.998 0 51.33-41.675 93.002-93.001 93.002-51.33 0-93.002-41.672-93.002-93.002 0-51.326 41.672-92.998 93.002-92.998z" />
  </svg>
);
