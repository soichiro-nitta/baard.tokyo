import * as React from 'react'
import { TweenMax, Expo } from 'gsap'
import styled from '~/utils/emotion'
import functions from '~/utils/functions'
import Signpole from '~/assets/svg/signpole.svg'

type SignpoleTypes = React.MutableRefObject<HTMLDivElement> & {
  current: {
    children: {
      [index: number]: {
        children: {
          [index: number]: {
            children: {
              [index: number]: SVGPathElement
            }
          }
        }
      }
    }
  }
}

const Opening: React.FC = () => {
  const signpole: SignpoleTypes = React.useRef()
  const pathAnimation = async (path: SVGPathElement): Promise<void> => {
    const length = path.getTotalLength()
    await functions.raf()
    TweenMax.set(path, {
      strokeDasharray: length + ' ' + length,
      strokeDashoffset: length,
      opacity: 1,
      y: '30px',
      scale: 1.2
    })
    TweenMax.to(path, 1, {
      strokeDashoffset: 0,
      y: 0,
      scale: 1,
      ease: Expo.easeOut
    })
    TweenMax.to(path, 1, {
      fillOpacity: 1,
      strokeOpacity: 0,
      ease: Expo.easeInOut
    })
  }
  const leaveAnimation = async (
    paths: { [index: number]: SVGPathElement },
    root: HTMLDivElement
  ): Promise<void> => {
    await functions.raf()
    TweenMax.to(root, 1, {
      height: 0,
      ease: Expo.easeInOut
    })
    await functions.delay(350)
    TweenMax.to(paths, 1, {
      y: '-30px',
      ease: Expo.easeOut
    })
  }
  React.useEffect(() => {
    const root = signpole.current
    const signpoleWrapper = root.children[0]
    const svg = signpoleWrapper.children[0]
    const paths = svg.children
    const path1 = paths[0]
    const path2 = paths[1]
    const path3 = paths[2]
    ;(async (): Promise<void> => {
      pathAnimation(path1)
      await functions.delay(120)
      pathAnimation(path2)
      await functions.delay(120)
      pathAnimation(path3)
      await functions.delay(800)
      leaveAnimation(paths, root)
    })()
  })
  return (
    <Root ref={signpole}>
      <SignpoleWrapper>
        <Signpole />
      </SignpoleWrapper>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const SignpoleWrapper = styled.div`
  ${(props): string => props.theme.mixins.flexCenter}
  width: 100%;
  height: 100vh;
  background: ${(props): string => props.theme.colors.light.background};
  svg {
    width: 50px;
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

export default Opening
