import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import * as styles from "./styles";
import ArrowLeft from "../../svg/arrowLeft";

export default ({ person, posts }) => {
  const activePost = 0;
  return (
    <section css={styles.heroWrapper}>
      <div css={styles.heroContainer}>
        <article css={styles.featuredArticle}>
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
          <Link to="/" css={styles.readMoreContainer(false)}>
            <span css={styles.readMoreText}>Read Article</span>
            <ArrowLeft />
          </Link>
        </article>
        <div css={styles.featuredImageWrapper}>
          <span css={styles.featuredArticleNumber}>0{activePost + 1}</span>
          <div css={styles.featuredImageContainer}>
            <Img
              alt=""
              css={styles.featuredImage}
              imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
              fluid={posts[activePost].node.heroImage.fluid}
            />
            <div css={styles.boxLeft}></div>
            <div css={styles.boxRight}></div>
          </div>
        </div>
        <Link to="/" css={styles.readMoreContainer(true)}>
          <span css={styles.readMoreText}>Read Article</span>
          <ArrowLeft />
        </Link>
      </div>
    </section>
  );
};
