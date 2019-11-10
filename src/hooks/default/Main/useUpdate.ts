import * as React from 'react'

type Pages = {
  id: number
  leave: boolean
  node: React.ReactNode
}[]

const useUpdate = (
  pages: Pages,
  setPages: React.Dispatch<React.SetStateAction<Pages>>,
  node: React.ReactNode
): void => {
  React.useEffect(() => {
    if (pages.length) {
      const updated = pages.map(value => {
        return {
          id: value.id,
          leave: true,
          node: value.node
        }
      })
      setPages([
        ...updated,
        { id: pages[pages.length - 1].id + 1, leave: false, node }
      ])
    } else {
      setPages([{ id: 0, leave: false, node }])
    }
  }, [node])
}

export default useUpdate
