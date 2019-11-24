import * as React from 'react'
import styled from '@emotion/styled'
import { IsPending } from '~/store/global/isPending'
import { useLocal } from '~/store/default/Childrens'
import useAdd from '~/hooks/default/Childrens/useAdd'
import useUpdate from '~/hooks/default/Childrens/useUpdate'
import useClean from '~/hooks/default/Childrens/useClean'
import Page from '~/components/default/Childrens/Page'

type Props = {
  isPending: IsPending
}

const Childrens: React.FC<Props> = props => {
  const local = useLocal()
  useAdd({
    childrens: local.childrens,
    node: props.children
  })
  useUpdate({
    isPending: props.isPending,
    childrens: local.childrens,
    node: props.children
  })
  useClean({
    isPending: props.isPending,
    childrens: local.childrens
  })
  return (
    <Root>
      {local.childrens.state.map(value => {
        return <Page key={value.id} isPending={props.isPending} page={value} />
      })}
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 1.3rem;
  z-index: 0;
`

export default Childrens
