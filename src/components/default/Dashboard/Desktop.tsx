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
import { Colorscheme } from '~/store/global/colorscheme'

type Props = {
  colorscheme: Colorscheme
  launched: Launched
}

const Desktop: React.FC<Props> = props => {
  const pages = Object.entries(config.pages)
  const icons = {
    light: React.useRef<HTMLDivElement>(null),
    dark: React.useRef<HTMLDivElement>(null)
  }
  const text = {}
  const [otherIcons, setOtherIcons] = React.useState<HTMLDivElement[]>([])
  const [otherText, setOtherText] = React.useState<HTMLDivElement[]>([])
  const circles = {
    colorscheme: React.useRef<HTMLDivElement>(null),
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
    animations.set(el, {
      scale: 0,
      opacity: 1
    })
  }
  const clickDarkmode = (): void => {
    circleExpand(circles['colorscheme'].current)
    if (props.colorscheme.state === 'dark') {
      props.colorscheme.dispatch({ type: 'set', payload: 'light' })
    } else {
      props.colorscheme.dispatch({ type: 'set', payload: 'dark' })
    }
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
        setOtherIcons(otherIcons)
        const otherText: HTMLDivElement[] = []
        Object.entries(text).forEach(value => {
          if (value[0] !== location.pathname) {
            const icon = value[1] as React.MutableRefObject<HTMLDivElement>
            otherText.push(icon.current)
          }
        })
        setOtherText(otherText)
        circleExpand(circles[location.pathname].current)
        animations.color(
          otherIcons,
          styles.colors[props.colorscheme.state].text,
          0.7,
          'InOut'
        )
        animations.color(
          otherText,
          styles.colors[props.colorscheme.state].text,
          0.7,
          'InOut'
        )
        animations.color(
          icons[location.pathname].current,
          styles.colors.base.brand,
          0.7,
          'InOut'
        )
        animations.color(
          text[location.pathname].current,
          styles.colors.base.brand,
          0.7,
          'InOut'
        )
      },
      deps: [location.pathname]
    })
    React.useEffect(() => {
      animations.color(
        otherIcons,
        styles.colors[props.colorscheme.state].text,
        0.7,
        'InOut'
      )
      animations.color(
        otherText,
        styles.colors[props.colorscheme.state].text,
        0.7,
        'InOut'
      )
      if (props.colorscheme.state === 'dark') {
        animations.scale(icons.dark.current, 0, 0.7, 'InOut')
        animations.scale(icons.light.current, 1, 0.7, 'InOut')
      } else {
        animations.scale(icons.light.current, 0, 0.7, 'InOut')
        animations.scale(icons.dark.current, 1, 0.7, 'InOut')
      }
    }, [props.colorscheme.state])
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
        key={config.colorscheme.dark.icon.iconName}
        onClick={clickDarkmode}
      >
        <Icon>
          <Circle ref={circles['colorscheme']} />
          <SvgWrapper ref={icons.light}>
            <FontAwesomeIcon icon={config.colorscheme.light.icon} />
          </SvgWrapper>
          <SvgWrapper ref={icons.dark}>
            <FontAwesomeIcon icon={config.colorscheme.dark.icon} />
          </SvgWrapper>
        </Icon>
        <Text>外観モード</Text>
      </OptionMenu>
      <PhoneMenu href={`tel:${config.tel.number}`} onClick={clickPhone}>
        <Icon>
          <Circle ref={circles['phone']} />
          <SvgWrapper>
            <FontAwesomeIcon icon={config.tel.icon} />
          </SvgWrapper>
        </Icon>
        <Text>{config.tel.string}</Text>
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
  ${styles.mixins.absoluteCenter}
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
  background: var(--brand);
  border-radius: 50%;
  transform: scale(0);
`
const Text = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${styles.sizes.phone.base()}px;
  color: var(--text);
  letter-spacing: 0.33em;
`
const Border = styled.div`
  margin-left: ${(styles.sizes.phone.dashboard - 18) / 2}px;
  width: 18px;
  height: 1px;
  background: var(--border);
`

export default Desktop
