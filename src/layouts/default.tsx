import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Global as GlobalStyles, css } from '@emotion/core'
import styles, { global as globalStyles } from '~/utils/styles'
import Logo from '~/assets/svg/baard.svg'
import { useGlobal } from '~/store/global'
import { useLocal } from '~/store/default'
import useNavigationWrapper from '~/hooks/default/useNavigationWrapper'
import useWindow from '~/hooks/default/useWindow'
import Borders from '~/components/default/Borders'
import Dashboard from '~/components/default/Dashboard'
import Scrollbar from '~/components/default/Scrollbar'
import Spinner from '~/components/default/Spinner'
import Humberger from '~/components/default/Humberger'
import Navigation from '~/components/default/Navigation'
import Opening from '~/components/default/Opening'
import Childrens from '~/components/default/Childrens'
import Progressbar from '~/components/default/Progressbar'

const Layout: React.FC = props => {
  const global = useGlobal()
  const local = useLocal()
  const navigationWrapper = React.useRef<HTMLDivElement>(null)
  useNavigationWrapper(local.gnav, navigationWrapper)
  useWindow({ large: global.large })
  // React.useEffect(() => {
  //   local.launched.dispatch({ type: 'on' })
  // }, [])
  return (
    <Root>
      <GlobalStyles styles={globalStyles} />
      <BordersWrapper>
        <Borders large={global.large} />
      </BordersWrapper>
      <DashboardWrapper>
        <Dashboard
          launched={local.launched}
          large={global.large}
          isPending={global.isPending}
        />
      </DashboardWrapper>
      <ScrollbarWrapper>
        <Scrollbar
          currentPage={global.currentPage}
          isPending={global.isPending}
        />
      </ScrollbarWrapper>
      <Childrens currentPage={global.currentPage} isPending={global.isPending}>
        {props.children as React.ReactElement}
      </Childrens>
      <NavigationWrapper ref={navigationWrapper}>
        <Navigation
          launched={local.launched}
          playing={global.playing}
          gnav={local.gnav}
        />
      </NavigationWrapper>
      <LogoWrapper to="/">
        <Logo />
      </LogoWrapper>
      <HumbergerWrapper>
        <Humberger gnav={local.gnav} />
      </HumbergerWrapper>
      {!local.launched.state && (
        <OpeningWrapper>
          <Opening launched={local.launched} large={global.large} />
        </OpeningWrapper>
      )}
      <SpinnerWrapper>
        <Spinner isPending={global.isPending} />
      </SpinnerWrapper>
      <ProgressbarWrapper>
        <Progressbar isPending={global.isPending} />
      </ProgressbarWrapper>
    </Root>
  )
}

const Root = styled.div`
  ${styles.mixins.relative}
  font-size: 1.3rem;
  ${styles.large(css`
    ${styles.mixins.fixedCenter}
    width: ${styles.sizes.desktop.container}px;
  border-right: 1px solid ${styles.colors.light.border};
  border-left: 1px solid ${styles.colors.light.border};
  `)}
`
const BordersWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`
const DashboardWrapper = styled.div`
  position: absolute;
  top: ${styles.sizes.phone.dashboard}px;
  left: 0;
  width: ${styles.sizes.phone.dashboard}px;
  z-index: 1;
  ${styles.large(css`
    left: 1px;
    width: ${styles.sizes.desktop.dashboard}px;
  `)}
`
const ScrollbarWrapper = styled.div`
  position: absolute;
  left: ${styles.sizes.phone.base}px;
  bottom: ${(styles.sizes.phone.dashboard - 2) / 2}px;
  height: 2px;
`
const NavigationWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`
const LogoHeight = 20
const LogoWrapper = styled(Link)`
  display: inline-block;
  position: absolute;
  top: ${(styles.sizes.phone.dashboard - LogoHeight) / 2}px;
  left: ${styles.sizes.phone.base}px;
  width: 110px;
  height: ${LogoHeight}px;
  mix-blend-mode: screen;
  z-index: 1;
  svg {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
`
const HumbergerWrapper = styled.div`
  position: absolute;
  top: ${(styles.sizes.phone.dashboard - LogoHeight) / 2}px;
  right: ${styles.sizes.phone.base}px;
  mix-blend-mode: screen;
  z-index: 1;
`
const OpeningWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`
const SpinnerWrapper = styled.div`
  position: absolute;
  left: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar - 2) /
    2}px;
  bottom: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar - 2) /
    2}px;
  height: ${styles.sizes.phone.scrollbar + 2}px;
  z-index: 1;
`
const ProgressbarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  z-index: 1;
`

export default Layout
