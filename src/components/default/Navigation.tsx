import * as React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import Borders from '~/components/default/Borders'

type Props = {
  navigation: boolean
}

const Navigation: React.FC<Props> = props => {
  const root = React.useRef()
  const video = React.useRef(null)
  React.useEffect(() => {
    if (props.navigation) {
      video.current.load()
      video.current.play()
      animations.opacity(root.current, 1, 1, 'InOut')
    } else {
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
      <Lists>
        <Flex>
          <Icon>
            <FontAwesomeIcon icon={faHome} />
          </Icon>
          <Text>
            <En>HOME</En>
            <Ja>ホーム</Ja>
          </Text>
        </Flex>
        <Flex>
          <Icon>
            <FontAwesomeIcon icon={faCut} />
          </Icon>
          <Text>
            <En>SALON</En>
            <Ja>サロン・スタッフ紹介</Ja>
          </Text>
        </Flex>
        <Flex>
          <Icon>
            <FontAwesomeIcon icon={faClipboardList} />
          </Icon>
          <Text>
            <En>SERVICE</En>
            <Ja>メニュー案内</Ja>
          </Text>
        </Flex>
        <Flex>
          <Icon>
            <FontAwesomeIcon icon={faMapMarkedAlt} />
          </Icon>
          <Text>
            <En>ACCESS</En>
            <Ja>アクセス</Ja>
          </Text>
        </Flex>
      </Lists>
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
const Lists = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: ${styles.sizes.phone.dashboard + 1}px;
  width: calc(100% - ${styles.sizes.phone.dashboard + 1}px);
  height: 100%;
  color: white;
  font-size: 1.6rem;
  line-height: 1;
`
const Flex = styled.div`
  display: flex;
  align-items: center;
  &:not(:first-of-type) {
    margin-top: ${styles.sizes.phone.base()}px;
  }
  padding-top: ${styles.sizes.phone.base()}px;
  padding-left: ${styles.sizes.phone.base}px;
  border-top: 1px solid
    rgba(${functions.hex2rgb(styles.colors.light.border)}, 0.1);
  &:last-of-type {
    border-bottom: 1px solid
      rgba(${functions.hex2rgb(styles.colors.light.border)}, 0.1);
    padding-bottom: ${styles.sizes.phone.base()}px;
  }
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
`
const En = styled.div`
  font-weight: bold;
  letter-spacing: 0.33em;
`
const Ja = styled.div`
  margin-top: 7.5px;
  font-size: 1.2rem;
  letter-spacing: 0.33em;
`

export default Navigation
