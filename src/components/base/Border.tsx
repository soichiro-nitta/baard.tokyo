import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

const Border: React.FC = () => {
  return <Root />
}

const Root = styled.div`
  width: 100%;
  height: 1px;
  background: var(--border);
  transition: 'color 0.7s ease-out, background 0.7s ease-out';
`

export default Border
