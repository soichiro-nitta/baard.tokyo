import * as React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { FluidObject } from 'gatsby-image'
import styled from '~/utils/emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCut,
  faClipboardList,
  faMapMarkedAlt,
  faLongArrowRight
} from '@fortawesome/pro-duotone-svg-icons'

type Props = {
  fluid: FluidObject | FluidObject[]
  icon: string
  head: string
  body: string
}

const Left: React.FC<Props> = props => {
  const icons = {
    faCut,
    faClipboardList,
    faMapMarkedAlt
  }
  return (
    <Root>
      <Background />
      <ImgWrapper>
        <Img fluid={props.fluid} />
      </ImgWrapper>
      <Content>
        <Head>
          {props.head}
          <FontAwesomeIcon icon={icons[props.icon]} />
        </Head>
        <Body>{props.body}</Body>
        <Button to="/salon">
          くわしくみる
          <FontAwesomeIcon icon={faLongArrowRight} />
        </Button>
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
  height: calc(
    105vw +
      ${(props): number =>
        (props.theme.sizes.phone.dashboard -
          props.theme.sizes.phone.scrollbar) /
        2}px
  );
  color: white;
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
        (props.theme.sizes.phone.dashboard -
          props.theme.sizes.phone.scrollbar) /
        2}px
  );
  background: ${(props): string => props.theme.colors.light.shape};
`
const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(
    100% -
      ${(props): number =>
        props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar}px
  );
  height: calc(
    100% -
      ${(props): number =>
        (props.theme.sizes.phone.dashboard -
          props.theme.sizes.phone.scrollbar) /
        2}px
  );
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
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  top: 0;
  right: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  width: calc(
    100% -
      ${(props): number =>
        ((props.theme.sizes.phone.dashboard -
          props.theme.sizes.phone.scrollbar) /
          2) *
        4}px
  );
  height: 100%;
  text-align: right;
`
const Head = styled.div`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 7px;
  ${(props): string => props.theme.mixins.lhCrop(1.8)}
  svg {
    margin-left: 7.5px;
  }
`
const Body = styled.div`
  margin-top: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  ${(props): string => props.theme.mixins.lhCrop(2)}
`
const Button = styled(Link)`
  display: inline-block;
  margin-top: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  padding: 10px;
  line-height: 1;
  border: 1px solid ${(props): string => props.theme.colors.light.neutral};
  svg {
    margin-left: 7.5px;
  }
`

export default Left
