import React from "react";
import ArrowLeft from "../../svg/arrowLeft";
import * as styles from "./styles";

export default () => (
  <section css={styles.wrapper}>
    <div css={styles.flexChildLeft}>
      <h1 css={styles.heading}>Subscribe</h1>
      <div css={styles.inputContainer}>
        <input css={styles.input} placeholder="Enter your email"></input>
        <div css={styles.arrow}>
          <ArrowLeft />
        </div>
      </div>
    </div>
    <div css={styles.flexChildRight}>
      <p css={styles.description}>
        Subscribe to receive the latest less blog posts and updates
      </p>
    </div>
  </section>
);
