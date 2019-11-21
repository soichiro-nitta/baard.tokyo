import * as React from 'react'

type UseCanplaythrough = (params: {
  video: React.MutableRefObject<HTMLVideoElement>
  canplaythrough: () => void
}) => void

const useCanplaythrough: UseCanplaythrough = params => {
  React.useEffect(() => {
    const { video, canplaythrough } = params
    video.current.addEventListener('canplaythrough', canplaythrough)
    return (): void => {
      video.current.removeEventListener('canplaythrough', canplaythrough)
    }
  }, [])
}

export default useCanplaythrough
