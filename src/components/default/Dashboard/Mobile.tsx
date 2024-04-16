import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import Br from '~/components/base/Br'
import config from '~/utils/config'
import animations from '~/utils/animations'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import functions from '~/utils/functions'
import { Colorscheme } from '~/store/global/colorscheme'
import {
  Home,
  MapPinned,
  MenuSquare,
  Moon,
  Phone,
  Scissors,
  Sun
} from 'lucide-react'

type Props = {
  colorscheme: Colorscheme
}

const Mobile: React.FC<Props> = props => {
  const pages = Object.entries(config.pages)
  const icons = {
    light: React.useRef<HTMLDivElement>(null),
    dark: React.useRef<HTMLDivElement>(null)
  }
  const [others, setOthers] = React.useState<HTMLDivElement[]>([])
  const circles = {
    colorscheme: React.useRef<HTMLDivElement>(null),
    phone: React.useRef<HTMLDivElement>(null)
  }
  pages.forEach(value => {
    icons[value[1].path] = React.useRef<HTMLDivElement>(null)
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
        const others = []
        Object.entries(icons).forEach(value => {
          if (value[0] !== location.pathname) {
            const icon = value[1] as React.MutableRefObject<HTMLDivElement>
            others.push(icon.current)
          }
        })
        setOthers(others)
        circleExpand(circles[location.pathname].current)
        animations.color(
          others,
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
      },
      deps: [location.pathname]
    })
    React.useEffect(() => {
      requestAnimationFrame(() => {
        animations.set(others, {
          color: styles.colors[props.colorscheme.state].text
        })
      })
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
          <MenuWrapper key={value[1].path}>
            <Circle ref={circles[value[1].path]} />
            <Menu ref={icons[value[1].path]} to={value[1].path}>
              <SvgWrapper>
                {value[1].path === '/' && (
                  <Home style={{ width: '16px' }} strokeWidth={2.5} />
                )}
                {value[1].path === '/salon/' && (
                  <Scissors style={{ width: '16px' }} strokeWidth={2.5} />
                )}
                {value[1].path === '/service/' && (
                  <MenuSquare style={{ width: '16px' }} strokeWidth={2.5} />
                )}
                {value[1].path === '/access/' && (
                  <MapPinned style={{ width: '16px' }} strokeWidth={2.5} />
                )}
              </SvgWrapper>
            </Menu>
          </MenuWrapper>
        )
      })}
      <Br />
      <Border />
      <Br />
      <MenuWrapper
        // key={config.colorscheme.dark.icon.iconName}
        onClick={clickDarkmode}
      >
        <Circle ref={circles['colorscheme']} />
        <OptionMenu ref={icons.light}>
          <SvgWrapper>
            <Sun style={{ width: '16px' }} strokeWidth={2.5} />
          </SvgWrapper>
        </OptionMenu>
        <OptionMenu ref={icons.dark}>
          <SvgWrapper>
            <Moon style={{ width: '16px' }} strokeWidth={2.5} />
          </SvgWrapper>
        </OptionMenu>
      </MenuWrapper>
      <MenuWrapper>
        <Circle ref={circles['phone']} />
        <PhoneMenu href={`tel:${config.tel.number}`} onClick={clickPhone}>
          <SvgWrapper>
            <Phone style={{ width: '16px' }} strokeWidth={2.5} />
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
  background: var(--brand);
  border-radius: 50%;
  transform: scale(0);
`
const Menu = styled(Link)`
  ${styles.mixins.flexCenter}
  width: 100%;
  height: 100%;
  color: var(--text);
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
  background: var(--border);
`
const OptionMenu = styled.div`
  position: absolute;
  ${styles.mixins.flexCenter}
  width: 100%;
  height: 100%;
  color: var(--text);
`
const PhoneMenu = styled.a`
  ${styles.mixins.flexCenter}
  width: 100%;
  height: 100%;
  color: var(--text);
`

export default Mobile
