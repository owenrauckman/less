import React from "react";
import { Link } from "gatsby";
import * as styles from "./styles.js";
import Logo from "../../svg/logo";
// import Hamburger from "../../svg/hamburger";

export default () => (
  <nav role="navigation" css={styles.nav}>
    <Link to="/" css={styles.logoContainer}>
      <Logo />
      {/* <span css={styles.title}>Less</span> */}
    </Link>
    <div css={styles.hamburgerContainer}>
      <a href="https://www.linkedin.com/in/owenrauckman/" css={styles.letsTalk}>
        Lets talk
      </a>
      {/* <Hamburger /> */}
    </div>
  </nav>
);
