import * as React from 'react'
import styled from '@emotion/styled'
import animations from '~/utils/animations'
import functions from '~/utils/functions'
import styles from '~/utils/styles'
import useEffectAsync from '~/hooks/base/useEffectAsync'

const Background: React.FC = () => {
  const root = React.useRef()
  useEffectAsync(
    async () => {
      await functions.delay(3.5)
      animations.opacity(root.current, 0, 1, 'In')
    },
    { deps: [] }
  )
  return <Root ref={root} />
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  background: ${styles.colors.light.background};
`

export default Background
