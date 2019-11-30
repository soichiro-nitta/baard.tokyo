import * as React from 'react'
import { IsPending } from '~/store/global/isPending'
import animations from '~/utils/animations'

const useFadeIn = (params: {
  isPending: IsPending
  leave: boolean
  inner: React.MutableRefObject<HTMLDivElement>
}): void => {
  const { isPending, leave, inner } = params
  const duration = 1
  React.useEffect(() => {
    if (!isPending.state && !leave) {
      animations.set(inner.current, {
        x: '100%'
      })
      animations.x(inner.current, '0%', duration, 'Out')
      animations.opacity(inner.current, 1, duration, 'Out')
    }
  }, [isPending.state])
}

export default useFadeIn
