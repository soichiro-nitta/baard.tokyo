import * as React from 'react'
import { IsPending } from '~/store/global/isPending'
import animations from '~/utils/animations'

const useFadeIn = (params: {
  isPending: IsPending
  leave: boolean
  root: React.MutableRefObject<HTMLDivElement>
}): void => {
  const { isPending, leave, root } = params
  React.useEffect(() => {
    if (!isPending.state && !leave) {
      animations.opacity(root.current, 1, 1, 'InOut')
      animations.scale(root.current, 1, 1, 'InOut')
      animations.x(root.current, '0%', 1, 'InOut')
    }
  }, [isPending.state])
}

export default useFadeIn
