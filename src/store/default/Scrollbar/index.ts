import { useSquashed, Squashed } from './squashed'

type UseLocal = () => {
  squashed: Squashed
}

export const useLocal: UseLocal = () => {
  const squashed = useSquashed()
  return {
    squashed
  }
}
