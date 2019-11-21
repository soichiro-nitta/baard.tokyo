import { IsPending } from '~/store/global/isPending'
import { Pages } from '~/store/default/Pages/pages'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import functions from '~/utils/functions'

type UseClean = (params: { isPending: IsPending; pages: Pages }) => void

const useClean: UseClean = params => {
  const { isPending, pages } = params
  useEffectAsync({
    effect: async () => {
      if (!isPending.state) {
        await functions.delay(1)
        pages.dispatch({ type: 'clean' })
      }
    },
    deps: [isPending.state]
  })
}

export default useClean
