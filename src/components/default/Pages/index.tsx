import * as React from 'react'
import styled from '@emotion/styled'
// import functions from '~/utils/functions'
// import useEffectAsync from '~/hooks/base/useEffectAsync'
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
  const initPages = (): void => {
    setPages([{ id: 0, leave: false, node: props.children }])
  }
  const updatePages = (): void => {
    const updated = pages.map(value => {
      return {
        id: value.id,
        leave: true,
        node: value.node
      }
    })
    setPages([
      ...updated,
      {
        id: pages[pages.length - 1].id + 1,
        leave: false,
        node: props.children
      }
    ])
  }
  // const cleanPages = (): void => {
  //   console.log('cleanPages')
  //   console.log(pages)
  // setPages(
  //   pages.filter(value => {
  //     return !value.leave
  //   })
  // )
  // }
  React.useEffect(() => {
    if (pages.length === 0) {
      initPages()
    }
  }, [props.children])
  React.useEffect(() => {
    if (pages.length !== 0) {
      updatePages()
      props.setIsPending(true)
    }
  }, [props.children])
  // useEffectAsync({
  //   effect: async () => {
  //     if (!props.isPending) {
  //       await functions.delay(1)
  //       cleanPages()
  //     }
  //   },
  //   deps: [props.isPending]
  // })
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
