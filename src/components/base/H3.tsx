import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

const H3: React.FC = props => {
  return <Root>{props.children}</Root>
}

const Root = styled.div`
  font-weight: bold;
  letter-spacing: 0.33em;
  ${styles.mixins.lhCrop(2)}
`

export default H3
