import * as React from 'react'
import styled from '@emotion/styled'
import config from '~/utils/config'
import { Playing } from '~/store/global/playing'
import { Gnav } from '~/store/default/gnav'
import useLoad from '~/hooks/default/Navigation/Video/useLoad'
import usePlaying from '~/hooks/default/Navigation/Video/usePlaying'
import useVideo from '~/hooks/default/Navigation/Video/useVideo'

type Props = {
  playing: Playing
  gnav: Gnav
  src: string
}

const Video: React.FC<Props> = props => {
  const src = config.dev ? `${props.src}` : `${config.firebase}/${props.src}`
  const video = React.useRef<HTMLVideoElement>(null)
  useLoad({ video })
  usePlaying({ playing: props.playing, gnav: props.gnav })
  useVideo({ gnav: props.gnav, video })
  return (
    <Root>
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
