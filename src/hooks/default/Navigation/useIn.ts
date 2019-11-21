import * as React from 'react'
import { Gnav } from '~/store/default/gnav'
import animations from '~/utils/animations'

type UseIn = (gnav: Gnav, root: React.MutableRefObject<HTMLDivElement>) => void

const useIn: UseIn = (gnav, root) => {
  React.useEffect(() => {
    if (gnav.state) {
      animations.opacity(root.current, 1, 1, 'InOut')
    }
  }, [gnav.state])
}

export default useIn
