import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import styles from '~/utils/styles'
import animations from '~/utils/animations'
import { CurrentPage } from '~/store/global/currentPage'
import { IsPending } from '~/store/global/isPending'
import Exhibition from '~/components/base/Exhibition'
import Br from '~/components/base/Br'
import Border from '~/components/base/Border'
import Footer from '~/components/default/Footer'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import functions from '~/utils/functions'

type Props = {
  currentPage: CurrentPage
  isPending: IsPending
  page: {
    id: number
    leave: boolean
    node: React.ReactNode
  }
}

const Page: React.FC<Props> = props => {
  const root = React.useRef<HTMLDivElement>(null)
  const inner = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    props.currentPage.dispatch({ type: 'set', payload: root.current })
  }, [])
  React.useEffect(() => {
    if (!props.isPending.state && !props.page.leave) {
      const duration = 1
      animations.set(inner.current, {
        x: '100%'
      })
      animations.x(inner.current, '0%', duration, 'Out')
      animations.opacity(inner.current, 1, duration, 'Out')
    }
  }, [props.isPending.state])
  useEffectAsync({
    effect: async () => {
      if (!props.isPending.state && props.page.leave) {
        const duration = 1
        await functions.delay(1 - duration)
        animations.opacity(inner.current, 0, duration, 'Out')
        animations.x(
          inner.current,
          `${(styles.sizes.phone.base() * -1) / 2}px`,
          duration,
          'Out'
        )
      }
    },
    deps: [props.isPending.state]
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
    margin: 0 auto;
    padding: 0;
    width: ${styles.sizes.desktop.main()}px;
  `)}
`
const Inner = styled.div`
  width: 100%;
  opacity: 0;
`

export default Page
