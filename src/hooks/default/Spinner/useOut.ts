import * as React from 'react'
import animations from '~/utils/animations'
import functions from '~/utils/functions'
import { IsPending } from '~/store/global/isPending'
import { Started } from '~/store/default/Spinner/started'
import useEffectAsync from '~/hooks/base/useEffectAsync'

type UseOut = (params: {
  isPending: IsPending
  started: Started
  root: React.MutableRefObject<SVGSVGElement>
}) => void

const useOut: UseOut = params => {
  const { isPending, started, root } = params
  const duration = 1
  useEffectAsync({
    effect: async () => {
      if (!isPending.state && started.state) {
        animations.opacity(root.current, 0, duration, 'InOut')
        await functions.delay(duration)
        animations.set(root.current, { display: 'none' })
        started.dispatch({ type: 'off' })
      }
    },
    deps: [isPending.state, started.state]
  })
}

export default useOut