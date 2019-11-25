import * as React from 'react'
import animations from '~/utils/animations'
import functions from '~/utils/functions'
import { IsPending } from '~/store/global/isPending'
import { Squashed } from '~/store/default/Scrollbar/squashed'
import useEffectAsync from '~/hooks/base/useEffectAsync'

type UseOut = (params: {
  isPending: IsPending
  squashed: Squashed
  root: React.MutableRefObject<HTMLDivElement>
}) => void

const useOut: UseOut = params => {
  const { isPending, squashed, root } = params
  const duration = 0.6
  useEffectAsync({
    effect: async () => {
      if (isPending.state) {
        animations.scaleX(root.current, 0, duration, 'In')
        await functions.delay(duration)
        squashed.dispatch({ type: 'on' })
      }
    },
    deps: [isPending.state]
  })
}

export default useOut
