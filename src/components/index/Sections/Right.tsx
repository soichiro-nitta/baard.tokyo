import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCut,
  faClipboardList,
  faMapMarkedAlt,
  faLongArrowRight
} from '@fortawesome/pro-duotone-svg-icons'
import styles from '~/utils/styles'
import { Playing } from '~/store/global/playing'
import Filter from '~/components/base/Filter'
import Video from '~/components/base/Video'
import { isBrowser } from 'react-device-detect'
import { css } from '@emotion/core'

type Props = {
  playing: Playing
  src: string
  icon: string
  head: string
  body: string
  to: string
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
        <Video playing={props.playing} src={props.src} rootMargin="-40% 0%" />
        <Filter />
      </ImgWrapper>
      <Content>
        <Head>
          {props.head}
          <FontAwesomeIcon icon={icons[props.icon]} />
        </Head>
        <Body>{props.body}</Body>
        <Button to={props.to}>
          詳しくみる
          <FontAwesomeIcon icon={faLongArrowRight} />
        </Button>
      </Content>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  margin-left: ${styles.sizes.phone.base}px;
  width: calc(100% - ${styles.sizes.phone.base}px);
  height: calc(105vw + ${styles.sizes.phone.base}px);
  color: white;
  ${isBrowser &&
    css`
      height: ${styles.sizes.desktop.main() * 1.05 +
        styles.sizes.phone.base()}px;
    `}
`
const Background = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: calc(
    100% - ${styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar}px
  );
  height: calc(100% - ${styles.sizes.phone.base}px);
  background: ${styles.colors.light.shape};
`
const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: calc(
    100% - ${styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar}px
  );
  height: calc(100% - ${styles.sizes.phone.base}px);
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
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: ${styles.sizes.phone.base}px;
  width: calc(100% - ${styles.sizes.phone.base() * 4}px);
  height: 100%;
  span {
    background: Pink;
  }
`
const Head = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  letter-spacing: 0.33em;
  ${styles.mixins.lhCrop(1.8)}
  svg {
    margin-left: 7.5px;
  }
`
const Body = styled.div`
  margin-top: ${styles.sizes.phone.base}px;
  font-size: 1.2rem;
  ${styles.mixins.lhCrop(2)}
`
const Button = styled(Link)`
  display: inline-block;
  margin-top: ${styles.sizes.phone.base}px;
  padding: 10px;
  line-height: 1;
  border: 1px solid ${styles.colors.light.neutral};
  svg {
    margin-left: 7.5px;
  }
`

export default Left
