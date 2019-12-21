import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/pro-duotone-svg-icons'
import styles from '~/utils/styles'
import Br from '~/components/base/Br'
import config from '~/utils/config'
import animations from '~/utils/animations'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import functions from '~/utils/functions'

type Props = {
  options: { icon: IconDefinition }[]
}

const Mobile: React.FC<Props> = props => {
  const pages = Object.entries(config.pages)
  const icons = {}
  const circles = {}
  pages.forEach(value => {
    icons[value[1].path] = React.useRef<HTMLDivElement>(null)
    circles[value[1].path] = React.useRef<HTMLDivElement>(null)
  })
  if (typeof window !== `undefined`) {
    useEffectAsync({
      effect: async () => {
        const others: HTMLDivElement[] = []
        Object.entries(icons).forEach(value => {
          if (value[0] !== location.pathname) {
            const icon = value[1] as React.MutableRefObject<HTMLDivElement>
            others.push(icon.current)
          }
        })
        animations.scale(circles[location.pathname].current, 1, 0.7, 'InOut')
        animations.opacity(circles[location.pathname].current, 0, 0.7, 'InOut')
        animations.color(others, styles.colors.light.text, 0.7, 'InOut')
        animations.scale(icons[location.pathname].current, 1.2, 0.7, 'InOut')
        animations.color(
          icons[location.pathname].current,
          styles.colors.light.logo,
          0.7,
          'InOut'
        )
        await functions.delay(0.7)
        animations.scale(icons[location.pathname].current, 1, 0.7, 'In')
        animations.set(circles[location.pathname].current, {
          scale: 0,
          opacity: 1
        })
      },
      deps: [location.pathname]
    })
  }
  return (
    <Root>
      {pages.map(value => {
        return (
          <MenuWrapper key={value[1].path}>
            <Circle ref={circles[value[1].path]} />
            <Menu ref={icons[value[1].path]} to={value[1].path}>
              <SvgWrapper>
                <FontAwesomeIcon icon={value[1].icon} />
              </SvgWrapper>
            </Menu>
          </MenuWrapper>
        )
      })}
      <Br />
      <Border />
      <Br />
      {props.options.map(value => {
        return (
          <MenuWrapper key={value.icon.iconName}>
            <OptionMenu>
              <SvgWrapper>
                <FontAwesomeIcon icon={value.icon} />
              </SvgWrapper>
            </OptionMenu>
          </MenuWrapper>
        )
      })}
      <MenuWrapper>
        <PhoneMenu href={`tel:${config.tel.number}`}>
          <SvgWrapper>
            <FontAwesomeIcon icon={config.tel.icon} />
          </SvgWrapper>
        </PhoneMenu>
      </MenuWrapper>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 100%;
`
const svgHeight = 16
const MenuWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${styles.sizes.phone.base() * 2 + svgHeight}px;
`
const Circle = styled.div`
  ${styles.mixins.absoluteCenter}
  left: -50%;
  width: 200%;
  height: 200%;
  background: ${styles.colors.light.neutral};
  border-radius: 50%;
  transform: scale(0);
`
const Menu = styled(Link)`
  ${styles.mixins.flexCenter}
  width: 100%;
  height: 100%;
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
  height: 100%;
  opacity: 0.3;
`
const PhoneMenu = styled.a`
  ${styles.mixins.flexCenter}
  width: 100%;
  height: 100%;
`

export default Mobile
