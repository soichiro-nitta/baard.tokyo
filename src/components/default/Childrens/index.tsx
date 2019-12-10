import * as React from 'react'
import styled from '@emotion/styled'
import functions from '~/utils/functions'
import { CurrentPage } from '~/store/global/currentPage'
import { IsPending } from '~/store/global/isPending'
import { useLocal } from '~/store/default/Childrens'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import Page from '~/components/default/Childrens/Page'

type Props = {
  currentPage: CurrentPage
  isPending: IsPending
}

const Childrens: React.FC<Props> = props => {
  const local = useLocal()
  React.useEffect(() => {
    if (local.childrens.state.length === 0) {
      local.childrens.dispatch({ type: 'add', payload: props.children })
    }
  }, [props.children])
  React.useEffect(() => {
    if (local.childrens.state.length !== 0) {
      props.isPending.dispatch({ type: 'on' })
      local.childrens.dispatch({ type: 'update', payload: props.children })
    }
  }, [props.children])
  useEffectAsync({
    effect: async () => {
      if (!props.isPending.state) {
        await functions.delay(1)
        local.childrens.dispatch({ type: 'clean' })
      }
    },
    deps: [props.isPending.state]
  })
  return (
    <Root>
      {local.childrens.state.map(value => {
        return (
          <Page
            key={value.id}
            currentPage={props.currentPage}
            isPending={props.isPending}
            page={value}
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
