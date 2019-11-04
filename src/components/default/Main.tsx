import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import Exhibition from '~/components/base/Exhibition'
import Br from '~/components/base/Br'
import Footer from '~/components/default/Footer'

const Main: React.FC = props => {
  return (
    <Root id="main">
      {props.children}
      <Exhibition>
        <Footer />
      </Exhibition>
      <Br />
      <Margin />
    </Root>
  )
}

const Root = styled.div`
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

export default Main
