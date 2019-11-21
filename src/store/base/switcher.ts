import * as React from 'react'
import useReducerFormatter from '~/hooks/base/useReducerFormatter'

export type Switcher = {
  state: boolean
  dispatch: React.Dispatch<{
    type: 'on' | 'off'
  }>
}

export const useSwitcher = (): Switcher => {
  return useReducerFormatter((state, action) => {
    switch (action.type) {
      case 'on':
        return true
      case 'off':
        return false
      default:
        throw new Error()
    }
  }, false)
}
