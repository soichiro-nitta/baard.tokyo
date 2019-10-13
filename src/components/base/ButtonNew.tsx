import * as React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-duotone-svg-icons'
import styles from '~/utils/styles'

type Props = {
  to: string
  text: string
}

const ButtonNew: React.FC<Props> = props => (
  <Root href={props.to} target="_blank" rel="noopener noreferrer">
    {props.text}
    <FontAwesomeIcon icon={faLongArrowRight} />
  </Root>
)

const Root = styled.a`
  display: inline-block;
  padding: 10px;
  line-height: 1;
  border: 1px solid ${styles.colors.light.border};
  svg {
    margin-left: 7.5px;
  }
`

export default ButtonNew
