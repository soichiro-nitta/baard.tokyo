import * as React from 'react'
import animations from '~/utils/animations'

const useFadeOut = (params: {
  root: React.MutableRefObject<HTMLDivElement>
  leave: boolean
  isPending: {
    state: HTMLVideoElement
    dispatch: React.Dispatch<{
      type: 'on' | 'off'
    }>
  }
}): void => {
  const { root, leave, isPending } = params
  React.useEffect(() => {
    if (!isPending.state && leave) {
      animations.opacity(root.current, 0, 2, 'Out')
      animations.scale(root.current, 0.9, 1, 'InOut')
      animations.x(root.current, '-10%', 1, 'InOut')
    }
  }, [isPending.state])
}

export default useFadeOut
