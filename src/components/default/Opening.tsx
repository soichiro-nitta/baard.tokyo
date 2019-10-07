import * as React from 'react'
import { TweenMax, Expo } from 'gsap'
import styled from '~/utils/emotion'
import Signpole from '~/assets/svg/signpole.svg'

type SignpoleTypes = React.MutableRefObject<HTMLDivElement> & {
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

const Opening: React.FC = () => {
  const signpole: SignpoleTypes = React.useRef()
  React.useEffect(() => {
    const root = signpole.current
    const svg = root.children[0]
    const paths = svg.children
    const path = paths[0]
    const length = path.getTotalLength()
    TweenMax.set(paths, {
      strokeDasharray: length + ' ' + length,
      strokeDashoffset: length
    })
    TweenMax.to(paths, 1.5, {
      strokeDashoffset: 0,
      ease: Expo.easeInOut
    })
    TweenMax.to(paths, 1.5, {
      strokeOpacity: 0,
      fillOpacity: 1,
      ease: Expo.easeInOut
    })
    TweenMax.to(paths, 2, {
      opacity: 1,
      ease: Expo.easeInOut
    })
  })
  return (
    <Root ref={signpole}>
      <Signpole />
    </Root>
  )
}

const Root = styled.div`
  ${(props): string => props.theme.mixins.flexCenter}
  width: 100%;
  height: 100%;
  background: ${(props): string => props.theme.colors.light.background};
  svg {
    width: 35px;
    vertical-align: top;
    path {
      stroke: ${(props): string => props.theme.colors.light.logo};
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: ${(props): string => props.theme.colors.light.logo};
      fill-opacity: 0;
    }
  }
`

export default Opening
