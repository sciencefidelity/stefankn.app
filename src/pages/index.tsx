import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div>
      <StaticQuery
        query={query}
        render={data => (
          <div className="imageGrid">
            {data.allStrapiArtwork.edges.map(artwork => (
              <>
                <div>
                  <GatsbyImage 
                    image={artwork.node.Image.childImageSharp.gatsbyImageData}
                    alt=""
                  />
                  <span className="caption">{artwork.node.Title}, {artwork.node.Date}</span><br />
                  <span className="caption">{artwork.node.Medium}</span>
                </div>
              </>
            ))}
          </div>
        )}
      />
    </div>
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
            childImageSharp {
              gatsbyImageData(quality: 80, width: 500, height: 500)
            }
          }
        }
      }
    }
  }
`

export default IndexPage
