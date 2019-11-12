import * as React from 'react'
import styled from '@emotion/styled'
import useUpdate from '~/hooks/default/Main/useUpdate'
import Page from '~/components/default/Main/Page'
import useEffectAsync from '~/hooks/base/useEffectAsync'

type Props = {
  isPending: boolean
  setIsPending: (isPending: boolean) => void
}
type Pages = {
  id: number
  leave: boolean
  node: React.ReactNode
}[]

const Main: React.FC<Props> = props => {
  const [pages, setPages] = React.useState<Pages>([])
  React.useEffect(() => {
    if (!props.isPending) {
      if (pages.length > 1) {
        setTimeout(() => {
          setPages(pages.filter(value => !value.leave))
        }, 1000)
      }
    }
  }, [props.isPending])
  useUpdate(props.setIsPending, pages, setPages, props.children)
  return (
    <Root id="main">
      {pages.map(value => {
        return (
          <Page
            key={value.id}
            isPending={props.isPending}
            setIsPending={props.setIsPending}
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

export default Main
