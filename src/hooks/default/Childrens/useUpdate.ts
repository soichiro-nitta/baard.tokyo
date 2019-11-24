import * as React from 'react'
import { IsPending } from '~/store/global/isPending'
import { Childrens } from '~/store/default/Childrens/childrens'

type UseUpdate = (params: {
  isPending: IsPending
  childrens: Childrens
  node: React.ReactNode
}) => void

const useUpdate: UseUpdate = params => {
  const { isPending, childrens, node } = params
  React.useEffect(() => {
    if (childrens.state.length !== 0) {
      isPending.dispatch({ type: 'on' })
      childrens.dispatch({ type: 'update', payload: node })
    }
  }, [node])
}

export default useUpdate
