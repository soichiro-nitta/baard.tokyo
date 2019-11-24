import * as React from 'react'
import styled from '@emotion/styled'
import animations from '~/utils/animations'
import styles from '~/utils/styles'
import { IsPending } from '~/store/global/isPending'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import functions from '~/utils/functions'

type Props = {
  isPending: IsPending
}

const Progressbar: React.FC<Props> = props => {
  const root = React.useRef(null)
  useEffectAsync({
    effect: async () => {
      if (props.isPending.state) {
        animations.set(root.current, {
          x: '-100%'
        })
        animations.x(root.current, '0%', 1, 'InOut')
      } else {
        animations.x(root.current, '100%', 1, 'InOut')
      }
    },
    deps: [props.isPending.state]
  })
  return <Root ref={root} />
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  background: ${styles.colors.light.logo};
`

export default Progressbar
