import * as React from 'react'
import styled from '@emotion/styled'
import useUpdate from '~/hooks/default/Pages/useUpdate'
import Page from '~/components/default/Pages/Page'

type Props = {
  isPending: boolean
  setIsPending: (isPending: boolean) => void
}
type Pages = {
  id: number
  leave: boolean
  node: React.ReactNode
}[]

const Pages: React.FC<Props> = props => {
  const [pages, setPages] = React.useState<Pages>([])
  const cleanPages = (): void => {
    setPages(pages.filter(value => !value.leave))
  }
  useUpdate(props.setIsPending, pages, setPages, props.children)
  return (
    <Root id="main">
      {pages.map(value => {
        return (
          <Page
            key={value.id}
            isPending={props.isPending}
            setIsPending={props.setIsPending}
            cleanPages={cleanPages}
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
  font-size: 1.3rem;
  z-index: 0;
`

export default Pages
