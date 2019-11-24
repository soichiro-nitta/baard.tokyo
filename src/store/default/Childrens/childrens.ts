import * as React from 'react'
import useReducerFormatter from '~/hooks/base/useReducerFormatter'

export type Childrens = {
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

export const useChildrens = (): Childrens => {
  return useReducerFormatter((childrens, action) => {
    switch (action.type) {
      case 'add':
        return [{ id: 0, leave: false, node: action.payload }]
      case 'update': {
        const modified = childrens.map(value => {
          return {
            id: value.id,
            leave: true,
            node: value.node
          }
        })
        return [
          ...modified,
          {
            id: childrens[childrens.length - 1].id + 1,
            leave: false,
            node: action.payload
          }
        ]
      }
      case 'clean': {
        return childrens.filter(value => {
          return !value.leave
        })
      }
      default:
        throw new Error()
    }
  }, [])
}
