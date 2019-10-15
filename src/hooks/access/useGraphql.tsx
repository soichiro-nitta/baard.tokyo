import { useStaticQuery, graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

type DataTypes = {
  access: {
    childImageSharp: {
      fluid: FluidObject | FluidObject[]
    }
  }
}

const useGraphql = (): DataTypes => {
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
