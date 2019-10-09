import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '~/utils/emotion'

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
    <Root>
      <Section1>
        <Img fluid={data.salon.childImageSharp.fluid} />
        <ContentRight>
          <Head>SALON</Head>
          <Body>
            サロン、スタッフ紹介（サロンコンセプト、設備など、椅子、シャンプーだい、タオルの紹介、予約システムなどはここ）
          </Body>
        </ContentRight>
      </Section1>
      <Section2>
        <Img fluid={data.menu.childImageSharp.fluid} />
        <ContentLeft>
          <Head>MENU</Head>
          <Body>
            サロン、スタッフ紹介（サロンコンセプト、設備など、椅子、シャンプーだい、タオルの紹介、予約システムなどはここ）
          </Body>
        </ContentLeft>
      </Section2>
      <Section3>
        <Img fluid={data.access.childImageSharp.fluid} />
        <ContentRight>Access</ContentRight>
      </Section3>
    </Root>
  )
}

const Root = styled.div``
const Section1 = styled.div`
  position: relative;
  padding-right: ${(props): number =>
    props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar}px;
  width: 100%;
  height: 100vw;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  right: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  width: 60%;
  height: 100%;
`
const Head = styled.div`
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 10px;
  ${(props): string => props.theme.mixins.lhCrop(2)}
`
const Body = styled.div`
  ${(props): string => props.theme.mixins.lhCrop(2)}
`
const Section2 = styled.div`
  position: relative;
  margin-top: ${(props): number =>
    props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar}px;
  padding-left: ${(props): number =>
    props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar}px;
  width: 100%;
  height: 100vw;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const ContentLeft = styled(ContentRight)`
  right: auto;
  left: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
`
const Section3 = styled(Section1)`
  margin-top: ${(props): number =>
    props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar}px;
`

export default Sections
