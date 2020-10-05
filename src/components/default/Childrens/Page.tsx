import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import styles from '~/utils/styles'
import animations from '~/utils/animations'
import { CurrentPage } from '~/store/global/currentPage'
import Exhibition from '~/components/base/Exhibition'
import Br from '~/components/base/Br'
import Border from '~/components/base/Border'
import Footer from '~/components/default/Footer'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import functions from '~/utils/functions'

type Props = {
  currentPage: CurrentPage
  page: {
    id: number
    leave: boolean
    node: React.ReactNode
  }
  length: number
}
const Page: React.FC<Props> = props => {
  const root = React.useRef<HTMLDivElement>(null)
  const inner = React.useRef<HTMLDivElement>(null)
  useEffectAsync({
    effect: async () => {
      const duration = 2
      if (props.page.leave) {
        animations.opacity(inner.current, 0, duration, 'InOut')
        animations.x(
          inner.current,
          `${(styles.sizes.phone.base() * -1) / 2}px`,
          duration,
          'InOut'
        )
      } else {
        if (props.length === 0) {
          animations.set(inner.current, {
            opacity: 1,
            x: '0%'
          })
        } else {
          animations.set(inner.current, {
            x: '50%'
          })
          await functions.delay(0.2)
          animations.opacity(inner.current, 1, duration - 0.2, 'InOut')
          animations.x(inner.current, '0%', duration - 0.2, 'Out')
        }
        await functions.delay(duration)
        props.currentPage.dispatch({ type: 'set', payload: root.current })
      }
    },
    deps: [props.page.leave]
  })
  return (
    <Root ref={root}>
      <Clipping>
        <Inner ref={inner}>
          {props.page.node}
          <Br />
          <Border />
          <Br />
          <Exhibition>
            <Footer />
          </Exhibition>
          <Br />
          <Border />
          <Br />
          <ReserveMargin />
          <Br />
        </Inner>
      </Clipping>
    </Root>
  )
}

const Root = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`
const Clipping = styled.div`
  padding-left: ${styles.sizes.phone.dashboard + 1}px;
  width: 100%;
  overflow: hidden;
  ${styles.large(css`
    padding-left: ${styles.sizes.desktop.dashboard}px;
  `)}
`
const Inner = styled.div`
  width: 100%;
  opacity: 0;
`
const ReserveMargin = styled.div`
  width: 100%;
  height: 40px;
`

export default Page
