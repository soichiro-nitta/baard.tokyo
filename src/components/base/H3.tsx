import * as React from 'react'
import styled from '@emotion/styled'

const H3: React.FC = props => {
  return <Root>{props.children}</Root>
}

const Root = styled.div`
  font-weight: bold;
  letter-spacing: 0.33em;
  line-height: 1;
`

export default H3
