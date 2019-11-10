import * as React from 'react'
import styled from '@emotion/styled'
import useUpdate from '~/hooks/default/Main/useUpdate'
import Page from '~/components/default/Main/Page'

type Pages = {
  id: number
  leave: boolean
  node: React.ReactNode
}[]

const Main: React.FC = props => {
  const [pages, setPages] = React.useState<Pages>([])
  React.useEffect(() => {
    // if (pages.length > 1) {
    // setPages(pages.filter(value => !value.leave))
    // }
  })
  useUpdate(pages, setPages, props.children)
  return (
    <Root id="main">
      {pages.map(value => {
        return <Page key={value.id} page={value} />
      })}
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 1.3rem;
  z-index: 0;
`

export default Main
