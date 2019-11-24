import { Childrens, useChildrens } from './childrens'

type UseLocal = () => {
  childrens: Childrens
}

export const useLocal: UseLocal = () => {
  const childrens = useChildrens()
  return {
    childrens
  }
}
