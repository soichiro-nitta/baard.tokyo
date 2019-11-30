import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/pro-duotone-svg-icons'
import styles from '~/utils/styles'
import P from '~/components/base/P'

type Props = {
  links: { name: string; to: string; icon: IconDefinition }[]
  options: { icon: IconDefinition }[]
  tel: { name: string; icon: IconDefinition; href: string }
}

const Desktop: React.FC<Props> = props => {
  return (
    <>
      {props.links.map(value => {
        return (
          <LinkWrapper to={value.to} key={value.to}>
            <FontAwesomeIcon icon={value.icon} />
            <LinkName>
              <P>{value.name}</P>
            </LinkName>
          </LinkWrapper>
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
      <PhoneWrapper href={props.tel.href}>
        <FontAwesomeIcon icon={props.tel.icon} />
        <LinkName>
          <P>{props.tel.name}</P>
        </LinkName>
      </PhoneWrapper>
    </>
  )
}

const LinkWrapper = styled(Link)`
  display: flex;
  :not(:first-of-type) {
    margin-top: ${styles.sizes.phone.base() * 2}px;
  }
  text-align: center;
  svg {
    color: ${styles.colors.light.logo};
    font-size: 16px;
    height: 16px;
    vertical-align: top;
  }
`
const LinkName = styled.div`
  margin-left: ${styles.sizes.phone.base}px;
`
const Border = styled.div`
  margin-top: ${styles.sizes.phone.base() * 2}px;
  width: 18px;
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
const PhoneWrapper = styled.a`
  display: flex;
  margin-top: ${styles.sizes.phone.base() * 2}px;
  text-align: center;
  svg {
    color: ${styles.colors.light.logo};
    font-size: 16px;
    height: 16px;
    vertical-align: top;
  }
`

export default Desktop
