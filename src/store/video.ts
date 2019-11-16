import useReducerFormatter from '~/hooks/base/useReducerFormatter'

export type Video = {
  state: HTMLVideoElement
  dispatch: React.Dispatch<{
    type: 'set'
    payload: HTMLVideoElement
  }>
}

const video: Video = useReducerFormatter((state, action) => {
  switch (action.type) {
    case 'set':
      return action.payload
    default:
      throw new Error()
  }
}, null)

export default video
