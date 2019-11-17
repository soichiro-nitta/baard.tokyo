import useReducerFormatter from '~/hooks/base/useReducerFormatter'

export type IsPending = {
  state: HTMLVideoElement
  dispatch: React.Dispatch<{
    type: 'on' | 'off'
  }>
}

export const useIsPending = (): IsPending => {
  return useReducerFormatter((state, action) => {
    switch (action.type) {
      case 'on':
        return true
      case 'off':
        return false
      default:
        throw new Error()
    }
  }, null)
}
