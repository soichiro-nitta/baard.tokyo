import { useEffect } from 'react'

const useEffectAsync = (params: {
  effect: () => void
  cleanup?: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deps?: readonly any[]
}): void => {
  const { effect, deps, cleanup } = params
  useEffect(() => {
    effect()
    return cleanup
  }, deps)
}

export default useEffectAsync
