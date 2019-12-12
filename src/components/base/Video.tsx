import * as React from 'react'
import styled from '@emotion/styled'
import config from '~/utils/config'
import { Playing } from '~/store/global/playing'
import { IsPending } from '~/store/global/isPending'
import useObserve from '~/hooks/base/useObserve'
import usePrevious from '~/hooks/base/usePrevious'

type Props = {
  playing: Playing
  isPending?: IsPending
  src: string
  rootMargin?: string
}

const Video: React.FC<Props> = props => {
  const src = `${config.firebase}${props.src}`
  const root = React.useRef<HTMLVideoElement>(null)
  const previous = usePrevious(props.playing.state)
  useObserve({
    ref: root,
    observeIn: ref => {
      root.current.load()
      ref.current.play()
      props.playing.dispatch({ type: 'set', payload: ref.current })
    },
    observeOut: ref => {
      ref.current.pause()
    },
    rootMargin: props.rootMargin
  })
  React.useEffect(() => {
    if (previous) previous.pause()
  }, [props.playing.state])
  React.useEffect(() => {
    if (props.isPending) {
      const loadedmetadata = (): void => {
        props.isPending.dispatch({ type: 'off' })
      }
      root.current.addEventListener('loadedmetadata', loadedmetadata)
      return (): void => {
        root.current.removeEventListener('loadedmetadata', loadedmetadata)
      }
    }
  }, [])
  return <Root ref={root} src={src} preload="none" muted playsInline loop />
}

const Root = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* opacity: 0; */
`

export default Video
