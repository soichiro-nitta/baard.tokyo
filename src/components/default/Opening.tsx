import * as React from 'react'
import styled from '~/utils/emotion'

const Opening: React.FC = () => {
  return <Root>This is Opening component</Root>
}

const Root = styled.div`
  position: fixed;
  top: 0;
`

export default Opening
