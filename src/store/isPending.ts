import useReducerFormatter from '~/hooks/base/useReducerFormatter'

export type IsPending = {
  state: HTMLVideoElement
  dispatch: React.Dispatch<{
    type: 'on' | 'off'
  }>
}

const isPending = useReducerFormatter((state, action) => {
  switch (action.type) {
    case 'on':
      return true
    case 'off':
      return false
    default:
      throw new Error()
  }
}, null)

export default isPending
