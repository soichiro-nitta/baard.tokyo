import { useTimeoutId, TimeoutId } from './timeoutId'

type UseLocal = () => {
  timeoutId: TimeoutId
}

export const useLocal: UseLocal = () => {
  const timeoutId = useTimeoutId()
  return {
    timeoutId
  }
}
