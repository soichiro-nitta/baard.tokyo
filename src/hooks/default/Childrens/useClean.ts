import { IsPending } from '~/store/global/isPending'
import { Childrens } from '~/store/default/Childrens/childrens'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import functions from '~/utils/functions'

type UseClean = (params: { isPending: IsPending; childrens: Childrens }) => void

const useClean: UseClean = params => {
  const { isPending, childrens } = params
  useEffectAsync({
    effect: async () => {
      if (!isPending.state) {
        await functions.delay(1)
        childrens.dispatch({ type: 'clean' })
      }
    },
    deps: [isPending.state]
  })
}

export default useClean
