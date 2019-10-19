import { useStaticQuery, graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

const useFluid = (): FluidObject | FluidObject[] => {
  const data = useStaticQuery(graphql`
    query {
      salon: file(relativePath: { eq: "salon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return data.salon.childImageSharp.fluid
}

export default useFluid
