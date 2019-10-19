import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import styled from '@emotion/styled'
import config from '~/utils/config'
import styles from '~/utils/styles'

const Footer: React.FC = () => {
  return (
    <Root>
      <Text>© {new Date().getFullYear()}, BAARD.</Text>
      <Icons>
        <Icon href={config.facebook} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </Icon>
        <Icon href={config.instagram} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </Icon>
      </Icons>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${styles.sizes.phone.base}px;
  width: 100%;
  color: white;
  background: ${styles.colors.light.shape};
`
const Text = styled.div`
  ${styles.mixins.lhCrop(1.8)}
  letter-spacing: 0.33em;
  font-weight: bold;
`
const Icons = styled.div`
  ${styles.mixins.lhCrop(1.8)}
  text-align: right;
`
const Icon = styled.a`
  margin-left: ${styles.sizes.phone.base}px;
  font-size: 16px;
`

export default Footer
