import * as React from 'react'
import animations from '~/utils/animations'
import functions from '~/utils/functions'
import { IsPending } from '~/store/global/isPending'
import useEffectAsync from '~/hooks/base/useEffectAsync'

type UseOut = (params: {
  isPending: IsPending
  root: React.MutableRefObject<SVGSVGElement>
}) => void

const useOut: UseOut = params => {
  const { isPending, root } = params
  useEffectAsync({
    effect: async () => {
      if (!isPending.state) {
        animations.opacity(root.current, 0, 0.6, 'InOut')
        await functions.delay(0.6)
        animations.set(root.current, { display: 'none' })
      }
    },
    deps: [isPending.state]
  })
}

export default useOut
