import * as React from 'react'
import animations from '~/utils/animations'
import functions from '~/utils/functions'
import { IsPending } from '~/store/global/isPending'
import { Squashed } from '~/store/default/Scrollbar/squashed'
import useEffectAsync from '~/hooks/base/useEffectAsync'

type UseIn = (params: {
  isPending: IsPending
  squashed: Squashed
  root: React.MutableRefObject<HTMLDivElement>
}) => void

const useIn: UseIn = params => {
  const { isPending, squashed, root } = params
  const duration = 0.6
  useEffectAsync({
    effect: async () => {
      if (!isPending.state && squashed.state) {
        await functions.delay(1)
        animations.scaleX(root.current, 1, duration, 'Out')
        await functions.delay(duration)
        squashed.dispatch({ type: 'off' })
      }
    },
    deps: [isPending.state, squashed.state]
  })
}

export default useIn
