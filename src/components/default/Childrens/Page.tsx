import * as React from 'react'
import styled from '@emotion/styled'
import { CurrentPage } from '~/store/global/currentPage'
import { IsPending } from '~/store/global/isPending'
import styles from '~/utils/styles'
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
  React.useEffect(() => {
    props.currentPage.dispatch({ type: 'set', payload: root.current })
  })
  useFadeIn({
    isPending: props.isPending,
    leave: props.page.leave,
    root
  })
  useFadeOut({
    isPending: props.isPending,
    leave: props.page.leave,
    root
  })
  return (
    <Root ref={root}>
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
    </Root>
  )
}

const Root = styled.div`
  position: absolute;
  top: 0;
  padding-left: ${styles.sizes.phone.dashboard + 1}px;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  opacity: 0;
`

export default Page
