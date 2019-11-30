import { createContainer } from 'unstated-next'
import { CurrentPage, useCurrentPage } from './currentPage'
import { Playing, usePlaying } from './playing'
import { IsPending, useIsPending } from './isPending'
import { Large, useLarge } from './large'

type Global = () => {
  currentPage: CurrentPage
  playing: Playing
  isPending: IsPending
  large: Large
}

const global: Global = () => {
  const currentPage = useCurrentPage()
  const playing = usePlaying()
  const isPending = useIsPending()
  const large = useLarge()
  return {
    currentPage,
    playing,
    isPending,
    large
  }
}

const container = createContainer(global)
const useGlobal = container.useContainer
const Provider = container.Provider

export { useGlobal, Provider }
