import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import animations from '~/utils/animations'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import Exhibition from '~/components/base/Exhibition'
import Br from '~/components/base/Br'
import Footer from '~/components/default/Footer'

type Props = {
  isPending: boolean
  setIsPending: (isPending: boolean) => void
  page: {
    id: number
    leave: boolean
    node: React.ReactNode
  }
}

const Page: React.FC<Props> = props => {
  const root = React.useRef(null)
  useEffectAsync({
    effect: async () => {
      if (!props.isPending) {
        if (props.page.leave) {
          animations.opacity(root.current, 0, 2, 'Out')
          animations.scale(root.current, 0.9, 1, 'InOut')
          animations.x(root.current, '-10%', 1, 'InOut')
        } else {
          animations.opacity(root.current, 1, 1, 'InOut')
          animations.scale(root.current, 1, 1, 'InOut')
          animations.x(root.current, '0%', 1, 'InOut')
        }
      }
    },
    deps: [props.isPending]
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
