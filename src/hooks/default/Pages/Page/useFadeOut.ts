import * as React from 'react'
import animations from '~/utils/animations'

const useFadeOut = (params: {
  root: React.MutableRefObject<HTMLDivElement>
  leave: boolean
  isPending: boolean
}): void => {
  const { root, leave, isPending } = params
  React.useEffect(() => {
    if (!isPending && leave) {
      animations.opacity(root.current, 0, 2, 'Out')
      animations.scale(root.current, 0.9, 1, 'InOut')
      animations.x(root.current, '-10%', 1, 'InOut')
    }
  }, [isPending])
}

export default useFadeOut
