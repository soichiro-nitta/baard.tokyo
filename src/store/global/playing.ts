import useReducerFormatter from '~/hooks/base/useReducerFormatter'

export type Playing = {
  state: HTMLVideoElement
  dispatch: React.Dispatch<{
    type: 'set'
    payload: HTMLVideoElement
  }>
}

export const usePlaying = (): Playing => {
  return useReducerFormatter((state, action) => {
    switch (action.type) {
      case 'set':
        return action.payload
      default:
        throw new Error()
    }
  }, null)
}
