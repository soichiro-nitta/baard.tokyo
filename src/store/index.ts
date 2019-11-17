import { createContainer } from 'unstated-next'
import { useVideo, Video } from '~/store/video'
import { useIsPending, IsPending } from '~/store/isPending'

type Store = () => {
  video: Video
  isPending: IsPending
}

const store: Store = () => {
  const video = useVideo()
  const isPending = useIsPending()
  return {
    video,
    isPending
  }
}

const container = createContainer(store)
const useStore = container.useContainer
const Provider = container.Provider

export { useStore, Provider }
