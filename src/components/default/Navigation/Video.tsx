import * as React from 'react'
import styled from '@emotion/styled'
import config from '~/utils/config'
import { Playing } from '~/store/global/playing'
import { Gnav } from '~/store/default/gnav'
import { Launched } from '~/store/default/launched'
import styles from '~/utils/styles'
import animations from '~/utils/animations'

type Props = {
  launched: Launched
  playing: Playing
  gnav: Gnav
  src: string
}

const Video: React.FC<Props> = props => {
  const src = `${config.firebase}${props.src}`
  const video = React.useRef<HTMLVideoElement>(null)
  const s = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    if (props.launched.state) {
      console.log('load')
      video.current.load()
      animations.opacity(s.current, 1, 1, 'InOut')
    }
    const loadedmetadata = (): void => {
      animations.opacity(video.current, 1, 1, 'InOut')
    }
    const canplay = (): void => {
      animations.opacity(s.current, 0, 1, 'InOut')
    }
    video.current.addEventListener('loadedmetadata', loadedmetadata)
    video.current.addEventListener('canplay', canplay)
    return (): void => {
      video.current.removeEventListener('loadedmetadata', loadedmetadata)
      video.current.removeEventListener('canplay', canplay)
    }
  }, [props.launched.state])
  React.useEffect(() => {
    if (props.gnav.state) {
      if (props.playing.state) props.playing.state.pause()
      video.current.play()
    } else {
      if (props.playing.state) props.playing.state.play()
      video.current.pause()
    }
  }, [props.gnav.state])
  return (
    <Root>
      <video ref={video} src={src} preload="none" muted playsInline loop />
      <SpinnerWrapper ref={s}>
        <Spinner viewBox="25 25 50 50">
          <Circle cx="50" cy="50" r="20" />
        </Spinner>
      </SpinnerWrapper>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  background: ${styles.colors.light.logo};
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
  }
`
const SpinnerWrapper = styled.div`
  ${styles.mixins.flexCenter}
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`
const Spinner = styled.svg`
  width: ${styles.sizes.phone.base() * 2}px;
  height: ${styles.sizes.phone.base() * 2}px;
  transform-origin: center center;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  animation: rotate 1.6s linear infinite;
`
const Circle = styled.circle`
  fill: none;
  stroke-width: 5;
  stroke-dasharray: 150, 200;
  stroke-dashoffset: -10;
  stroke: ${styles.colors.light.neutral};
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
  animation: dash 1.2s ease-in-out infinite;
`

export default Video
