import { createContainer } from 'unstated-next'
import { CurrentPage, useCurrentPage } from './currentPage'
import { Playing, usePlaying } from './playing'
import { IsPending, useIsPending } from './isPending'

type Global = () => {
  currentPage: CurrentPage
  playing: Playing
  isPending: IsPending
}

const global: Global = () => {
  const currentPage = useCurrentPage()
  const playing = usePlaying()
  const isPending = useIsPending()
  return {
    currentPage,
    playing,
    isPending
  }
}

const container = createContainer(global)
const useGlobal = container.useContainer
const Provider = container.Provider

export { useGlobal, Provider }
