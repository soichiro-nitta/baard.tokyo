import * as React from 'react'

type UseLoad = (video: React.MutableRefObject<HTMLVideoElement>) => void

const useLoad: UseLoad = video => {
  React.useEffect(() => {
    video.current.load()
  }, [])
}

export default useLoad
