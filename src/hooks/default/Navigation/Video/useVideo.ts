import * as React from 'react'
import { Gnav } from '~/store/default/gnav'

type UseVideo = (params: {
  gnav: Gnav
  video: React.MutableRefObject<HTMLVideoElement>
}) => void

const useVideo: UseVideo = params => {
  const { gnav, video } = params
  React.useEffect(() => {
    if (gnav.state) {
      video.current.play()
    } else {
      video.current.pause()
    }
  }, [gnav.state])
}

export default useVideo
