import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Logo from '~/assets/svg/logo-baard.svg'

const Header: React.FC = () => (
  <Root to="/">
    <Logo />
  </Root>
)

const Root = styled(Link)`
  display: inline-block;
  width: 110px;
  height: 100%;
  overflow: hidden;
  svg {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
`

export default Header
