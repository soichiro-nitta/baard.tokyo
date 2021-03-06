import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

const Exhibition: React.FC = props => {
  return <Root>{props.children}</Root>
}

const Root = styled.div`
  padding-right: ${styles.sizes.phone.base}px;
`

export default Exhibition
