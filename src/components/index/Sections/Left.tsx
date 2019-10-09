import * as React from 'react'
import Img from 'gatsby-image'
import styled from '~/utils/emotion'
import { FluidObject } from 'gatsby-image'

type Props = {
  fluid: FluidObject | FluidObject[]
  head: string
  body: string
}

const Left: React.FC<Props> = props => {
  return (
    <Root>
      <Background />
      <ImgWrapper>
        <Img fluid={props.fluid} />
      </ImgWrapper>
      <Content>
        <Head>{props.head}</Head>
        <Body>{props.body}</Body>
      </Content>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  width: calc(
    100% -
      ${(props): number =>
        (props.theme.sizes.phone.dashboard -
          props.theme.sizes.phone.scrollbar) /
        2}px
  );
  height: 105vw;
  color: ${(props): string => props.theme.colors.light.background};
`
const Background = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: calc(
    100% -
      ${(props): number =>
        props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar}px
  );
  height: calc(
    100% -
      ${(props): number =>
        props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar}px
  );
  background: ${(props): string => props.theme.colors.light.neutral};
`
const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  padding-right: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  width: 100%;
  height: 100vw;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  width: calc(
    100% -
      ${(props): number =>
        (props.theme.sizes.phone.dashboard -
          props.theme.sizes.phone.scrollbar) /
        2}px
  );
  height: 100%;
`
const Head = styled.div`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 7px;
  ${(props): string => props.theme.mixins.lhCrop(1.8)}
`
const Body = styled.div`
  margin-top: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  ${(props): string => props.theme.mixins.lhCrop(2)}
`

export default Left
