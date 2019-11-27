import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

const Border: React.FC = () => {
  return <Root />
}

const Root = styled.div`
  width: 100%;
  height: 1px;
  background: ${styles.colors.light.border};
`

export default Border
