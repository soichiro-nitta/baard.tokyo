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
import { Playing } from '~/store/global/playing'
import { Gnav } from '~/store/default/gnav'
import Filter from '~/components/base/Filter'
import Borders from '~/components/default/Navigation/Borders'
import Wrapper from '~/components/default/Navigation/Wrapper'
import List from '~/components/default/Navigation/List'
import useIn from '~/hooks/default/Navigation/useIn'
import useOut from '~/hooks/default/Navigation/useOut'
import Video from '~/components/default/Navigation/Video'

type Props = {
  playing: Playing
  gnav: Gnav
}

const Navigation: React.FC<Props> = props => {
  const root = React.useRef<HTMLDivElement>(null)
  const off = (): void => {
    props.gnav.dispatch({ type: 'off' })
  }
  useIn(props.gnav, root)
  useOut(props.gnav, root)
  return (
    <Root ref={root}>
      <Video playing={props.playing} gnav={props.gnav} src="navigation.mp4" />
      <Filter />
      <BordersWrapper>
        <Borders />
      </BordersWrapper>
      <Contents>
        <Link to="/" onClick={off}>
          <Wrapper>
            <List icon={faHome} en="HOME" ja="ホーム" />
          </Wrapper>
        </Link>
        <Link to="/salon" onClick={off}>
          <Wrapper>
            <List icon={faCut} en="SALON" ja="サロン・スタッフ紹介" />
          </Wrapper>
        </Link>
        <Link to="/service" onClick={off}>
          <Wrapper>
            <List icon={faClipboardList} en="SERVICE" ja="メニュー案内" />
          </Wrapper>
        </Link>
        <Link to="/access" onClick={off}>
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
