import useReducerFormatter from '~/hooks/base/useReducerFormatter'

export type Video = {
  state: HTMLVideoElement
  dispatch: React.Dispatch<{
    type: 'set'
    payload: HTMLVideoElement
  }>
}

export const useVideo = (): Video => {
  return useReducerFormatter((state, action) => {
    switch (action.type) {
      case 'set':
        return action.payload
      default:
        throw new Error()
    }
  }, null)
}
