import * as React from 'react'
import { createContainer } from 'unstated-next'

type StoreTypes = {
  video: HTMLVideoElement
  setVideo: (video: HTMLVideoElement) => void
  isPending: boolean
  setIsPending: (isPending: boolean) => void
  transitioning: boolean
  setTransitioning: (transitioning: boolean) => void
}

const store = (): StoreTypes => {
  const [video, setVideo] = React.useState(null)
  const [isPending, setIsPending] = React.useState(false)
  const [transitioning, setTransitioning] = React.useState(false)
  return {
    video,
    setVideo,
    isPending,
    setIsPending,
    transitioning,
    setTransitioning
  }
}

const container = createContainer(store)
const useStore = container.useContainer
const Provider = container.Provider

export { useStore, Provider }
