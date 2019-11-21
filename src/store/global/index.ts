import { createContainer } from 'unstated-next'
import { Playing, usePlaying } from './playing'
import { IsPending, useIsPending } from './isPending'

type Global = () => {
  playing: Playing
  isPending: IsPending
}

const global: Global = () => {
  const playing = usePlaying()
  const isPending = useIsPending()
  return {
    playing,
    isPending
  }
}

const container = createContainer(global)
const useGlobal = container.useContainer
const Provider = container.Provider

export { useGlobal, Provider }
