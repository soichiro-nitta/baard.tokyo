import useReducerFormatter from '~/hooks/base/useReducerFormatter'

export type Colorscheme = {
  state: 'light' | 'dark'
  dispatch: React.Dispatch<{
    type: 'set'
    payload: 'light' | 'dark'
  }>
}

export const useColorscheme = (): Colorscheme => {
  return useReducerFormatter((state, action) => {
    switch (action.type) {
      case 'set':
        return action.payload
      default:
        throw new Error()
    }
  }, 'light')
}
