// IMPORT PLUGIN
import React from "react"
import { StaticQuery, graphql } from "gatsby"

// IMPORT COMPONENT
import Section from "../components/organisms/section/section"

// CREATE NEW COMPONENT

const IndexPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query About {
          allDatoCmsAbout {
            nodes {
              id
              descriptionCompany
              historiaCompany {
                id
                title
                descriptionEvent
                image {
                  alt
                  title
                  fixed {
                    ...GatsbyDatoCmsFixed
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <>
            <Section about content={data.allDatoCmsAbout.nodes[0]} />
          </>
        )
      }}
    />
  )
}

export default IndexPage
