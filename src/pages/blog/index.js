import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="Блог">
      <ul>
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>
                <Link to={`/blog/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Опубликован: {node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
            </article>
          ))
        }
      </ul>
      <Link to="/">на главную</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => (<Seo pageTitle="Блог"/>)

export default BlogPage;