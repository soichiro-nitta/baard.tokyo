import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/pro-duotone-svg-icons'
import styles from '~/utils/styles'
import P from '~/components/base/P'
import Wrapper from '~/components/base/Wrapper'
import Border from '~/components/base/Border'
import Br from '~/components/base/Br'

type Props = {
  links: { name: string; to: string; icon: IconDefinition }[]
  options: { icon: IconDefinition }[]
  tel: { name: string; icon: IconDefinition; href: string }
}

const Desktop: React.FC<Props> = props => {
  return (
    <Root>
      {props.links.map(value => {
        return (
          <div key={value.to}>
            <Border />
            <Br />
            <Border />
            <Menu to={value.to}>
              <Br />
              <Wrapper>
                <Flex>
                  <SvgWrapper>
                    <FontAwesomeIcon icon={value.icon} />
                  </SvgWrapper>
                  <LinkName>
                    <P>{value.name}</P>
                  </LinkName>
                </Flex>
              </Wrapper>
              <Br />
            </Menu>
          </div>
        )
      })}
      {props.options.map(value => {
        return (
          <div key={value.icon.iconName}>
            <Border />
            <Br />
            <Border />
            <Br />
            <OptionWrapper>
              <Wrapper>
                <Flex>
                  <SvgWrapper>
                    <FontAwesomeIcon icon={value.icon} />
                  </SvgWrapper>
                </Flex>
              </Wrapper>
            </OptionWrapper>
            <Br />
          </div>
        )
      })}
      <Border />
      <Br />
      <Border />
      <PhoneMenu href={props.tel.href}>
        <Br />
        <Wrapper>
          <Flex>
            <SvgWrapper>
              <FontAwesomeIcon icon={props.tel.icon} />
            </SvgWrapper>
            <LinkName>
              <P>{props.tel.name}</P>
            </LinkName>
          </Flex>
        </Wrapper>
        <Br />
      </PhoneMenu>
      <Border />
      <Br />
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
  overflow: hidden;
`
const Flex = styled.div`
  display: flex;
`
const SvgWrapper = styled.div`
  width: 18px;
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
const OptionWrapper = styled.div`
  opacity: 0.3;
`
const PhoneMenu = styled.a`
  display: block;
  overflow: hidden;
`

export default Desktop
