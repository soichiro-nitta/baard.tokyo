import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '~/utils/emotion'
import config from '~/utils/config'
import useMain from '~/hooks/base/useMain'
import Seo from '~/components/base/Seo'
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
  return (
    <Root>
      <Seo title="Access" />
      <P1>
        <b>ACCESS</b> / マップ、営業時間
      </P1>
      <P2 />
      <ImgWrapper>
        <ImgInner>
          <Img fluid={data.access.childImageSharp.fluid} />
        </ImgInner>
      </ImgWrapper>
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
  margin-top: ${(props): number =>
    props.theme.sizes.phone.dashboard +
    (props.theme.sizes.phone.dashboard - 30) / 2 +
    5}px;
`
const P1 = styled.p`
  padding: 0
    ${(props): number =>
      (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
      2}px;
  width: 100%;
  ${(props): string => props.theme.mixins.lhCrop(2)}
`
const P2 = styled(P1)`
  margin-top: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
`
const ImgWrapper = styled.div`
  margin-top: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  padding: ${(props): number =>
      (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
      2}px
    0;
  padding-right: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  width: 100%;
  height: 200px;
  border-top: 1px solid ${(props): string => props.theme.colors.light.border};
`
const ImgInner = styled.div`
  ${(props): string => props.theme.mixins.relative}
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
    background: ${(props): string => props.theme.colors.light.shape};
    opacity: 0.3;
  }
`
const Wrapper = styled.div`
  margin-top: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  border-top: 1px solid ${(props): string => props.theme.colors.light.border};
`
const ButtonWrapper = styled.div`
  margin-top: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    3}px;
  margin-left: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
`

export default Access
