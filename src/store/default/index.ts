import { Launched, useLaunched } from './launched'
import { Gnav, useGnav } from './gnav'

type UseLocal = () => {
  launched: Launched
  gnav: Gnav
}

export const useLocal: UseLocal = () => {
  const launched = useLaunched()
  const gnav = useGnav()
  return {
    launched,
    gnav
  }
}
