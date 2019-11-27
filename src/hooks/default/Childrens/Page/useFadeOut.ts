import * as React from 'react'
import animations from '~/utils/animations'
import styles from '~/utils/styles'
import { IsPending } from '~/store/global/isPending'

const useFadeOut = (params: {
  isPending: IsPending
  leave: boolean
  root: React.MutableRefObject<HTMLDivElement>
}): void => {
  const { isPending, leave, root } = params
  const duration = 1
  React.useEffect(() => {
    if (!isPending.state && leave) {
      animations.opacity(root.current, 0, duration, 'InOut')
      animations.x(
        root.current,
        `${(styles.sizes.phone.base() * -1) / 2}px`,
        duration,
        'InOut'
      )
    }
  }, [isPending.state])
}

export default useFadeOut
