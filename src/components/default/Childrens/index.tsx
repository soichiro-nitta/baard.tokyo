import * as React from 'react'
import styled from '@emotion/styled'
import { CurrentPage } from '~/store/global/currentPage'
import { IsPending } from '~/store/global/isPending'
import { useLocal } from '~/store/default/Childrens'
import Page from '~/components/default/Childrens/Page'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import functions from '~/utils/functions'

type Props = {
  currentPage: CurrentPage
  isPending: IsPending
}

const Childrens: React.FC<Props> = props => {
  const local = useLocal()
  const duration = 1
  useEffectAsync({
    effect: async () => {
      if (local.childrens.state.length === 0) {
        local.childrens.dispatch({ type: 'add', payload: props.children })
      } else {
        props.isPending.dispatch({ type: 'increment' })
        local.childrens.dispatch({ type: 'update', payload: props.children })
        await functions.delay(duration)
        props.isPending.dispatch({ type: 'decrement' })
        local.childrens.dispatch({ type: 'clean' })
      }
    },
    deps: [props.children]
  })
  return (
    <Root>
      {local.childrens.state.map(value => {
        return (
          <Page
            key={value.id}
            currentPage={props.currentPage}
            page={value}
            length={local.childrens.state.length}
          />
        )
      })}
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`

export default Childrens
