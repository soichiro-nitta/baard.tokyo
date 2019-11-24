import * as React from 'react'
import animations from '~/utils/animations'
import { IsPending } from '~/store/global/isPending'

type UseInOut = (params: {
  isPending: IsPending
  root: React.MutableRefObject<HTMLDivElement>
}) => void

const useInOut: UseInOut = params => {
  const { isPending, root } = params
  React.useEffect(() => {
    if (isPending.state) {
      animations.set(root.current, {
        x: '-100%'
      })
      animations.x(root.current, '0%', 1, 'InOut')
    } else {
      animations.x(root.current, '100%', 1, 'InOut')
    }
  }, [isPending.state])
}

export default useInOut
