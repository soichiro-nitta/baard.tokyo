import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

const Br: React.FC = () => {
  return <Root />
}

const Root = styled.div`
  margin-top: ${styles.sizes.phone.base}px;
  border-top: 1px solid ${styles.colors.light.border};
`

export default Br
