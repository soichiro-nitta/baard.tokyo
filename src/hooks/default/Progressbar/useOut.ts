import * as React from 'react'
import animations from '~/utils/animations'
import functions from '~/utils/functions'
import { IsPending } from '~/store/global/isPending'
import { Stretched } from '~/store/default/Progressbar/stretched'
import useEffectAsync from '~/hooks/base/useEffectAsync'

type UseOut = (params: {
  isPending: IsPending
  stretched: Stretched
  root: React.MutableRefObject<HTMLDivElement>
}) => void

const useOut: UseOut = params => {
  const { isPending, stretched, root } = params
  const duration = 1
  useEffectAsync({
    effect: async () => {
      if (!isPending.state && stretched.state) {
        animations.opacity(root.current, 0, duration, 'InOut')
        await functions.delay(duration)
        stretched.dispatch({ type: 'off' })
      }
    },
    deps: [isPending.state, stretched.state]
  })
}

export default useOut
