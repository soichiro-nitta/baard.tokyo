import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import styles from '~/utils/styles'
import { CurrentPage } from '~/store/global/currentPage'
import { IsPending } from '~/store/global/isPending'
import useFadeIn from '~/hooks/default/Childrens/Page/useFadeIn'
import useFadeOut from '~/hooks/default/Childrens/Page/useFadeOut'
import Exhibition from '~/components/base/Exhibition'
import Br from '~/components/base/Br'
import Border from '~/components/base/Border'
import Footer from '~/components/default/Footer'

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
  useFadeIn({
    isPending: props.isPending,
    leave: props.page.leave,
    inner
  })
  useFadeOut({
    isPending: props.isPending,
    leave: props.page.leave,
    inner
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
