import * as React from 'react'
import styled from '@emotion/styled'

type Props = {
  en: string
  ja: string
}

const H2: React.FC<Props> = props => {
  return (
    <Root>
      <En>{props.en}</En>
      <Ja>{props.ja}</Ja>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  line-height: 1;
`
const En = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  letter-spacing: 0.33em;
`
const Ja = styled.div`
  margin-top: 7.5px;
  font-size: 1.2rem;
  letter-spacing: 0.33em;
`

export default H2
