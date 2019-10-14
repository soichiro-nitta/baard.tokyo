import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import config from '~/utils/config'
import styles from '~/utils/styles'
import useMain from '~/hooks/base/useMain'
import Seo from '~/components/base/Seo'
import Breadcrumbs from '~/components/base/Breadcrumbs'
import ButtonNew from '~/components/base/ButtonNew'

const Access: React.FC = () => {
  useMain()
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
  const crumbs = [
    {
      to: '/',
      name: 'ホーム'
    },
    {
      to: '/access',
      name: 'アクセス'
    }
  ]
  return (
    <Root>
      <Seo title="Access" />
      <BreadcrumbsWrapper>
        <Breadcrumbs crumbs={crumbs} />
      </BreadcrumbsWrapper>
      <ImgWrapper>
        <ImgInner>
          <Img fluid={data.access.childImageSharp.fluid} />
        </ImgInner>
      </ImgWrapper>
      <P1>
        <b>ACCESS</b> / マップ、営業時間
      </P1>
      <P2>
        亀有にオープンしたBAARD理髪店のウェブサイトです。
        ここに軽めの序文を。ここに軽めの序文を。ここに軽めの序文を。
      </P2>
      <ButtonWrapper>
        <ButtonNew to={config.instagram} text="スタイル集はInstagramにて" />
      </ButtonWrapper>
      <Wrapper>
        <P2>
          Facebookページにてお店の情報やお知らせ、近況のご報告などをおこなっています。
        </P2>
        <ButtonWrapper>
          <ButtonNew to={config.facebook} text="近況報告はFacebookにて" />
        </ButtonWrapper>
      </Wrapper>
      <Wrapper>
        <P2>
          <b>店名</b>
        </P2>
        <P2>BAARD（バーールト）理髪店</P2>
      </Wrapper>
      <Wrapper>
        <P2>
          <b>所在地</b>
        </P2>
        <P2>〒125-0061 東京都葛飾区亀有 2-59-7</P2>
      </Wrapper>
      <Wrapper>
        <P2>
          <b>電話番号</b>
        </P2>
        <P2>03-0000-0000</P2>
      </Wrapper>
    </Root>
  )
}

const Root = styled.div`
  margin-top: ${styles.sizes.phone.dashboard +
    (styles.sizes.phone.dashboard - 30) / 2 +
    5}px;
`
const P1 = styled.p`
  padding: 0
    ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) / 2}px;
  width: 100%;
  ${styles.mixins.lhCrop(2)}
`
const P2 = styled(P1)`
  margin-top: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) /
    2}px;
`
const BreadcrumbsWrapper = styled.div`
  margin-left: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) /
    2}px;
`
const ImgWrapper = styled.div`
  margin-top: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) /
    2}px;
  padding: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) /
      2}px
    0;
  padding-right: ${(styles.sizes.phone.dashboard -
    styles.sizes.phone.scrollbar) /
    2}px;
  width: 100%;
  height: 70vw;
  border-top: 1px solid ${styles.colors.light.border};
`
const ImgInner = styled.div`
  ${styles.mixins.relative}
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${styles.colors.light.shape};
    opacity: 0.3;
  }
`
const Wrapper = styled.div`
  margin-top: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) /
    2}px;
  border-top: 1px solid ${styles.colors.light.border};
`
const ButtonWrapper = styled.div`
  margin-top: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) /
    3}px;
  margin-left: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) /
    2}px;
`

export default Access
