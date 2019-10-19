import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

const Wrapper: React.FC = props => {
  return <Root>{props.children}</Root>
}

const Root = styled.div`
  margin-top: ${styles.sizes.phone.base}px;
  padding-top: ${styles.sizes.phone.base}px;
  padding-right: ${styles.sizes.phone.base}px;
  padding-left: ${styles.sizes.phone.base}px;
  border-top: 1px solid ${styles.colors.light.border};
`

export default Wrapper
