import * as React from 'react'
import styled from '@emotion/styled'
import config from '~/utils/config'
import { Playing } from '~/store/global/playing'
import usePrevious from '~/hooks/base/usePrevious'
import { IsPending } from '~/store/global/isPending'
import styles from '~/utils/styles'
import animations from '~/utils/animations'
import { Launched } from '~/store/global/launched'

type Props = {
  launched: Launched
  playing: Playing
  src: string
  rootMargin?: string
  isPending: IsPending
}

const Video: React.FC<Props> = props => {
  const src = `${config.firebase}${props.src}`
  const [loaded, setLoaded] = React.useState<boolean>(false)
  const root = React.useRef<HTMLDivElement>(null)
  const i = React.useRef<HTMLDivElement>(null)
  const s = React.useRef<HTMLDivElement>(null)
  const v = React.useRef<HTMLVideoElement>(null)
  const g = React.useRef<HTMLDivElement>(null)
  const previous = usePrevious(props.playing.state)

  React.useEffect(() => {
    const loadedmetadata = (): void => {
      animations.opacity(i.current, 1, 1, 'InOut')
    }
    const canplay = (): void => {
      animations.opacity(s.current, 0, 1, 'InOut')
      v.current.play()
      let time = 0
      const raf = (): void => {
        if (v.current !== null) {
          if (time !== v.current.currentTime) {
            time = v.current.currentTime
            v.current.dispatchEvent(new CustomEvent('timeupdate'))
          }
          requestAnimationFrame(raf)
        }
      }
      requestAnimationFrame(raf)
    }
    const timeupdate = (): void => {
      if (v.current) {
        g.current.style.transform = `scaleX(${v.current.currentTime /
          v.current.duration})`
      }
    }
    v.current.addEventListener('loadedmetadata', loadedmetadata)
    v.current.addEventListener('canplay', canplay)
    v.current.addEventListener('timeupdate', timeupdate)
    return (): void => {
      v.current.removeEventListener('loadedmetadata', loadedmetadata)
      v.current.removeEventListener('canplay', canplay)
    }
  }, [])

  React.useEffect(() => {
    if (!props.isPending.state && props.launched.state) {
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            if (!loaded) {
              animations.opacity(s.current, 1, 1, 'InOut')
              v.current.load()
              setLoaded(true)
            } else {
              v.current.play()
            }
            props.playing.dispatch({ type: 'set', payload: v.current })
          } else {
            v.current.pause()
          }
        },
        {
          rootMargin: props.rootMargin
        }
      )
      observer.observe(root.current)
      return (): void => {
        observer.unobserve(root.current)
      }
    }
  }, [props.isPending.state, loaded, props.launched.state])

  React.useEffect(() => {
    if (props.isPending.state) {
      v.current.pause()
    }
  }, [props.isPending.state])

  React.useEffect(() => {
    if (previous) previous.pause()
  }, [props.playing.state])

  return (
    <Root ref={root}>
      <Inner ref={i}>
        <V ref={v} src={src} preload="none" muted playsInline loop />
        <Bar />
        <Guage ref={g} />
      </Inner>
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
  background: var(--brand);
`
const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0;
`
const V = styled.video`
  width: 100%;
  height: calc(100% - 2px);
  object-fit: cover;
`
const Bar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: var(--neutral);
`
const Guage = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: var(--brand);
  transform: scaleX(0);
  transform-origin: left center;
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
  stroke: var(--onPictureShape);
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
