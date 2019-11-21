import * as React from 'react'
import { IsPending } from '~/store/global/isPending'
import { Pages } from '~/store/default/Pages/pages'

type UseUpdate = (params: {
  isPending: IsPending
  pages: Pages
  node: React.ReactNode
}) => void

const useUpdate: UseUpdate = params => {
  const { isPending, pages, node } = params
  React.useEffect(() => {
    if (pages.state.length !== 0) {
      isPending.dispatch({ type: 'on' })
      pages.dispatch({ type: 'update', payload: node })
    }
  }, [node])
}

export default useUpdate
