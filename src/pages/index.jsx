import React from 'react';
import Layout from '../components/Layout';
import FeaturedPost from '../components/FeaturedPost';
import PostListing from '../components/PostListing';
import Seo from '../components/Seo';
import {graphql} from 'gatsby';


const IndexPage = ({data}) => {
  return (
    <Layout>

    <Seo title={`Home`} description={`welcome to my blog`} />

    { /* Show two featured posts.*/ }
      <div className="columns">
        {data.allMarkdownRemark.nodes.slice(0, 2).map(node => (
          <div key={node.id} className="column">
            <FeaturedPost post={node} />
          </div>
        ))}
      </div>

    { /* List of posts*/ }
      <div className="p-4">
        <PostListing posts={data.allMarkdownRemark.nodes} />
      </div>

    </Layout>
  )
}

export const querty = graphql`
query {
  allMarkdownRemark(limit: 2, sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      id
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        slug
        subtitle
        author
      }
    }
  }
}
`

export default IndexPage;
