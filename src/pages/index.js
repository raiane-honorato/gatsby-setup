import React from "react"
import Link from "gatsby-link";
import { graphql } from "gatsby";

export default function Home({data}) {
  return (
  <>
  <div>Hello world!</div>
  <h1>{data.site.siteMetadata.title}</h1>
  <Link to="about">About</Link>
  </>
  )
}

export const query = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
