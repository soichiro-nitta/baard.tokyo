import * as React from 'react'
import animations from '~/utils/animations'
import functions from '~/utils/functions'
import styles from '~/utils/styles'
import { IsPending } from '~/store/global/isPending'
import useEffectAsync from '~/hooks/base/useEffectAsync'

const useFadeOut = (params: {
  isPending: IsPending
  leave: boolean
  root: React.MutableRefObject<HTMLDivElement>
}): void => {
  const { isPending, leave, root } = params
  const duration = 0.8
  useEffectAsync({
    effect: async () => {
      if (!isPending.state && leave) {
        await functions.delay(1 - duration)
        animations.opacity(root.current, 0, duration, 'Out')
        animations.x(
          root.current,
          `${(styles.sizes.phone.base() * -1) / 2}px`,
          duration,
          'Out'
        )
      }
    },
    deps: [isPending.state]
  })
}

export default useFadeOut
