import * as React from 'react'
import useReducerFormatter from '~/hooks/base/useReducerFormatter'

export type Pages = {
  state: {
    id: number
    leave: boolean
    node: React.ReactNode
  }[]
  dispatch: React.Dispatch<{
    type: 'add' | 'update' | 'clean'
    payload?: React.ReactNode
  }>
}

export const usePages = (): Pages => {
  return useReducerFormatter((pages, action) => {
    switch (action.type) {
      case 'add':
        return [{ id: 0, leave: false, node: action.payload }]
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
            node: action.payload
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
