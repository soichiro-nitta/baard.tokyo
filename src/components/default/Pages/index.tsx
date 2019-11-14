import * as React from 'react'
import styled from '@emotion/styled'
import usePages from '~/hooks/default/Pages/usePages'
import useAdd from '~/hooks/default/Pages/useadd'
import Page from '~/components/default/Pages/Page'
import useUpdate from '~/hooks/default/Pages/useUpdate'
import useClean from '~/hooks/default/Pages/useClean'

type Props = {
  isPending: boolean
  setIsPending: (isPending: boolean) => void
}

const Pages: React.FC<Props> = props => {
  const [pages, dispatch] = usePages(props.children)
  useAdd({
    pages,
    dispatch,
    node: props.children
  })
  useUpdate({
    setIsPending: props.setIsPending,
    pages,
    dispatch,
    node: props.children
  })
  useClean({
    isPending: props.isPending,
    dispatch
  })
  return (
    <Root id="main">
      {pages.map(value => {
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
