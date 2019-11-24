import * as React from 'react'
import animations from '~/utils/animations'
import { IsPending } from '~/store/global/isPending'

type UseIn = (params: {
  isPending: IsPending
  root: React.MutableRefObject<SVGSVGElement>
}) => void

const useIn: UseIn = params => {
  const { isPending, root } = params
  React.useEffect(() => {
    if (isPending.state) {
      root.current.style.display = 'block'
      animations.opacity(root.current, 1, 0.6, 'InOut')
    }
  }, [isPending.state])
}

export default useIn
