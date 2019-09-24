import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

type Props = {
  siteTitle: string
}

const Header: React.FC<Props> = props => <Root to="/">{props.siteTitle}</Root>

const Root = styled(Link)`
  display: inline-block;
  font-size: 30px;
  font-weight: bold;
  line-height: 1;
  vertical-align: bottom;
`

export default Header
