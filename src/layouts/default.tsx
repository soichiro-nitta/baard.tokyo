import * as React from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import styles, { global } from '~/utils/styles'
import Header from '~/components/default/Header'
import Background from '~/components/default/Background'
import Dashboard from '~/components/default/Dashboard'
import Scrollbar from '~/components/default/Scrollbar'
import Loader from '~/components/default/Loader'
import Humberger from '~/components/default/Humberger'
import Navigation from '~/components/default/Navigation'
import Opening from '~/components/default/Opening'
import Footer from '~/components/default/Footer'

const Layout: React.FC = props => {
  const [opening, setOpening] = React.useState(false)
  return (
    <>
      <Global styles={global} />
      <BackgroundWrapper>
        <Background />
      </BackgroundWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <HumbergerWrapper>
        <Humberger />
      </HumbergerWrapper>
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
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
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </Main>
      {!opening && (
        <OpeningWrapper>
          <Opening setOpening={setOpening} />
        </OpeningWrapper>
      )}
    </>
  )
}

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`
const HeaderHeight = 20
const HeaderWrapper = styled.div`
  position: fixed;
  top: ${(styles.sizes.phone.dashboard - HeaderHeight) / 2}px;
  left: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) / 2}px;
  height: ${HeaderHeight}px;
  z-index: 1;
`
const HumbergerWrapper = styled.div`
  position: fixed;
  top: ${(styles.sizes.phone.dashboard - HeaderHeight) / 2}px;
  right: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) / 2}px;
  mix-blend-mode: exclusion;
  z-index: 1;
`
const NavigationWrapper = styled.div`
  position: fixed;
  top: ${(styles.sizes.phone.dashboard - HeaderHeight) / 2}px;
  right: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) / 2}px;
  z-index: 1;
  opacity: 0;
`
const DashboardWrapper = styled.div`
  position: fixed;
  top: ${styles.sizes.phone.dashboard +
    (styles.sizes.phone.dashboard - 30) / 2 +
    5}px;
  left: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) / 2}px;
  z-index: 1;
`
const ScrollbarWrapper = styled.div`
  position: fixed;
  left: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) / 2}px;
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
  font-size: 14px;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  z-index: 0;
`
const FooterWrapper = styled.div`
  margin: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) / 2}px
    0;
`
const OpeningWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

export default Layout
