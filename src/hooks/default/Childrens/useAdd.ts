import * as React from 'react'
import { Childrens } from '~/store/default/Childrens/childrens'

type UseAdd = (params: { childrens: Childrens; node: React.ReactNode }) => void

const useAdd: UseAdd = params => {
  const { childrens, node } = params
  React.useEffect(() => {
    if (childrens.state.length === 0) {
      childrens.dispatch({ type: 'add', payload: node })
    }
  }, [node])
}

export default useAdd
