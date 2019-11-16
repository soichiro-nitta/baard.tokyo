import * as React from 'react'
import animations from '~/utils/animations'

const useFadeIn = (params: {
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
    if (!isPending.state && !leave) {
      animations.opacity(root.current, 1, 1, 'InOut')
      animations.scale(root.current, 1, 1, 'InOut')
      animations.x(root.current, '0%', 1, 'InOut')
    }
  }, [isPending.state])
}

export default useFadeIn
