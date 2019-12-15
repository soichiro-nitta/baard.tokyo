import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import { CurrentPage } from '~/store/global/currentPage'
import { IsPending } from '~/store/global/isPending'
import { useLocal } from '~/store/default/Scrollbar'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import animations from '~/utils/animations'
import functions from '~/utils/functions'

type Props = {
  isPending: IsPending
  currentPage: CurrentPage
}

const Scrollbar: React.FC<Props> = props => {
  const local = useLocal()
  const page = props.currentPage.state
  const root = React.useRef<HTMLDivElement>(null)
  const gauge = React.useRef<HTMLDivElement>(null)
  const duration = 0.6
  useEffectAsync({
    effect: async () => {
      if (props.isPending.state) {
        animations.scaleX(root.current, 0, duration, 'In')
        await functions.delay(duration)
        local.squashed.dispatch({ type: 'on' })
      }
    },
    deps: [props.isPending.state]
  })
  useEffectAsync({
    effect: async () => {
      if (!props.isPending.state && local.squashed.state) {
        await functions.delay(1)
        animations.scaleX(root.current, 1, duration, 'Out')
        await functions.delay(duration)
        local.squashed.dispatch({ type: 'off' })
      }
    },
    deps: [props.isPending.state, local.squashed.state]
  })
  React.useEffect(() => {
    gauge.current.style.transform = 'scaleX(0)'
  }, [local.squashed.state])
  React.useEffect(() => {
    if (page) {
      const scrollMax = page.scrollHeight - page.clientHeight
      const scroll = (): void => {
        gauge.current.style.transform = `scaleX(${page.scrollTop / scrollMax})`
      }
      page.addEventListener('scroll', scroll)
      return (): void => {
        page.removeEventListener('scroll', scroll)
      }
    }
  }, [page])
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
