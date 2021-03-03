import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const capton = {
  fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  fontSize: "0.75rem",
  textTransform: "uppercase"
};
const imageGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: "1rem",
  marginBottom: 16
}


const IndexPage = () => (
  <Layout>
    <StaticQuery
    query={query}
    render={data => (
      <div style={imageGrid}>
        {data.allStrapiArtwork.edges.map(artwork => (
          <>
            <div>
              <GatsbyImage 
                image={artwork.node.Image.localFile.childImageSharp.gatsbyImageData}
                alt={artwork.node.Image.alternativeText}
              />
              <span style={capton}>{artwork.node.Title}, {artwork.node.Date}</span></br>
              <span style={capton}>{artwork.node.Medium}</span>
            </div>
          </>
        ))}
      </div>
    )}
  />
</Layout>
)

const query = graphql`
  query {
    allStrapiArtwork {
      edges {
        node {
          Date
          Medium
          Title
          id
          Image {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 80, width: 500, height: 500)
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
