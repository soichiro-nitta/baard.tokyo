import * as React from 'react'
import Div100vh from 'react-div-100vh'
import styled from '~/utils/emotion'
import functions from '~/utils/functions'
import opening from '~/utils/animations/opening'
import Logo from '~/assets/svg/logo.svg'
import Background from '~/components/default/Background'

type Props = {
  setOpening: Function
}

type Logo = React.MutableRefObject<HTMLDivElement> & {
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

const Opening: React.FC<Props> = props => {
  const logo: Logo = React.useRef()
  React.useEffect(() => {
    const root = logo.current
    const logoWrapper = root.children[1]
    const svg = logoWrapper.children[0]
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
      opening.path(path1)
      await functions.delay(120)
      opening.path(path2)
      await functions.delay(120)
      opening.path(path3)
      await functions.delay(120)
      opening.path(path4)
      await functions.delay(120)
      opening.path(path5)
      await functions.delay(120)
      opening.path(path6)
      await functions.delay(120)
      opening.path(path7)
      await functions.delay(120)
      opening.path(path8)
      await functions.delay(120)
      opening.path(path9)
      await functions.delay(120)
      opening.path(path10)
      await functions.delay(120)
      opening.path(path11)
      await functions.delay(800)
      opening.leave(paths, root)
      await functions.delay(1350)
      props.setOpening(true)
    })()
  })
  return (
    <Root ref={logo}>
      <BackgroundWrapper>
        <Background />
      </BackgroundWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: ${(props): string => props.theme.colors.light.background};
`
const BackgroundWrapper = styled(Div100vh)`
  display: flex;
  width: 100%;
  height: 100%;
`
const Background1 = styled.div`
  width: ${(props): number => props.theme.sizes.phone.dashboard}px;
  height: 100%;
  background: ${(props): string => props.theme.colors.light.background};
  border-right: 1px solid #ccc;
`
const Background2 = styled(Background1)`
  width: calc(
    (100% - ${(props): number => props.theme.sizes.phone.dashboard * 2}px) / 2
  );
`
const Background3 = Background2
const Background4 = Background1
const LogoWrapper = styled.div`
  position: absolute;
  top: 0;
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

export default Opening
