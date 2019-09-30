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
  font-size: 30px;
  font-weight: bold;
  line-height: 1;
  vertical-align: bottom;
`

export default Header
