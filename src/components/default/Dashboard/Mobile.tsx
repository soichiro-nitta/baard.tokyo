import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/pro-duotone-svg-icons'
import styles from '~/utils/styles'
import Br from '~/components/base/Br'
import config from '~/utils/config'

type Props = {
  options: { icon: IconDefinition }[]
}

const Mobile: React.FC<Props> = props => {
  const pages = Object.entries(config.pages)
  return (
    <Root>
      {pages.map(value => {
        return (
          <Menu to={value[1].path} key={value[1].path}>
            <Br />
            <SvgWrapper>
              <FontAwesomeIcon icon={value[1].icon} />
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
      <PhoneMenu href={`tel:${config.tel.number}`}>
        <Br />
        <SvgWrapper>
          <FontAwesomeIcon icon={config.tel.icon} />
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
