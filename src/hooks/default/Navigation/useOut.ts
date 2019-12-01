import * as React from 'react'
import { Gnav } from '~/store/default/gnav'
import animations from '~/utils/animations'

type UseOut = (gnav: Gnav, root: React.MutableRefObject<HTMLDivElement>) => void

const useOut: UseOut = (gnav, root) => {
  React.useEffect(() => {
    if (!gnav.state) {
      animations.scale(root.current, 1.1, 1, 'InOut')
      animations.opacity(root.current, 0, 1, 'InOut')
    }
  }, [gnav.state])
}

export default useOut
