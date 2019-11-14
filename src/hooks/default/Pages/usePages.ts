import * as React from 'react'

type Pages = {
  id: number
  leave: boolean
  node: React.ReactNode
}[]
type Action = {
  type: 'add' | 'update' | 'clean'
}

const usePages = (node: React.ReactNode): [Pages, React.Dispatch<Action>] => {
  return React.useReducer((pages: Pages, action: Action) => {
    switch (action.type) {
      case 'add':
        return [{ id: 0, leave: false, node }]
      case 'update': {
        const modified = pages.map(value => {
          return {
            id: value.id,
            leave: true,
            node: value.node
          }
        })
        return [
          ...modified,
          {
            id: pages[pages.length - 1].id + 1,
            leave: false,
            node
          }
        ]
      }
      case 'clean': {
        return pages.filter(value => {
          return !value.leave
        })
      }
      default:
        throw new Error()
    }
  }, [])
}

export default usePages
