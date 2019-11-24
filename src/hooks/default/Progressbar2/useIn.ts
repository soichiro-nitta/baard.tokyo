import * as React from 'react'
import animations from '~/utils/animations'
import functions from '~/utils/functions'
import { IsPending } from '~/store/global/isPending'
import useEffectAsync from '~/hooks/base/useEffectAsync'

type UseIn = (params: {
  isPending: IsPending
  root: React.MutableRefObject<HTMLDivElement>
}) => void

const useIn: UseIn = params => {
  const { isPending,  root } = params
  const duration = 1
  useEffectAsync({
    effect: async () => {
      if (isPending.state) {
        animations.set(root.current, {
          x: '-100%'
        })
        animations.x(root.current, '200%', duration, 'InOut')
        await functions.delay(duration / 4)
        animations.opacity(root.current, 1, duration / 4, 'InOut')
        await functions.delay(duration / 4)
        animations.opacity(root.current, 0, duration / 4, 'InOut')
        // animations.opacity(root.current, 0, duration / 2, 'In')
        // animations.opacity(root.current, 1, duration, 'InOut')
        // await functions.delay(duration)
        // stretched.dispatch({ type: 'on' })
      }
    },
    deps: [isPending.state]
  })
}

export default useIn
