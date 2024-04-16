import * as React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faFacebookSquare,
//   faInstagram
// } from '@fortawesome/free-brands-svg-icons'
import styled from '@emotion/styled'
import config from '~/utils/config'
import styles from '~/utils/styles'
import H3 from '../base/H3'

const Footer: React.FC = () => {
  return (
    <Root>
      <H3>© {new Date().getFullYear()}, BAARD.</H3>
      <Icons>
        <Icon href={config.facebook} target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon icon={faFacebookSquare} /> */}
        </Icon>
        <Icon href={config.instagram} target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon icon={faInstagram} /> */}
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
  color: var(--clearly);
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
