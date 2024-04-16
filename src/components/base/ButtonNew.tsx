import * as React from 'react'
import styled from '@emotion/styled'
import { ArrowRight } from 'lucide-react'

type Props = {
  to: string
  text: string
}

const ButtonNew: React.FC<Props> = props => (
  <Root href={props.to} target="_blank" rel="noopener noreferrer">
    {props.text}
    <ArrowRight style={{ width: '16px' }} strokeWidth={3} />
  </Root>
)

const Root = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 10px;
  line-height: 1;
  border: 1px solid var(--border);
  svg {
    margin-left: 7.5px;
  }
`

export default ButtonNew
