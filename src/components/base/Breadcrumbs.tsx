import * as React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/pro-duotone-svg-icons'
import styled from '@emotion/styled'

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
            {index !== 0 && <FontAwesomeIcon icon={faAngleRight} />}
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
  font-size: 12px;
`
const margin = 11.25
const Crumb = styled.div`
  display: inline-block;
  :not(:first-of-type) {
    margin-left: ${margin}px;
  }
  svg {
    margin-right: ${margin}px;
    padding-bottom: 1.5px;
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
