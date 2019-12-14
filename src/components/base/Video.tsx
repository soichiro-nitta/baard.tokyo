import * as React from 'react'
import styled from '@emotion/styled'
import config from '~/utils/config'
import { Playing } from '~/store/global/playing'
import useObserve from '~/hooks/base/useObserve'
import usePrevious from '~/hooks/base/usePrevious'
import { IsPending } from '~/store/global/isPending'

type Props = {
  playing: Playing
  src: string
  rootMargin?: string
  isPending: IsPending
}

const Video: React.FC<Props> = props => {
  const src = `${config.firebase}${props.src}`
  const root = React.useRef<HTMLVideoElement>(null)
  const previous = usePrevious(props.playing.state)
  // useObserve({
  //   ref: root,
  //   observeIn: ref => {
  //     ref.current.play()
  //     props.playing.dispatch({ type: 'set', payload: ref.current })
  //   },
  //   observeOut: ref => {
  //     ref.current.pause()
  //   },
  //   rootMargin: props.rootMargin
  // })
  React.useEffect(() => {
    if (!props.isPending.state) {
      console.log('isPending false')
      root.current.load()
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            root.current.play()
            props.playing.dispatch({ type: 'set', payload: root.current })
          } else {
            root.current.pause()
          }
        },
        {
          rootMargin: props.rootMargin
        }
      )
      observer.observe(root.current)
      return (): void => observer.unobserve(root.current)
    }
  }, [props.isPending.state])
  React.useEffect(() => {
    if (previous) previous.pause()
  }, [props.playing.state])
  return <Root ref={root} src={src} preload="none" muted playsInline loop />
}

const Root = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* opacity: 0; */
`

export default Video
