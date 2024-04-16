import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
// import {
//   faFacebookSquare,
//   faInstagram
// } from '@fortawesome/free-brands-svg-icons'
import styles from '~/utils/styles'
import { Playing } from '~/store/global/playing'
import { Gnav } from '~/store/default/gnav'
import config from '~/utils/config'
import Video from '~/components/default/Navigation/Video'
import Br from '~/components/base/Br'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import H3 from '~/components/base/H3'
import { css } from '@emotion/core'
import animations from '~/utils/animations'
import { Launched } from '~/store/global/launched'

type Props = {
  launched: Launched
  playing: Playing
  gnav: Gnav
}

const Navigation: React.FC<Props> = props => {
  const pages = Object.entries(config.pages)
  const root = React.useRef<HTMLDivElement>(null)
  const off = (): void => {
    props.gnav.dispatch({ type: 'off' })
  }
  React.useEffect(() => {
    if (props.gnav.state) {
      animations.set(root.current, { scale: 1.1 })
      animations.scale(root.current, 1, 1, 'InOut')
      animations.opacity(root.current, 1, 1, 'InOut')
    } else {
      animations.scale(root.current, 1.1, 1, 'InOut')
      animations.opacity(root.current, 0, 1, 'InOut')
    }
  }, [props.gnav.state])
  return (
    <Root ref={root}>
      <Video
        launched={props.launched}
        playing={props.playing}
        gnav={props.gnav}
        src="/navigation/background.mp4"
      />
      <Contents>
        {pages.map(value => {
          return (
            <Menu to={value[1].path} onClick={off} key={value[0]}>
              <Br />
              <Flex>
                <Icon>{/* <FontAwesomeIcon icon={value[1].icon} /> */}</Icon>
                <Text>
                  <En>{value[1].en}</En>
                  <Ja>{value[1].ja}</Ja>
                </Text>
              </Flex>
              <Br />
            </Menu>
          )
        })}
      </Contents>
      <Social>
        <SocialIcon
          href={config.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <FontAwesomeIcon icon={faFacebookSquare} /> */}
        </SocialIcon>
        <SocialIcon
          href={config.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <FontAwesomeIcon icon={faInstagram} /> */}
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
  color: var(--onPicture);
  ${styles.large(css`
    padding-left: ${styles.sizes.phone.dashboard +
      1 +
      styles.sizes.phone.base()}px;
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
  color: var(--onPicture);
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
  color: var(--brand);
  mix-blend-mode: screen;
`

export default Navigation
