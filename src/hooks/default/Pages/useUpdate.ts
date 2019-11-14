import * as React from 'react'

const useUpdate = (params: {
  setIsPending: (isPending: boolean) => void
  pages: {
    id: number
    leave: boolean
    node: React.ReactNode
  }[]
  dispatch: React.Dispatch<{ type: 'update' }>
  node: React.ReactNode
}): void => {
  const { setIsPending, pages, dispatch, node } = params
  React.useEffect(() => {
    if (pages.length !== 0) {
      setIsPending(true)
      dispatch({ type: 'update' })
    }
  }, [node])
}

export default useUpdate
