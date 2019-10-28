import { useEffect } from 'react'

const useEffectAsync = (
  effect: () => void,
  options: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deps?: readonly any[]
    cleanup?: () => void
  }
): void => {
  useEffect(() => {
    effect()
    return options.cleanup
  }, options.deps)
}

export default useEffectAsync
