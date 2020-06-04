import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import get from "lodash/get";
import ArticleDetail from "../components/articleDetail/index";
import Subscribe from "../components/subscribe/index";
import Footer from "../components/footer/index";
import Layout from "../components/layout/index";

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, "data.contentfulBlogPost");
    const siteTitle = get(this.props, "data.site.siteMetadata.title");

    return (
      <Layout location={this.props.location} isFixed={true}>
        <div>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <ArticleDetail post={post} />
          <Subscribe />
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      postNumber
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1200, maxHeight: 800, resizingBehavior: FILL) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
