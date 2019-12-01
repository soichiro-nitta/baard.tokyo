import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import {
  faHome,
  faCut,
  faClipboardList,
  faMapMarkedAlt
} from '@fortawesome/pro-duotone-svg-icons'
import {
  faFacebookSquare,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import styles from '~/utils/styles'
import { Playing } from '~/store/global/playing'
import { Gnav } from '~/store/default/gnav'
import Filter from '~/components/base/Filter'
import config from '~/utils/config'
import useIn from '~/hooks/default/Navigation/useIn'
import useOut from '~/hooks/default/Navigation/useOut'
import Video from '~/components/default/Navigation/Video'
import Br from '~/components/base/Br'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import H3 from '~/components/base/H3'
import { css } from '@emotion/core'

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
      <Video
        playing={props.playing}
        gnav={props.gnav}
        src="/navigation/background.mp4"
      />
      <Filter />
      <Contents>
        <Menu to="/" onClick={off}>
          <Br />
          <Flex>
            <Icon>
              <FontAwesomeIcon icon={faHome} />
            </Icon>
            <Text>
              <En>HOME</En>
              <Ja>ホーム</Ja>
            </Text>
          </Flex>
          <Br />
        </Menu>
        <Menu to="/salon" onClick={off}>
          <Br />
          <Flex>
            <Icon>
              <FontAwesomeIcon icon={faCut} />
            </Icon>
            <Text>
              <En>SALON</En>
              <Ja>サロン・スタッフ紹介</Ja>
            </Text>
          </Flex>
          <Br />
        </Menu>
        <Menu to="/salon" onClick={off}>
          <Br />
          <Flex>
            <Icon>
              <FontAwesomeIcon icon={faClipboardList} />
            </Icon>
            <Text>
              <En>SERVICE</En>
              <Ja>メニュー案内</Ja>
            </Text>
          </Flex>
          <Br />
        </Menu>
        <Menu to="/access" onClick={off}>
          <Br />
          <Flex>
            <Icon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </Icon>
            <Text>
              <En>ACCESS</En>
              <Ja>アクセス</Ja>
            </Text>
          </Flex>
          <Br />
        </Menu>
      </Contents>
      <Social>
        <SocialIcon
          href={config.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </SocialIcon>
        <SocialIcon
          href={config.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </SocialIcon>
      </Social>
      <Baard>
        <H3>BAARD BARBER</H3>
      </Baard>
    </Root>
  )
}

const Root = styled.div`
  ${styles.mixins.relative}
  opacity: 0;
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
  color: ${styles.colors.light.background};
  ${styles.large(css`
    padding-left: ${styles.sizes.desktop.dashboard() + 1}px;
  `)}
`
const Menu = styled(Link)`
  display: block;
`
const Flex = styled.div`
  display: flex;
  align-items: center;
`
const Icon = styled.div`
  width: 20px;
  text-align: center;
  svg {
    font-size: 16px;
    height: 16px;
  }
`
const Text = styled.div`
  margin-left: ${styles.sizes.phone.base}px;
  line-height: 1;
`
const En = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 0.33em;
`
const Ja = styled.div`
  margin-top: 7.5px;
  font-size: 1rem;
  letter-spacing: 0.33em;
`
const Social = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
`
const SocialIcon = styled.a`
  display: inline-block;
  margin-bottom: ${styles.sizes.phone.base}px;
  margin-left: ${styles.sizes.phone.base}px;
  color: ${styles.colors.light.background};
  mix-blend-mode: screen;
  svg {
    font-size: 16px;
    height: 16px;
  }
`
const Baard = styled.div`
  position: absolute;
  bottom: ${styles.sizes.phone.base}px;
  right: ${styles.sizes.phone.base}px;
  mix-blend-mode: screen;
`

export default Navigation
