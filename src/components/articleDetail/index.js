import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import * as styles from "./styles";
import ArrowLeft from "../../svg/arrowLeft";

export default ({ post }) => {
  return (
    <section css={styles.heroWrapper}>
      <div css={styles.heroContainer}>
        <article css={styles.featuredArticle}>
          <h2 css={styles.featuredArticleTitle}>{post.title}</h2>
        </article>
        <div css={styles.featuredImageWrapper}>
          <span css={styles.featuredArticleNumber}>01</span>
          <div css={styles.featuredImageContainer}>
            <Img
              alt=""
              css={styles.featuredImage}
              imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
              fluid={post.heroImage.fluid}
            />
            <div css={styles.boxLeft}></div>
            <div css={styles.boxRight}></div>
          </div>
        </div>
        <div css={styles.articleContainer}>
          <div css={styles.article}>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
            <div css={styles.articleDetails}>Owen Rauckman</div>
            <div css={styles.articleDetails}>{post.publishDate}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
