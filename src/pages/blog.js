import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="Блог">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>
            {node.name}
          </li>
        ))}
      </ul>
      <Link to="/">на главную</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export const Head = () => (<Seo pageTitle="Блог"/>)

export default BlogPage;