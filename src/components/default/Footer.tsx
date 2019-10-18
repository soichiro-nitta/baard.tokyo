import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import styled from '@emotion/styled'
import config from '~/utils/config'
import styles from '~/utils/styles'

const Humberger: React.FC = () => {
  return (
    <Root>
      <Footer>
        <Text>© {new Date().getFullYear()}, BAARD Barber.</Text>
        <Icons>
          <Icon
            href={config.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </Icon>
          <Icon
            href={config.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Icon>
        </Icons>
      </Footer>
    </Root>
  )
}

const Root = styled.div`
  border-top: 1px solid ${styles.colors.light.border};
  border-bottom: 1px solid ${styles.colors.light.border};
`
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${styles.sizes.phone.base}px 0;
  padding: ${styles.sizes.phone.base}px;
  width: calc(100% - ${styles.sizes.phone.base}px);
  color: white;
  background: ${styles.colors.light.shape};
`
const Text = styled.div`
  ${styles.mixins.lhCrop(1.8)}
`
const Icons = styled.div`
  ${styles.mixins.lhCrop(1.8)}
  text-align: right;
`
const Icon = styled.a`
  margin-left: ${styles.sizes.phone.base}px;
  font-size: 16px;
`

export default Humberger
