import * as React from 'react'

const useAdd = (params: {
  pages: {
    id: number
    leave: boolean
    node: React.ReactNode
  }[]
  dispatch: React.Dispatch<{ type: 'add' }>
  node: React.ReactNode
}): void => {
  const { pages, dispatch, node } = params
  React.useEffect(() => {
    if (pages.length === 0) {
      dispatch({ type: 'add' })
    }
  }, [node])
}

export default useAdd
