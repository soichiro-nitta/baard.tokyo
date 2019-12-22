import { Gnav, useGnav } from './gnav'

type UseLocal = () => {
  gnav: Gnav
}

export const useLocal: UseLocal = () => {
  const gnav = useGnav()
  return {
    gnav
  }
}
