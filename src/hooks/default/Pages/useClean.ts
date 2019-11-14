import * as React from 'react'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import functions from '~/utils/functions'

const useClean = (params: {
  isPending: boolean
  dispatch: React.Dispatch<{ type: 'clean' }>
}): void => {
  const { isPending, dispatch } = params
  useEffectAsync({
    effect: async () => {
      if (!isPending) {
        await functions.delay(1)
        dispatch({ type: 'clean' })
      }
    },
    deps: [isPending]
  })
}

export default useClean
