import * as React from 'react'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import functions from '~/utils/functions'

const useClean = (params: {
  isPending: {
    state: HTMLVideoElement
    dispatch: React.Dispatch<{
      type: 'on' | 'off'
    }>
  }
  pages: {
    state: {
      id: number
      leave: boolean
      node: React.ReactNode
    }[]
    dispatch: React.Dispatch<{
      type: 'add' | 'update' | 'clean'
    }>
  }
}): void => {
  const { isPending, pages } = params
  useEffectAsync({
    effect: async () => {
      if (!isPending.state) {
        await functions.delay(1)
        pages.dispatch({ type: 'clean' })
      }
    },
    deps: [isPending.state]
  })
}

export default useClean
