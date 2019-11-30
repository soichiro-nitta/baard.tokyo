import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/pro-duotone-svg-icons'
import styles from '~/utils/styles'

type Props = {
  links: { name: string; to: string; icon: IconDefinition }[]
  options: { icon: IconDefinition }[]
  tel: { name: string; icon: IconDefinition; href: string }
}

const Mobile: React.FC<Props> = props => {
  return (
    <>
      {props.links.map(value => {
        return (
          <LinkIcon to={value.to} key={value.to}>
            <FontAwesomeIcon icon={value.icon} />
          </LinkIcon>
        )
      })}
      <Border />
      {props.options.map(value => {
        return (
          <OptionIcon key={value.icon.iconName}>
            <FontAwesomeIcon icon={value.icon} />
          </OptionIcon>
        )
      })}
      <Phone href={props.tel.href}>
        <FontAwesomeIcon icon={props.tel.icon} />
      </Phone>
    </>
  )
}

const LinkIcon = styled(Link)`
  display: block;
  :not(:first-of-type) {
    margin-top: ${styles.sizes.phone.base() * 2}px;
  }
  width: 18px;
  text-align: center;
  svg {
    color: ${styles.colors.light.logo};
    font-size: 16px;
    height: 16px;
    vertical-align: top;
  }
`
const Border = styled.div`
  margin-top: ${styles.sizes.phone.base() * 2}px;
  width: 100%;
  height: 1px;
  background: ${styles.colors.light.border};
`
const OptionIcon = styled.div`
  display: block;
  margin-top: ${styles.sizes.phone.base() * 2}px;
  width: 18px;
  text-align: center;
  opacity: 0.3;
  svg {
    color: ${styles.colors.light.logo};
    font-size: 16px;
    height: 16px;
    vertical-align: top;
  }
`
const Phone = styled.a`
  display: block;
  margin-top: ${styles.sizes.phone.base() * 2}px;
  width: 100%;
  text-align: center;
  svg {
    color: ${styles.colors.light.logo};
    font-size: 16px;
    height: 16px;
    vertical-align: top;
  }
`

export default Mobile
