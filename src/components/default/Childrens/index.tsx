import * as React from 'react'
import styled from '@emotion/styled'
import { CurrentPage } from '~/store/global/currentPage'
import { IsPending } from '~/store/global/isPending'
import { useLocal } from '~/store/default/Childrens'
import Page from '~/components/default/Childrens/Page'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import functions from '~/utils/functions'
import Seo from '~/components/base/Seo'
import config from '~/utils/config'

type Props = {
  children: React.ReactElement
  currentPage: CurrentPage
  isPending: IsPending
}

const Childrens: React.FC<Props> = props => {
  const local = useLocal()
  const duration = 2
  const pages = Object.entries(config.pages)
  const title = pages.filter(value => {
    return value[1].path === props.children.key
  })[0][1].en
  useEffectAsync({
    effect: async () => {
      if (local.childrens.state.length === 0) {
        local.childrens.dispatch({ type: 'add', payload: props.children })
      } else {
        const latest = local.childrens.state[local.childrens.state.length - 1]
          .node as React.ReactElement
        if (latest.key !== props.children.key) {
          await functions.delay(0.5)
          props.isPending.dispatch({ type: 'on' })
          local.childrens.dispatch({
            type: 'update',
            payload: props.children
          })
          await functions.delay(duration)
          props.isPending.dispatch({ type: 'off' })
          local.childrens.dispatch({ type: 'clean' })
        }
      }
    },
    deps: [props.children]
  })
  return (
    <Root>
      <Seo title={title} />
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
