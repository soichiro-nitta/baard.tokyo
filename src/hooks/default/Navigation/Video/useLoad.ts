import * as React from 'react'

type UseLoad = (params: {
  video: React.MutableRefObject<HTMLVideoElement>
}) => void

const useLoad: UseLoad = params => {
  const { video } = params
  React.useEffect(() => {
    video.current.load()
  }, [])
}

export default useLoad
