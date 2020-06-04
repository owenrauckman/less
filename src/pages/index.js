import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "react-helmet";
import Hero from "../components/hero/index";
import Layout from "../components/layout/index";
import ArticlePreview from "../components/articlePreview/index";
import Overview from "../components/overview/index";
import Subscribe from "../components/subscribe/index";
import Footer from "../components/footer/index";

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allContentfulBlogPost.edges");
    const [author] = get(this, "props.data.allContentfulPerson.edges");

    return (
      <Layout location={this.props.location} isFixed={false}>
        <div>
          <Helmet title={siteTitle} />
          <Hero data={author.node} posts={posts} />
          <Overview />
          <ArticlePreview posts={posts} />
          <Subscribe />
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: ASC }) {
      edges {
        node {
          title
          postNumber
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          heroImage {
            fluid(maxWidth: 1200, maxHeight: 800, resizingBehavior: FILL) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            description
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
