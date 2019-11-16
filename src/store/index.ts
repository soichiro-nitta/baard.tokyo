import * as React from 'react'
import { createContainer } from 'unstated-next'
import useReducerFormatter from '~/hooks/base/useReducerFormatter'

type Store = () => {
  video: {
    state: HTMLVideoElement
    dispatch: React.Dispatch<{
      type: 'set'
      payload: HTMLVideoElement
    }>
  }
  isPending: {
    state: HTMLVideoElement
    dispatch: React.Dispatch<{
      type: 'on' | 'off'
    }>
  }
}

const store: Store = () => {
  const video = useReducerFormatter((state, action) => {
    switch (action.type) {
      case 'set':
        return action.payload
      default:
        throw new Error()
    }
  }, null)
  const isPending = useReducerFormatter((state, action) => {
    switch (action.type) {
      case 'on':
        return true
      case 'off':
        return false
      default:
        throw new Error()
    }
  }, false)
  return {
    video,
    isPending
  }
}

const container = createContainer(store)
const useStore = container.useContainer
const Provider = container.Provider

export { useStore, Provider }
