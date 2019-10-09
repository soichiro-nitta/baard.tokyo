import * as React from 'react'
import styled from '~/utils/emotion'
import animations from '~/utils/animations'
import functions from '~/utils/functions'

const Shapes: React.FC = () => {
  const root = React.useRef()
  React.useEffect(() => {
    ;(async (): Promise<void> => {
      await functions.delay(3500)
      animations.shapeOut(root.current)
    })()
  })
  return <Root ref={root} />
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props): string => props.theme.colors.light.background};
`

export default Shapes
