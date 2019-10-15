import { useStaticQuery, graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

type ReturnTypes = {
  access: {
    childImageSharp: {
      fluid: FluidObject | FluidObject[]
    }
  }
}

const useGraphql = (): ReturnTypes => {
  return useStaticQuery(graphql`
    query {
      access: file(relativePath: { eq: "access.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
}

export default useGraphql
