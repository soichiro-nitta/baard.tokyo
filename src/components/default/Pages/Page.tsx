import * as React from 'react'
import styled from '@emotion/styled'
import { IsPending } from '~/store/global/isPending'
import styles from '~/utils/styles'
import useFadeIn from '~/hooks/default/Pages/Page/useFadeIn'
import useFadeOut from '~/hooks/default/Pages/Page/useFadeOut'
import Exhibition from '~/components/base/Exhibition'
import Br from '~/components/base/Br'
import Footer from '~/components/default/Footer'

type Props = {
  isPending: IsPending
  page: {
    id: number
    leave: boolean
    node: React.ReactNode
  }
}

const Page: React.FC<Props> = props => {
  const root = React.useRef<HTMLDivElement>(null)
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
      <Exhibition>
        <Footer />
      </Exhibition>
      <Br />
      <Margin />
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
  transform: translate3d(50%, 0, 0) scale(1.1);
`
const Margin = styled.div`
  margin-top: ${styles.sizes.phone.base}px;
`

export default Page
