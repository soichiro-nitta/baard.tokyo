import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import { IsPending } from '~/store/global/isPending'
import { useLocal } from '~/store/default/Progressbar'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import animations from '~/utils/animations'
import functions from '~/utils/functions'

type Props = {
  isPending: IsPending
}

const Progressbar: React.FC<Props> = props => {
  const local = useLocal()
  const root = React.useRef<HTMLDivElement>(null)
  const duration = 1
  useEffectAsync({
    effect: async () => {
      if (props.isPending.state) {
        animations.set(root.current, {
          transformOrigin: 'left center',
          scaleX: 0
        })
        animations.scaleX(root.current, 1, duration, 'InOut')
        animations.opacity(root.current, 1, duration, 'InOut')
        await functions.delay(duration)
        local.stretched.dispatch({ type: 'on' })
      }
    },
    deps: [props.isPending.state]
  })
  useEffectAsync({
    effect: async () => {
      if (!props.isPending.state && local.stretched.state) {
        animations.opacity(root.current, 0, duration, 'InOut')
        await functions.delay(duration)
        local.stretched.dispatch({ type: 'off' })
      }
    },
    deps: [props.isPending.state, local.stretched.state]
  })
  return <Root ref={root} />
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  background: ${styles.colors.light.logo};
  transform: scaleX(0);
  opacity: 0;
`

export default Progressbar
