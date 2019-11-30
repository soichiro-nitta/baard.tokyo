import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/pro-duotone-svg-icons'
import styles from '~/utils/styles'
import Br from '~/components/base/Br'

type Props = {
  links: { name: string; to: string; icon: IconDefinition }[]
  options: { icon: IconDefinition }[]
  tel: { name: string; icon: IconDefinition; href: string }
}

const Mobile: React.FC<Props> = props => {
  return (
    <Root>
      {props.links.map(value => {
        return (
          <Menu to={value.to} key={value.to}>
            <Br />
            <SvgWrapper>
              <FontAwesomeIcon icon={value.icon} />
            </SvgWrapper>
            <Br />
          </Menu>
        )
      })}
      <Br />
      <Border />
      <Br />
      {props.options.map(value => {
        return (
          <OptionMenu key={value.icon.iconName}>
            <Br />
            <SvgWrapper>
              <FontAwesomeIcon icon={value.icon} />
            </SvgWrapper>
            <Br />
          </OptionMenu>
        )
      })}
      <PhoneMenu href={props.tel.href}>
        <Br />
        <SvgWrapper>
          <FontAwesomeIcon icon={props.tel.icon} />
        </SvgWrapper>
        <Br />
      </PhoneMenu>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`
const Menu = styled(Link)`
  display: block;
  width: 100%;
  overflow: hidden;
`
const SvgWrapper = styled.div`
  margin: 0 auto;
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
  margin: 0 auto;
  width: 18px;
  height: 1px;
  background: ${styles.colors.light.border};
`
const OptionMenu = styled.div`
  width: 100%;
  overflow: hidden;
  opacity: 0.3;
`
const PhoneMenu = styled.a`
  display: block;
  width: 100%;
  overflow: hidden;
`

export default Mobile
