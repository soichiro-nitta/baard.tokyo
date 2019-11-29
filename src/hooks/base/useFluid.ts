// import { useStaticQuery, graphql } from 'gatsby'
// import { FluidObject } from 'gatsby-image'

// const useFluid = (): FluidObject | FluidObject[] => {
//   const data = useStaticQuery(graphql`
//     query {
//       salon1: file(relativePath: { eq: "salon1.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 500) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       salon2: file(relativePath: { eq: "salon2.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 500) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       shun: file(relativePath: { eq: "shun.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 300) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       risa: file(relativePath: { eq: "risa.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 300) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)
//   return [
//     data.salon1.childImageSharp.fluid,
//     data.salon2.childImageSharp.fluid,
//     data.shun.childImageSharp.fluid,
//     data.risa.childImageSharp.fluid
//   ]
// }

// export default useFluid
