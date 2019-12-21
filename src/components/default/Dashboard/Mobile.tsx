import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/pro-duotone-svg-icons'
import styles from '~/utils/styles'
import Br from '~/components/base/Br'
import config from '~/utils/config'
import animations from '~/utils/animations'
import functions from '~/utils/functions'
import useEffectAsync from '~/hooks/base/useEffectAsync'

type Props = {
  options: { icon: IconDefinition }[]
}

const Mobile: React.FC<Props> = props => {
  const pages = Object.entries(config.pages)
  const icons = {}
  pages.forEach(value => {
    icons[value[1].path] = React.useRef<HTMLDivElement>(null)
  })
  if (window) {
    useEffectAsync({
      effect: async () => {
        const duration = 0.5
        const others: HTMLDivElement[] = []
        Object.entries(icons).forEach(value => {
          if (value[0] !== location.pathname) {
            const icon = value[1] as React.MutableRefObject<HTMLDivElement>
            others.push(icon.current)
          }
        })
        animations.scale(icons[location.pathname].current, 0, duration, 'In')
        animations.scale(others, 1, 1, 'InOut')
        animations.color(others, styles.colors.light.text, 1, 'InOut')
        animations.color(
          icons[location.pathname].current,
          styles.colors.light.logo,
          1,
          'InOut'
        )
        await functions.delay(duration)
        animations.scale(icons[location.pathname].current, 1, duration, 'Out')
      },
      deps: [location.pathname]
    })
  }
  return (
    <Root>
      {pages.map(value => {
        return (
          <Menu
            ref={icons[value[1].path]}
            to={value[1].path}
            key={value[1].path}
          >
            <SvgWrapper>
              <FontAwesomeIcon icon={value[1].icon} />
            </SvgWrapper>
          </Menu>
        )
      })}
      <Br />
      <Border />
      <Br />
      {props.options.map(value => {
        return (
          <OptionMenu key={value.icon.iconName}>
            <SvgWrapper>
              <FontAwesomeIcon icon={value.icon} />
            </SvgWrapper>
          </OptionMenu>
        )
      })}
      <PhoneMenu href={`tel:${config.tel.number}`}>
        <SvgWrapper>
          <FontAwesomeIcon icon={config.tel.icon} />
        </SvgWrapper>
      </PhoneMenu>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`
const svgHeight = 16
const Menu = styled(Link)`
  ${styles.mixins.flexCenter}
  width: 100%;
  height: ${styles.sizes.phone.base() * 2 + svgHeight}px;
  overflow: hidden;
`
const SvgWrapper = styled.div`
  width: 18px;
  height: ${svgHeight}px;
  text-align: center;
  svg {
    font-size: ${svgHeight}px;
    height: ${svgHeight}px;
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
  ${styles.mixins.flexCenter}
  width: 100%;
  height: ${styles.sizes.phone.base() * 2 + svgHeight}px;
  overflow: hidden;
  opacity: 0.3;
`
const PhoneMenu = styled.a`
  ${styles.mixins.flexCenter}
  width: 100%;
  height: ${styles.sizes.phone.base() * 2 + svgHeight}px;
  overflow: hidden;
`

export default Mobile
