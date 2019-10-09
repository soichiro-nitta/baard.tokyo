import * as React from 'react'
import styled from '~/utils/emotion'
import animations from '~/utils/animations'
import functions from '~/utils/functions'
import Logo from '~/assets/svg/logo.svg'

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
  React.useEffect(() => {
    const root = logo.current
    const svg = root.children[0]
    const paths = svg.children
    const path1 = paths[0]
    const path2 = paths[1]
    const path3 = paths[2]
    const path4 = paths[3]
    const path5 = paths[4]
    const path6 = paths[5]
    const path7 = paths[6]
    const path8 = paths[7]
    const path9 = paths[8]
    const path10 = paths[9]
    const path11 = paths[10]
    ;(async (): Promise<void> => {
      await functions.delay(1000)
      animations.path(path1)
      await functions.delay(100)
      animations.path(path2)
      await functions.delay(100)
      animations.path(path3)
      await functions.delay(100)
      animations.path(path4)
      await functions.delay(100)
      animations.path(path5)
      await functions.delay(100)
      animations.path(path6)
      await functions.delay(100)
      animations.path(path7)
      await functions.delay(100)
      animations.path(path8)
      await functions.delay(100)
      animations.path(path9)
      await functions.delay(100)
      animations.path(path10)
      await functions.delay(100)
      animations.path(path11)
      await functions.delay(1200)
      animations.paths(paths)
    })()
  })
  return (
    <Root ref={logo}>
      <Logo />
    </Root>
  )
}

const Root = styled.div`
  ${(props): string => props.theme.mixins.flexCenter}
  width: 100%;
  height: 100%;
  svg {
    width: 50%;
    vertical-align: top;
    path {
      stroke: ${(props): string => props.theme.colors.light.logo};
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: ${(props): string => props.theme.colors.light.logo};
      fill-opacity: 0;
      opacity: 0;
    }
  }
`

export default Svg
