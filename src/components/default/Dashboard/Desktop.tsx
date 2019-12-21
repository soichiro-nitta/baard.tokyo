import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '~/utils/styles'
import Br from '~/components/base/Br'
import config from '~/utils/config'
import animations from '~/utils/animations'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import functions from '~/utils/functions'
import { Launched } from '~/store/default/launched'

type Props = {
  launched: Launched
}

const Desktop: React.FC<Props> = props => {
  const pages = Object.entries(config.pages)
  const icons = {}
  const text = {}
  const circles = {
    darkmode: React.useRef<HTMLDivElement>(null),
    phone: React.useRef<HTMLDivElement>(null)
  }
  pages.forEach(value => {
    icons[value[1].path] = React.useRef<HTMLDivElement>(null)
    text[value[1].path] = React.useRef<HTMLDivElement>(null)
    circles[value[1].path] = React.useRef<HTMLDivElement>(null)
  })
  const circleExpand = async (el: HTMLDivElement): Promise<void> => {
    animations.scale(el, 1, 0.7, 'InOut')
    animations.opacity(el, 0, 0.7, 'InOut')
    await functions.delay(0.7)
    animations.set(circles[location.pathname].current, {
      scale: 0,
      opacity: 1
    })
  }
  const clickDarkmode = (): void => {
    // circleExpand(circles['darkmode'].current)
  }
  const clickPhone = (): void => {
    circleExpand(circles['phone'].current)
  }
  if (typeof window !== `undefined`) {
    useEffectAsync({
      effect: async () => {
        const otherIcons: HTMLDivElement[] = []
        Object.entries(icons).forEach(value => {
          if (value[0] !== location.pathname) {
            const icon = value[1] as React.MutableRefObject<HTMLDivElement>
            otherIcons.push(icon.current)
          }
        })
        const otherText: HTMLDivElement[] = []
        Object.entries(text).forEach(value => {
          if (value[0] !== location.pathname) {
            const icon = value[1] as React.MutableRefObject<HTMLDivElement>
            otherText.push(icon.current)
          }
        })
        if (props.launched.state)
          circleExpand(circles[location.pathname].current)
        animations.color(otherIcons, styles.colors.light.text, 0.7, 'InOut')
        animations.color(otherText, styles.colors.light.text, 0.7, 'InOut')
        animations.color(
          icons[location.pathname].current,
          styles.colors.light.logo,
          0.7,
          'InOut'
        )
        animations.color(
          text[location.pathname].current,
          styles.colors.light.logo,
          0.7,
          'InOut'
        )
      },
      deps: [location.pathname]
    })
  }
  return (
    <Root>
      {pages.map(value => {
        return (
          <Menu key={value[1].path} to={value[1].path}>
            <Icon ref={icons[value[1].path]}>
              <Circle ref={circles[value[1].path]} />
              <SvgWrapper>
                <FontAwesomeIcon icon={value[1].icon} />
              </SvgWrapper>
            </Icon>
            <Text ref={text[value[1].path]}>{value[1].ja}</Text>
          </Menu>
        )
      })}
      <Br />
      <Border />
      <Br />
      <OptionMenu
        key={config.options.darkmode.icon.iconName}
        onClick={clickDarkmode}
      >
        <Icon>
          <Circle ref={circles['darkmode']} />
          <SvgWrapper>
            <FontAwesomeIcon icon={config.options.darkmode.icon} />
          </SvgWrapper>
        </Icon>
      </OptionMenu>
      <PhoneMenu href={`tel:${config.tel.number}`} onClick={clickPhone}>
        <Icon>
          <Circle ref={circles['phone']} />
          <SvgWrapper>
            <FontAwesomeIcon icon={config.tel.icon} />
          </SvgWrapper>
        </Icon>
        <PhoneText>{config.tel.string}</PhoneText>
      </PhoneMenu>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 100%;
`
const svgHeight = 16
const Menu = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
`
const OptionMenu = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  opacity: 0.3;
`
const PhoneMenu = styled.a`
  display: flex;
  width: 100%;
  height: 100%;
`
const Icon = styled.div`
  ${styles.mixins.flexCenter}
  position: relative;
  width: ${styles.sizes.phone.dashboard}px;
  height: ${styles.sizes.phone.dashboard}px;
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
const Circle = styled.div`
  ${styles.mixins.absoluteCenter}
  left: -50%;
  width: 200%;
  height: 200%;
  background: ${styles.colors.light.neutral};
  border-radius: 50%;
  transform: scale(0);
`
const Text = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${styles.sizes.phone.base()}px;
  color: ${styles.colors.light.text};
`
const PhoneText = styled(Text)`
  color: ${styles.colors.light.logo};
  letter-spacing: 0.33em;
`
const Border = styled.div`
  margin: 0 auto;
  width: 18px;
  height: 1px;
  background: ${styles.colors.light.border};
`

export default Desktop
