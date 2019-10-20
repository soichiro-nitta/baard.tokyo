import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import functions from '~/utils/functions'

const Wrapper: React.FC = props => {
  return <Root>{props.children}</Root>
}

const Root = styled.div`
  padding: ${styles.sizes.phone.base}px;
  border-top: 1px solid
    rgba(${functions.hex2rgb(styles.colors.light.shape)}, 0.1);
`

export default Wrapper
