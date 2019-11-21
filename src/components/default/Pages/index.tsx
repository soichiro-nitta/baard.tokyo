import * as React from 'react'
import styled from '@emotion/styled'
import { IsPending } from '~/store/global/isPending'
import { usePages } from '~/store/default/Pages/pages'
import useAdd from '~/hooks/default/Pages/useAdd'
import Page from '~/components/default/Pages/Page'
import useUpdate from '~/hooks/default/Pages/useUpdate'
import useClean from '~/hooks/default/Pages/useClean'

type Props = {
  isPending: IsPending
}

const Pages: React.FC<Props> = props => {
  const pages = usePages()
  useAdd({
    pages,
    node: props.children
  })
  useUpdate({
    isPending: props.isPending,
    pages,
    node: props.children
  })
  useClean({
    isPending: props.isPending,
    pages
  })
  return (
    <Root id="main">
      {pages.state.map(value => {
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

export default Pages
