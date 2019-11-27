import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import Left from '~/components/index/Sections/Left'
import Right from '~/components/index/Sections/Right'

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
      service: file(relativePath: { eq: "service.png" }) {
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
      <SectionWrapper>
        <Right
          fluid={data.salon.childImageSharp.fluid}
          icon="faCut"
          head="SALON"
          body="サロンコンセプト、スタッフ紹介、設備、椅子、シャンプーだい、タオルの紹介、予約システムなど"
          to="/salon"
        />
      </SectionWrapper>
      <SectionWrapper>
        <Left
          fluid={data.service.childImageSharp.fluid}
          icon="faClipboardList"
          head="SERVICE"
          body="バーバーメニュー、女性のお顔そりのメニュー、実際のカット風景など"
          to="/service"
        />
      </SectionWrapper>
      <SectionWrapper>
        <Right
          fluid={data.access.childImageSharp.fluid}
          icon="faMapMarkedAlt"
          head="ACCESS"
          body="店名、住所、最寄駅、電話番号、メールアドレス、マップ、営業時間・定休日、駐車場のご案内など"
          to="/access"
        />
      </SectionWrapper>
    </>
  )
}

const SectionWrapper = styled.div`
  margin-top: ${styles.sizes.phone.base}px;
  padding-top: ${styles.sizes.phone.base}px;
  border-top: 1px solid ${styles.colors.light.border};
`

export default Sections
