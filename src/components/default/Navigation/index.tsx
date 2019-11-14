import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import {
  faHome,
  faCut,
  faClipboardList,
  faMapMarkedAlt
} from '@fortawesome/pro-duotone-svg-icons'
import styles from '~/utils/styles'
import functions from '~/utils/functions'
import animations from '~/utils/animations'
import Filter from '~/components/base/Filter'
import Borders from '~/components/default/Navigation/Borders'
import Wrapper from '~/components/default/Navigation/Wrapper'
import List from '~/components/default/Navigation/List'

type Props = {
  navigation: boolean
  setNavigation: Function
}

// このへん整理する
const Navigation: React.FC<Props> = props => {
  const root = React.useRef<HTMLDivElement>(null)
  const video = React.useRef<HTMLVideoElement>(null)
  const click = (): void => {
    props.setNavigation(false)
  }
  React.useEffect(() => {
    video.current.load()
  }, [])
  React.useEffect(() => {
    if (props.navigation) {
      video.current.play()
      animations.opacity(root.current, 1, 1, 'InOut')
    } else {
      video.current.pause()
      animations.opacity(root.current, 0, 1, 'InOut')
    }
  }, [props.navigation])
  return (
    <Root ref={root}>
      <video
        ref={video}
        src="navigation.mp4"
        preload="none"
        muted
        playsInline
        loop
      />
      <Filter />
      <BordersWrapper>
        <Borders />
      </BordersWrapper>
      <Contents>
        <Link to="/" onClick={click}>
          <Wrapper>
            <List icon={faHome} en="HOME" ja="ホーム" />
          </Wrapper>
        </Link>
        <Link to="/salon" onClick={click}>
          <Wrapper>
            <List icon={faCut} en="SALON" ja="サロン・スタッフ紹介" />
          </Wrapper>
        </Link>
        <Link to="/service" onClick={click}>
          <Wrapper>
            <List icon={faClipboardList} en="SERVICE" ja="メニュー案内" />
          </Wrapper>
        </Link>
        <Link to="/access" onClick={click}>
          <Wrapper>
            <List icon={faMapMarkedAlt} en="ACCESS" ja="アクセス" />
          </Wrapper>
        </Link>
        <Bottom />
      </Contents>
    </Root>
  )
}

const Root = styled.div`
  ${styles.mixins.relative}
  opacity: 0;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const BordersWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
`
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  padding-left: ${styles.sizes.phone.dashboard + 1}px;
  width: 100%;
  height: 100%;
  color: white;
`
const Bottom = styled.div`
  border-top: 1px solid
    rgba(${functions.hexToRgb(styles.colors.light.shape)}, 0.1);
`

export default Navigation
