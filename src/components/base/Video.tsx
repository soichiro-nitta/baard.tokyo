import * as React from 'react'
import styled from '@emotion/styled'
import config from '~/utils/config'
import { Playing } from '~/store/global/playing'
import useObserve from '~/hooks/base/useObserve'
import useLoad from '~/hooks/base/video/useLoad'
import useCanplaythrough from '~/hooks/base/video/useCanplaythrough'

type Props = {
  playing: Playing
  src: string
  callback?: () => void
}

const Video: React.FC<Props> = props => {
  const src = config.dev ? `${props.src}` : `${config.firebase}/${props.src}`
  const root = React.useRef<HTMLDivElement>(null)
  const video = React.useRef<HTMLVideoElement>(null)
  useLoad(video)
  useCanplaythrough({ video, canplaythrough: props.callback })
  useObserve({
    ref: root,
    observeIn: () => {
      video.current.play()
      props.playing.dispatch({ type: 'set', payload: video.current })
    },
    observeOut: () => {
      video.current.pause()
      if (props.playing.state === video.current)
        props.playing.dispatch({ type: 'set', payload: null })
    }
  })
  return (
    <Root ref={root}>
      <video ref={video} src={src} preload="none" muted playsInline loop />
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* opacity: 0; */
  }
`

export default Video
