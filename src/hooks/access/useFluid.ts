import { useStaticQuery, graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

const useFluid = (): FluidObject | FluidObject[] => {
  const data = useStaticQuery(graphql`
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
  return data.access.childImageSharp.fluid
}

export default useFluid
