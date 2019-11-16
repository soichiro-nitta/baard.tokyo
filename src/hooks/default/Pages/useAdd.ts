import * as React from 'react'

const useAdd = (params: {
  pages: {
    state: {
      id: number
      leave: boolean
      node: React.ReactNode
    }[]
    dispatch: React.Dispatch<{
      type: 'add' | 'update' | 'clean'
    }>
  }
  node: React.ReactNode
}): void => {
  const { pages, node } = params
  React.useEffect(() => {
    if (pages.state.length === 0) {
      pages.dispatch({ type: 'add' })
    }
  }, [node])
}

export default useAdd
