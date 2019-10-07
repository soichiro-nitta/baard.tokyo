import * as React from 'react'
import Div100vh from 'react-div-100vh'
import styled from '~/utils/emotion'
import functions from '~/utils/functions'
import opening from '~/utils/animations/opening'
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
  React.useEffect(() => {
    const root = signpole.current
    const signpoleWrapper = root.children[0]
    const svg = signpoleWrapper.children[0]
    const paths = svg.children
    const path1 = paths[0]
    const path2 = paths[1]
    const path3 = paths[2]
    ;(async (): Promise<void> => {
      opening.path(path1)
      await functions.delay(120)
      opening.path(path2)
      await functions.delay(120)
      opening.path(path3)
      await functions.delay(800)
      opening.leave(paths, root)
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
const SignpoleWrapper = styled(Div100vh)`
  ${(props): string => props.theme.mixins.flexCenter}
  width: 100%;
  height: 100%;
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
