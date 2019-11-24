import { Started, useStarted } from './started'

type UseLocal = () => {
  started: Started
}

export const useLocal: UseLocal = () => {
  const started = useStarted()
  return {
    started
  }
}
