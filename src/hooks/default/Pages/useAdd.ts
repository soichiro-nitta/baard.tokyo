import * as React from 'react'
import { Pages } from '~/store/default/Pages/pages'

type UseAdd = (params: { pages: Pages; node: React.ReactNode }) => void

const useAdd: UseAdd = params => {
  const { pages, node } = params
  React.useEffect(() => {
    if (pages.state.length === 0) {
      pages.dispatch({ type: 'add', payload: node })
    }
  }, [node])
}

export default useAdd
