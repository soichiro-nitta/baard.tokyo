import * as React from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

type Props = {
  icon: IconDefinition
  en: string
  ja: string
}

const Header: React.FC<Props> = props => {
  return (
    <Root>
      <Icon>
        <FontAwesomeIcon icon={props.icon} />
      </Icon>
      <Text>
        <En>{props.en}</En>
        <Ja>{props.ja}</Ja>
      </Text>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  align-items: center;
`
const Icon = styled.div`
  width: 20px;
  text-align: center;
  svg {
    font-size: 16px;
    height: 16px;
  }
`
const Text = styled.div`
  margin-left: ${styles.sizes.phone.base}px;
  line-height: 1;
`
const En = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 0.33em;
`
const Ja = styled.div`
  margin-top: 7.5px;
  font-size: 1rem;
  letter-spacing: 0.33em;
`

export default Header
