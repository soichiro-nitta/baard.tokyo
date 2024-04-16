import * as React from 'react'
import styled from '@emotion/styled'
import config from '~/utils/config'
import styles from '~/utils/styles'
import H3 from '../base/H3'
import { Facebook, Instagram } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <Root>
      <H3>© {new Date().getFullYear()}, BAARD.</H3>
      <Icons>
        <Icon href={config.facebook} target="_blank" rel="noopener noreferrer">
          <Facebook style={{ width: '16px' }} strokeWidth={2.5} />
        </Icon>
        <Icon href={config.instagram} target="_blank" rel="noopener noreferrer">
          <Instagram style={{ width: '16px' }} strokeWidth={2.5} />
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
