import * as React from 'react'
import styled from '~/utils/emotion'

const Navigation: React.FC = () => {
  return <Root>Navigation component</Root>
}

const Root = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
`

export default Navigation
