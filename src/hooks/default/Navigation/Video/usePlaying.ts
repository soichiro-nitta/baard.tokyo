import * as React from 'react'
import { Playing } from '~/store/global/playing'
import { Gnav } from '~/store/default/gnav'

type UsePlaying = (params: { playing: Playing; gnav: Gnav }) => void

const usePlaying: UsePlaying = params => {
  const { playing, gnav } = params
  React.useEffect(() => {
    if (playing.state) {
      if (gnav.state) {
        playing.state.pause()
      } else {
        playing.state.play()
      }
    }
  }, [gnav.state])
}

export default usePlaying
