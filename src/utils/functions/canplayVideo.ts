const canplayVideo = (video: HTMLVideoElement): Promise<void> => {
  return new Promise((resolve): void => {
    video.addEventListener('canplay', () => {
      resolve()
    })
  })
}

export default canplayVideo
