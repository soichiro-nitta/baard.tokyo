import * as React from 'react'
import animations from '~/utils/animations'

const useFadeIn = (params: {
  root: React.MutableRefObject<HTMLDivElement>
  leave: boolean
  isPending: boolean
}): void => {
  const { root, leave, isPending } = params
  React.useEffect(() => {
    if (!isPending && !leave) {
      animations.opacity(root.current, 1, 1, 'InOut')
      animations.scale(root.current, 1, 1, 'InOut')
      animations.x(root.current, '0%', 1, 'InOut')
    }
  }, [isPending])
}

export default useFadeIn
