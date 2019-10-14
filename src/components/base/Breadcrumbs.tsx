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
          <span key={crumb.name}>
            {(index !== props.crumbs.length - 1 && (
              <CrumbLink to={crumb.to}>
                {index !== 0 && <FontAwesomeIcon icon={faAngleRight} />}
                {crumb.name}
              </CrumbLink>
            )) || (
              <CrumbNoLink>
                {index !== 0 && <FontAwesomeIcon icon={faAngleRight} />}
                {crumb.name}
              </CrumbNoLink>
            )}
          </span>
        )
      })}
    </Root>
  )
}

const Root = styled.div`
  display: inline-block;
  line-height: 1;
`
const margin = 11.25
const CrumbLink = styled(Link)`
  display: inline-block;
  :not(:first-of-type) {
    margin-left: ${margin}px;
  }
  text-decoration: underline;
  svg {
    margin-right: ${margin}px;
    padding-bottom: 1.5px;
    vertical-align: top;
  }
`
const CrumbNoLink = styled.div`
  display: inline-block;
  margin-left: ${margin}px;
  svg {
    margin-right: ${margin}px;
    padding-bottom: 1.5px;
    vertical-align: top;
  }
`

export default Breadcrumbs
