import * as React from 'react'
import styled from '@emotion/styled'
import functions from '~/utils/functions'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import Page from '~/components/default/Pages/Page'
import usePages from '~/hooks/default/Pages/usePages'

type Props = {
  isPending: boolean
  setIsPending: (isPending: boolean) => void
}

const Pages: React.FC<Props> = props => {
  const [pages, dispatch] = usePages(props.children)
  React.useEffect(() => {
    if (pages.length === 0) {
      dispatch({ type: 'init' })
    }
  }, [props.children])
  React.useEffect(() => {
    if (pages.length !== 0) {
      dispatch({ type: 'update' })
      props.setIsPending(true)
    }
  }, [props.children])
  useEffectAsync({
    effect: async () => {
      if (!props.isPending) {
        await functions.delay(1)
        dispatch({ type: 'clean' })
      }
    },
    deps: [props.isPending]
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
