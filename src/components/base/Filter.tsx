import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

const Filter: React.FC = () => {
  return <Root />
}

const Root = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${styles.colors.light.shape};
  opacity: 0.3;
`

export default Filter
