import { useStaticQuery, graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

const useFluid = (): FluidObject | FluidObject[] => {
  const data = useStaticQuery(graphql`
    query {
      service: file(relativePath: { eq: "service.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return data.service.childImageSharp.fluid
}

export default useFluid
