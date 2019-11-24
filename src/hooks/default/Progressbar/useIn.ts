import * as React from 'react'
import animations from '~/utils/animations'
import functions from '~/utils/functions'
import { IsPending } from '~/store/global/isPending'
import { Stretched } from '~/store/default/Progressbar/stretched'
import useEffectAsync from '~/hooks/base/useEffectAsync'

type UseIn = (params: {
  isPending: IsPending
  stretched: Stretched
  root: React.MutableRefObject<HTMLDivElement>
}) => void

const useIn: UseIn = params => {
  const { isPending, stretched, root } = params
  const duration = 1
  useEffectAsync({
    effect: async () => {
      if (isPending.state) {
        animations.set(root.current, {
          transformOrigin: 'left center',
          scaleX: 0
        })
        animations.scaleX(root.current, 1, duration, 'InOut')
        animations.opacity(root.current, 1, duration, 'InOut')
        await functions.delay(duration)
        stretched.dispatch({ type: 'on' })
      }
    },
    deps: [isPending.state]
  })
}

export default useIn
