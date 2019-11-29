import * as React from 'react'
import { IsPending } from '~/store/global/isPending'

type UseCanplaythrough = (params: {
  isPending: IsPending
  root: React.MutableRefObject<HTMLVideoElement>
}) => void

const useCanplaythrough: UseCanplaythrough = params => {
  React.useEffect(() => {
    const { isPending, root } = params
    const canplaythrough = (): void => {
      isPending.dispatch({ type: 'off' })
    }
    root.current.addEventListener('loadeddata', canplaythrough)
    return (): void => {
      root.current.removeEventListener('loadeddata', canplaythrough)
    }
  }, [])
}

export default useCanplaythrough
