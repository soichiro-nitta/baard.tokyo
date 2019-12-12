import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import { IsPending } from '~/store/global/isPending'
import { useLocal } from '~/store/default/Spinner'
import useIn from '~/hooks/default/Spinner/useIn'
import useOut from '~/hooks/default/Spinner/useOut'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import animations from '~/utils/animations'
import functions from '~/utils/functions'

type Props = {
  isPending: IsPending
}

const Spinner: React.FC<Props> = props => {
  const root = React.useRef<SVGSVGElement>(null)
  useEffectAsync({
    effect: async () => {
      const duration = 1
      if (props.isPending.state > 0) {
        animations.opacity(root.current, 1, duration, 'InOut')
      } else {
        animations.opacity(root.current, 0, duration, 'InOut')
      }
    },
    deps: [props.isPending.state]
  })
  return (
    <Root ref={root} viewBox="25 25 50 50">
      <Circle cx="50" cy="50" r="20" />
    </Root>
  )
}

const Root = styled.svg`
  width: ${styles.sizes.phone.scrollbar + 2}px;
  height: ${styles.sizes.phone.scrollbar + 2}px;
  transform-origin: center center;
  opacity: 0;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  animation: rotate 1.2s linear infinite;
`
const Circle = styled.circle`
  fill: none;
  stroke-width: 5;
  stroke-dasharray: 150, 200;
  stroke-dashoffset: -10;
  stroke: ${styles.colors.light.logo};
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
  animation: dash 0.9s ease-in-out infinite;
`

export default Spinner
