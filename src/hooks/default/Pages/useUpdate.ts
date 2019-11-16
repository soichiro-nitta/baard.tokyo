import * as React from 'react'

const useUpdate = (params: {
  isPending: {
    state: HTMLVideoElement
    dispatch: React.Dispatch<{
      type: 'on' | 'off'
    }>
  }
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
  const { isPending, pages, node } = params
  React.useEffect(() => {
    if (pages.state.length !== 0) {
      isPending.dispatch({ type: 'on' })
      pages.dispatch({ type: 'update' })
    }
  }, [node])
}

export default useUpdate
