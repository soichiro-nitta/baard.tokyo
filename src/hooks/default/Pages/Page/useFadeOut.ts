import * as React from 'react'
import { IsPending } from '~/store/global/isPending'
import animations from '~/utils/animations'

const useFadeOut = (params: {
  isPending: IsPending
  leave: boolean
  root: React.MutableRefObject<HTMLDivElement>
}): void => {
  const { isPending, leave, root } = params
  React.useEffect(() => {
    if (!isPending.state && leave) {
      animations.opacity(root.current, 0, 2, 'Out')
      animations.scale(root.current, 0.9, 1, 'InOut')
      animations.x(root.current, '-10%', 1, 'InOut')
    }
  }, [isPending.state])
}

export default useFadeOut
