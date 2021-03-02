import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <StaticQuery
    query={query}
    render={data => (
      <ul>
        {data.allStrapiArtwork.edges.map(artwork => (
          <li key={artwork.node.strapiId}>{artwork.node.Title}, {artwork.node.Date}</li>
        ))}
      </ul>
    )}
  />
  <img src="https://api.stefanknap.art{allStrapiArtwork.Image.url}" />
  </Layout>
)

const query = graphql`
  query {
    allStrapiArtwork {
      edges {
        node {
          id
          Title
          Date
          Medium
          Price
          Location
          Dimensions
          Image {
            url
          }
        }
      }
    }
  }
`;

export default IndexPage
