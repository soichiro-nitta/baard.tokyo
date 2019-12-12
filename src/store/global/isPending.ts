import * as React from 'react'
import useReducerFormatter from '~/hooks/base/useReducerFormatter'

export type IsPending = {
  state: number
  dispatch: React.Dispatch<{
    type: 'increment' | 'decrement'
  }>
}

export const useIsPending = (): IsPending => {
  return useReducerFormatter((state, action) => {
    switch (action.type) {
      case 'increment':
        return state + 1
      case 'decrement':
        return state - 1
      default:
        throw new Error()
    }
  }, 0)
}
