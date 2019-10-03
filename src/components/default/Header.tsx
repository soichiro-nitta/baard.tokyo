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
  height: 100%;
  overflow: hidden;
  svg {
    height: 100%;
    vertical-align: top;
    path {
      fill: #314458;
    }
  }
`

export default Header
