import useReducerFormatter from '~/hooks/base/useReducerFormatter'

export type CurrentPage = {
  state: HTMLDivElement
  dispatch: React.Dispatch<{
    type: 'set'
    payload: HTMLDivElement
  }>
}

export const useCurrentPage = (): CurrentPage => {
  return useReducerFormatter((state, action) => {
    switch (action.type) {
      case 'set':
        return action.payload
      default:
        throw new Error()
    }
  }, null)
}
