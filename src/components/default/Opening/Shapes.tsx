import * as React from 'react'
import styled from '@emotion/styled'
import animations from '~/utils/animations'
import functions from '~/utils/functions'
import styles from '~/utils/styles'

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
  background: ${styles.colors.light.background};
`

export default Shapes
