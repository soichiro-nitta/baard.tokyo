import * as React from 'react'
import styled from '~/utils/emotion'

const Humberger: React.FC = () => {
  return (
    <Root>
      <Border1 />
      <Border2 />
      <Border3 />
    </Root>
  )
}

const Root = styled.div`
  margin-top: 3px;
  width: 20px;
`
const Border1 = styled.div`
  width: 100%;
  height: 2px;
  background: ${(props): string => props.theme.colors.light.logo};
`
const Border2 = styled(Border1)`
  margin-top: 4px;
  width: 75%;
`
const Border3 = styled(Border1)`
  margin-top: 4px;
  width: 90%;
`

export default Humberger
