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
          <div css={styles.featuredArticleExcerpt}>
            {posts[activePost].node.description.description}
          </div>
          <Link
            to={`/blog/${posts[activePost].node.slug}`}
            css={styles.readMoreContainer(false)}
          >
            <span css={styles.readMoreText}>Read Article</span>
            <ArrowLeft />
          </Link>
        </article>
        <div css={styles.featuredImageWrapper}>
          <span css={styles.featuredArticleNumber}>
            {posts[activePost].node.postNumber < 10
              ? `0${posts[activePost].node.postNumber}`
              : posts[activePost].node.postNumber}
          </span>
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
        <Link
          to={`/blog/${posts[activePost].node.slug}`}
          css={styles.readMoreContainer(true)}
        >
          <span css={styles.readMoreText}>Read Article</span>
          <ArrowLeft />
        </Link>
      </div>
    </section>
  );
};
