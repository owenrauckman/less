import React from "react";
import { Link } from "gatsby";

import * as styles from "./styles";

export default ({ posts }) => (
  <section css={styles.wrapper}>
    <h1 css={styles.heading}>Articles</h1>
    <ul css={styles.articleList}>
      {posts.map((article, index) => {
        return (
          <li key={article.node.slug}>
            <Link css={styles.article} to={`/blog/${article.node.slug}`}>
              <div css={styles.decoratorContainer}>
                <div css={styles.decoratorIndex}>
                  {index < 10 ? `0${index + 1}` : index + 1}
                </div>
                <div
                  css={styles.decoratorBar}
                  className="article-preview-decorator"
                ></div>
              </div>
              <h3 css={styles.previewTitle}>{article.node.title}</h3>
              <p css={styles.previewText}>
                {article.node.description.description}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  </section>
);
