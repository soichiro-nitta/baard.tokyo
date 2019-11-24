import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Global as GlobalStyles } from '@emotion/core'
import styles, { global as globalStyles } from '~/utils/styles'
import Logo from '~/assets/svg/baard.svg'
import { useGlobal } from '~/store/global'
import { useLocal } from '~/store/default'
import useAlert from '~/hooks/default/useAlert'
import useNavigationWrapper from '~/hooks/default/useNavigationWrapper'
import Borders from '~/components/default/Borders'
import Dashboard from '~/components/default/Dashboard'
import Scrollbar from '~/components/default/Scrollbar'
import Spinner from '~/components/default/Spinner'
import Humberger from '~/components/default/Humberger'
import Navigation from '~/components/default/Navigation'
import Opening from '~/components/default/Opening'
import Childrens from '~/components/default/Childrens'
import Progressbar from '~/components/default/Progressbar'
// import config from '~/utils/config'

const Layout: React.FC = props => {
  const global = useGlobal()
  const local = useLocal()
  const navigationWrapper = React.useRef<HTMLDivElement>(null)
  useAlert()
  useNavigationWrapper(local.gnav, navigationWrapper)
  return (
    <>
      <GlobalStyles styles={globalStyles} />
      <BordersWrapper>
        <Borders />
      </BordersWrapper>
      <DashboardWrapper>
        <Dashboard />
      </DashboardWrapper>
      <ScrollbarWrapper>
        <Scrollbar />
      </ScrollbarWrapper>
      <Childrens isPending={global.isPending}>{props.children}</Childrens>
      <NavigationWrapper ref={navigationWrapper}>
        <Navigation playing={global.playing} gnav={local.gnav} />
      </NavigationWrapper>
      <LogoWrapper to="/">
        <Logo />
      </LogoWrapper>
      <HumbergerWrapper>
        <Humberger gnav={local.gnav} />
      </HumbergerWrapper>
      {!local.launched.state && (
        <OpeningWrapper>
          <Opening isPending={global.isPending} launched={local.launched} />
        </OpeningWrapper>
      )}
      <SpinnerWrapper>
        <Spinner isPending={global.isPending} />
      </SpinnerWrapper>
      <ProgressbarWrapper>
        <Progressbar isPending={global.isPending} />
      </ProgressbarWrapper>
    </>
  )
}

const BordersWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`
const DashboardWrapper = styled.div`
  position: fixed;
  top: ${styles.sizes.phone.dashboard +
    (styles.sizes.phone.dashboard - 30) / 2 +
    5}px;
  left: ${styles.sizes.phone.base}px;
  z-index: 1;
`
const ScrollbarWrapper = styled.div`
  position: fixed;
  left: ${styles.sizes.phone.base}px;
  bottom: ${(styles.sizes.phone.dashboard - 2) / 2}px;
  height: 2px;
`
const NavigationWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`
const LogoHeight = 20
const LogoWrapper = styled(Link)`
  display: inline-block;
  position: fixed;
  top: ${(styles.sizes.phone.dashboard - LogoHeight) / 2}px;
  left: ${styles.sizes.phone.base}px;
  width: 110px;
  height: ${LogoHeight}px;
  mix-blend-mode: exclusion;
  z-index: 1;
  svg {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
`
const HumbergerWrapper = styled.div`
  position: fixed;
  top: ${(styles.sizes.phone.dashboard - LogoHeight) / 2}px;
  right: ${styles.sizes.phone.base}px;
  mix-blend-mode: exclusion;
  z-index: 1;
`
const OpeningWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`
const SpinnerWrapper = styled.div`
  position: fixed;
  left: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar - 2) /
    2}px;
  bottom: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar - 2) /
    2}px;
  height: ${styles.sizes.phone.scrollbar + 2}px;
  z-index: 1;
`
const ProgressbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  z-index: 1;
`

export default Layout
