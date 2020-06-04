import React from "react";
import * as styles from "./styles";
import Logo from "../../svg/logo";

export default () => (
  <section css={styles.footer}>
    <div css={styles.wrapper}>
      <Logo color={"white"} size={20} />
    </div>
  </section>
);
