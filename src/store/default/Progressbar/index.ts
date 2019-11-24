import { Stretched, useStretched } from './stretched'

type UseLocal = () => {
  stretched: Stretched
}

export const useLocal: UseLocal = () => {
  const stretched = useStretched()
  return {
    stretched
  }
}
