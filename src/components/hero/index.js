import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import * as styles from "./styles";
import ArrowLeft from "../../svg/arrowLeft";

export default ({ person, posts }) => {
  const activePost = 0;
  return (
    <section css={styles.heroContainer}>
      <Img
        alt=""
        css={styles.heroImageContainer}
        imgStyle={{ objectFit: "cover", objectPosition: "50% bottom" }}
        fluid={posts[activePost].node.heroImage.fluid}
      />
      <div css={styles.featuredArticleContainer}>
        <article css={styles.featuredArticle}>
          <span css={styles.featuredArticleNumber}>0{activePost + 1}</span>
          <h2 css={styles.featuredArticleTitle}>
            {posts[activePost].node.title}
          </h2>
          <div
            css={styles.featuredArticleExcerpt}
            dangerouslySetInnerHTML={{
              __html:
                posts[activePost].node.description.childMarkdownRemark.html,
            }}
          ></div>
          <Link to="/" css={styles.readMoreContainer}>
            <span css={styles.readMoreText}>Read More</span>
            <ArrowLeft />
          </Link>
        </article>
      </div>
    </section>
  );
};
