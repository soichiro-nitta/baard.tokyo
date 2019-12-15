import useReducerFormatter from '~/hooks/base/useReducerFormatter'

export type Setter = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  state: any
  dispatch: React.Dispatch<{
    type: 'set'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload: any
  }>
}

export const useSetter = (): Setter => {
  return useReducerFormatter((state, action) => {
    switch (action.type) {
      case 'set':
        return action.payload
      default:
        throw new Error()
    }
  }, null)
}
