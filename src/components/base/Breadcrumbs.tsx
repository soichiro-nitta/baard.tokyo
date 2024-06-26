import * as React from 'react'
import { Link } from 'gatsby'

import styled from '@emotion/styled'
import { ChevronRight } from 'lucide-react'

type Props = {
  crumbs: {
    to: string
    name: string
  }[]
}

const Breadcrumbs: React.FC<Props> = props => {
  return (
    <Root>
      {props.crumbs.map((crumb, index) => {
        return (
          <Crumb key={crumb.name}>
            <ChevronRight style={{ width: '12px' }} strokeWidth={1} />
            {(index !== props.crumbs.length - 1 && (
              <CrumbLink to={crumb.to}>{crumb.name}</CrumbLink>
            )) || <CrumbNoLink>{crumb.name}</CrumbNoLink>}
          </Crumb>
        )
      })}
    </Root>
  )
}

const Root = styled.div`
  display: inline-block;
  line-height: 1;
  font-size: 1.2rem;
`
const margin = 11.25
const Crumb = styled.div`
  display: inline-flex;
  align-items: center;
  :not(:first-of-type) {
    margin-left: ${margin}px;
  }
  svg {
    margin-right: ${margin}px;
    vertical-align: top;
  }
`
const CrumbLink = styled(Link)`
  display: inline-block;
  text-decoration: underline;
`
const CrumbNoLink = styled.div`
  display: inline-block;
`

export default Breadcrumbs
