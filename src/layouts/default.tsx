import * as React from 'react'
import styled from '~/utils/emotion'
import Theme from '~/components/default/Theme'
import Header from '~/components/default/Header'
import Background from '~/components/default/Background'
import Dashboard from '~/components/default/Dashboard'
import Scrollbar from '~/components/default/Scrollbar'
import Loader from '~/components/default/Loader'
import Humberger from '~/components/default/Humberger'
import Navigation from '~/components/default/Navigation'
import Opening from '~/components/default/Opening'

const Layout: React.FC = props => {
  const [opening, setOpening] = React.useState(false)
  return (
    <Theme>
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
        <Footer>
          © {new Date().getFullYear()}, Produced by Soichiro Nitta
        </Footer>
      </Main>
      {!opening && (
        <OpeningWrapper>
          <Opening setOpening={setOpening} />
        </OpeningWrapper>
      )}
    </Theme>
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
  top: ${(props): number =>
    (props.theme.sizes.phone.dashboard - HeaderHeight) / 2}px;
  left: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  height: ${HeaderHeight}px;
  z-index: 1;
`
const HumbergerWrapper = styled.div`
  position: fixed;
  top: ${(props): number =>
    (props.theme.sizes.phone.dashboard - HeaderHeight) / 2}px;
  right: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  z-index: 1;
`
const NavigationWrapper = styled.div`
  position: fixed;
  top: ${(props): number =>
    (props.theme.sizes.phone.dashboard - HeaderHeight) / 2}px;
  right: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  z-index: 1;
  opacity: 0;
`
const DashboardWrapper = styled.div`
  position: fixed;
  top: ${(props): number =>
    props.theme.sizes.phone.dashboard +
    (props.theme.sizes.phone.dashboard - 30) / 2 +
    5}px;
  left: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  z-index: 1;
`
const ScrollbarWrapper = styled.div`
  position: fixed;
  left: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  bottom: ${(props): number => (props.theme.sizes.phone.dashboard - 2) / 2}px;
  height: 2px;
`
const LoaderWrapper = styled.div`
  position: fixed;
  left: ${(props): number =>
    (props.theme.sizes.phone.dashboard -
      props.theme.sizes.phone.scrollbar -
      2) /
    2}px;
  bottom: ${(props): number =>
    (props.theme.sizes.phone.dashboard -
      props.theme.sizes.phone.scrollbar -
      2) /
    2}px;
  height: ${(props): number => props.theme.sizes.phone.scrollbar + 2}px;
`
const Main = styled.div`
/* padding-top: ${(props): number =>
  props.theme.sizes.phone.dashboard +
  (props.theme.sizes.phone.dashboard - 30) / 2 +
  7}px; */
  padding-left: ${(props): number => props.theme.sizes.phone.dashboard + 1}px;
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
const Footer = styled.div`
  margin-top: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  padding: ${(props): number =>
      (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
      2}px
    0;
  padding-left: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  width: calc(
    100% + ${(props): number => props.theme.sizes.phone.dashboard - 18}px
  );
  border-top: 1px solid ${(props): string => props.theme.colors.light.border};
  line-height: 1;
`
const OpeningWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

export default Layout
