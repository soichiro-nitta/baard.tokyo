import * as React from 'react'
import { IsPending } from '~/store/global/isPending'
import animations from '~/utils/animations'

const useFadeIn = (params: {
  isPending: IsPending
  leave: boolean
  root: React.MutableRefObject<HTMLDivElement>
}): void => {
  const { isPending, leave, root } = params
  const duration = 1
  React.useEffect(() => {
    if (!isPending.state && !leave) {
      animations.set(root.current, {
        x: '100%'
      })
      animations.x(root.current, '0%', duration, 'Out')
      animations.opacity(root.current, 1, duration, 'Out')
    }
  }, [isPending.state])
}

export default useFadeIn
