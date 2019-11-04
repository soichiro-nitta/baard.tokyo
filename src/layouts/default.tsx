import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import { Provider } from '~/store'
import styles, { global } from '~/utils/styles'
import config from '~/utils/config'
import functions from '~/utils/functions'
import animations from '~/utils/animations'
import Logo from '~/assets/svg/baard.svg'
import useAlert from '~/hooks/default/useAlert'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import Exhibition from '~/components/base/Exhibition'
import Br from '~/components/base/Br'
import Borders from '~/components/default/Borders'
import Dashboard from '~/components/default/Dashboard'
import Scrollbar from '~/components/default/Scrollbar'
import Loader from '~/components/default/Loader'
import Humberger from '~/components/default/Humberger'
import Navigation from '~/components/default/Navigation'
import Opening from '~/components/default/Opening'
import Footer from '~/components/default/Footer'

const Layout: React.FC = props => {
  const [opening, setOpening] = React.useState(config.nodeEnv)
  // const [opening, setOpening] = React.useState(false)
  const [navigation, setNavigation] = React.useState(false)
  const navigationWrapper = React.useRef(null)
  useAlert()
  useEffectAsync(
    async () => {
      if (navigation) {
        animations.set(navigationWrapper.current, { display: 'block' })
        if (document.getElementById('main').querySelector('video')) {
          document
            .getElementById('main')
            .querySelector('video')
            .pause()
        }
      } else {
        await functions.delay(1)
        animations.set(navigationWrapper.current, { display: 'none' })
        if (document.getElementById('main').querySelector('video')) {
          document
            .getElementById('main')
            .querySelector('video')
            .play()
        }
      }
    },
    { deps: [navigation] }
  )
  return (
    <Provider>
      <Global styles={global} />
      <BordersWrapper>
        <Borders />
      </BordersWrapper>
      <DashboardWrapper>
        <Dashboard />
      </DashboardWrapper>
      <ScrollbarWrapper>
        <Scrollbar />
      </ScrollbarWrapper>
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
      <Main id="main">
        {props.children}
        <Exhibition>
          <Footer />
        </Exhibition>
        <Br />
        <Margin />
      </Main>
      <NavigationWrapper ref={navigationWrapper}>
        <Navigation navigation={navigation} setNavigation={setNavigation} />
      </NavigationWrapper>
      <LogoWrapper to="/">
        <Logo />
      </LogoWrapper>
      <HumbergerWrapper>
        <Humberger navigation={navigation} setNavigation={setNavigation} />
      </HumbergerWrapper>
      {!opening && (
        <OpeningWrapper>
          <Opening setOpening={setOpening} />
        </OpeningWrapper>
      )}
    </Provider>
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
const LoaderWrapper = styled.div`
  position: fixed;
  left: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar - 2) /
    2}px;
  bottom: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar - 2) /
    2}px;
  height: ${styles.sizes.phone.scrollbar + 2}px;
`
const Main = styled.div`
  padding-left: ${styles.sizes.phone.dashboard + 1}px;
  width: 100%;
  height: 100%;
  font-size: 1.3rem;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 0;
`
const Margin = styled.div`
  margin-top: ${styles.sizes.phone.base}px;
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

export default Layout
