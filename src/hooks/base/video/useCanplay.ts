import * as React from 'react'

type UseCanplay = (params: {
  video: React.MutableRefObject<HTMLVideoElement>
  canplay: () => void
}) => void

const useCanplay: UseCanplay = params => {
  React.useEffect(() => {
    const { video, canplay } = params
    video.current.addEventListener('canplay', canplay)
    return (): void => {
      video.current.removeEventListener('canplay', canplay)
    }
  }, [])
}

export default useCanplay
