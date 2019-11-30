import * as React from 'react'
import styled from '@emotion/styled'
import animations from '~/utils/animations'
import functions from '~/utils/functions'
import styles from '~/utils/styles'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import Logo from '~/assets/svg/logo.svg'
import { css } from '@emotion/core'

type RootTypes = React.MutableRefObject<HTMLDivElement> & {
  current: {
    children: {
      [index: number]: {
        children: {
          [index: number]: SVGPathElement
        }
      }
    }
  }
}

const Svg: React.FC = () => {
  const logo: RootTypes = React.useRef()
  const pathAnimation = (path): void => {
    const length = path.getTotalLength()
    animations.set(path, {
      strokeDasharray: length + ' ' + length,
      strokeDashoffset: length,
      opacity: 1,
      y: '30px',
      scale: 1.2
    })
    animations.strokeDashoffset(path, 0, 1, 'Out')
    animations.y(path, 0, 1, 'Out')
    animations.scale(path, 1, 1, 'Out')
    animations.fillOpacity(path, 1, 1, 'InOut')
    animations.strokeOpacity(path, 0, 1, 'InOut')
  }
  useEffectAsync({
    effect: async () => {
      const root = logo.current
      const svg = root.children[0]
      const paths = svg.children
      await functions.delay(1)
      pathAnimation(paths[0])
      await functions.delay(0.1)
      pathAnimation(paths[1])
      await functions.delay(0.1)
      pathAnimation(paths[2])
      await functions.delay(0.1)
      pathAnimation(paths[3])
      await functions.delay(0.1)
      pathAnimation(paths[4])
      await functions.delay(0.1)
      pathAnimation(paths[5])
      await functions.delay(0.1)
      pathAnimation(paths[6])
      await functions.delay(0.1)
      pathAnimation(paths[7])
      await functions.delay(0.1)
      pathAnimation(paths[8])
      await functions.delay(0.1)
      pathAnimation(paths[9])
      await functions.delay(0.1)
      pathAnimation(paths[10])
      await functions.delay(1.2)
      animations.y(paths, '-30px', 1, 'Out')
      animations.scale(paths, 0.8, 1, 'Out')
      animations.opacity(paths, 0, 1, 'Out')
    },
    deps: []
  })
  return (
    <Root ref={logo}>
      <Logo />
    </Root>
  )
}

const Root = styled.div`
  ${styles.mixins.flexCenter}
  width: 100%;
  height: 100%;
  svg {
    width: 50%;
    vertical-align: top;
    path {
      stroke: ${styles.colors.light.logo};
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: ${styles.colors.light.logo};
      fill-opacity: 0;
      opacity: 0;
    }
    ${styles.large(css`
      width: ${styles.sizes.phone.dashboard * 5}px;
    `)}
  }
`

export default Svg
