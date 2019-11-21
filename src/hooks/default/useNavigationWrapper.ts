import functions from '~/utils/functions'
import animations from '~/utils/animations'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import { Gnav } from '~/store/default/gnav'

type UseNavigationWrapper = (
  gnav: Gnav,
  navigationWrapper: React.MutableRefObject<HTMLDivElement>
) => void

const useNavigationWrapper: UseNavigationWrapper = (
  gnav,
  navigationWrapper
) => {
  useEffectAsync({
    effect: async () => {
      if (gnav.state) {
        animations.set(navigationWrapper.current, { display: 'block' })
      } else {
        await functions.delay(1)
        animations.set(navigationWrapper.current, { display: 'none' })
      }
    },
    deps: [gnav.state]
  })
}

export default useNavigationWrapper
