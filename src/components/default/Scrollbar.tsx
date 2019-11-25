import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import { CurrentPage } from '~/store/global/currentPage'
import { IsPending } from '~/store/global/isPending'
import { useLocal } from '~/store/default/Scrollbar'
import useOut from '~/hooks/default/Scrollbar/useOut'
import useIn from '~/hooks/default/Scrollbar/useIn'
import useReset from '~/hooks/default/Scrollbar/useReset'
import useScroll from '~/hooks/default/Scrollbar/useScroll'

type Props = {
  isPending: IsPending
  currentPage: CurrentPage
}

const Scrollbar: React.FC<Props> = props => {
  const page = props.currentPage.state
  const local = useLocal()
  const root = React.useRef<HTMLDivElement>(null)
  const gauge = React.useRef<HTMLDivElement>(null)
  useOut({ isPending: props.isPending, squashed: local.squashed, root })
  useIn({ isPending: props.isPending, squashed: local.squashed, root })
  useReset({ squashed: local.squashed, gauge })
  useScroll({ page, gauge })
  return (
    <Root ref={root}>
      <Gauge ref={gauge} />
    </Root>
  )
}

const Root = styled.div`
  width: ${styles.sizes.phone.scrollbar}px;
  height: 2px;
  background: ${styles.colors.light.neutral};
  transform-origin: left center;
`
const Gauge = styled.div`
  width: 100%;
  height: 100%;
  background: ${styles.colors.light.logo};
  transform: scaleX(0);
  transform-origin: left center;
`

export default Scrollbar
