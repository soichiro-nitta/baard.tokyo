import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Left from '~/components/index/Sections/Left'

const Sections: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      salon: file(relativePath: { eq: "salon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      menu: file(relativePath: { eq: "menu.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      access: file(relativePath: { eq: "access.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <Left
        fluid={data.salon.childImageSharp.fluid}
        head="SALON"
        body="サロン、スタッフ紹介（サロンコンセプト、設備など、椅子、シャンプーだい、タオルの紹介、予約システムなどはここ）"
      />
      <Left
        fluid={data.menu.childImageSharp.fluid}
        head="MENU"
        body="サロン、スタッフ紹介（サロンコンセプト、設備など、椅子、シャンプーだい、タオルの紹介、予約システムなどはここ）"
      />
      <Left
        fluid={data.access.childImageSharp.fluid}
        head="ACCESS"
        body="サロン、スタッフ紹介（サロンコンセプト、設備など、椅子、シャンプーだい、タオルの紹介、予約システムなどはここ）"
      />
    </>
  )
}

export default Sections
