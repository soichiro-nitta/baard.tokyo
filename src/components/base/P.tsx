import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

const P: React.FC = props => {
  return <Root>{props.children}</Root>
}

const Root = styled.div`
  ${styles.mixins.lhCrop(2)}
`

export default P
