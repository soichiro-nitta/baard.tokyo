import * as React from 'react'
import { createContainer } from 'unstated-next'

type StoreTypes = {
  video: HTMLVideoElement
  setVideo: (video: HTMLVideoElement) => void
}

const store = (): StoreTypes => {
  const [video, setVideo] = React.useState(null)
  return { video, setVideo }
}

const container = createContainer(store)
const useStore = container.useContainer
const Provider = container.Provider

export { useStore, Provider }
