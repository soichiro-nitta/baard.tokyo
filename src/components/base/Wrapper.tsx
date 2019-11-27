import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

const Wrapper: React.FC = props => {
  return <Root>{props.children}</Root>
}

const Root = styled.div`
  padding: 0 ${styles.sizes.phone.base}px;
`

export default Wrapper
