const functions = {
  $loadWindow(window: Window): Promise<void> {
    return new Promise((resolve): void => {
      window.onload = (): void => {
        resolve()
      }
    })
  },
  $loadImage(src: string): Promise<void> {
    return new Promise((resolve): void => {
      const image = new Image()
      image.onload = (): void => {
        resolve()
      }
      image.src = src
    })
  },
  $delay(ms: number): Promise<void> {
    return new Promise((resolve): void => {
      setTimeout(resolve, ms)
    })
  },
  $raf(): Promise<void> {
    return new Promise((resolve): void => {
      requestAnimationFrame((): void => {
        resolve()
      })
    })
  },
  $completeLottie(anim: HTMLMediaElement): Promise<void> {
    return new Promise((resolve): void => {
      anim.addEventListener('complete', () => {
        resolve()
      })
    })
  },
  $canplayVideo(video: HTMLVideoElement): Promise<void> {
    return new Promise((resolve): void => {
      video.addEventListener('canplay', () => {
        resolve()
      })
    })
  },
  async $playVideo(video: HTMLVideoElement): Promise<void> {
    video.load()
    video.currentTime = Math.floor(Math.random() * (video.duration + 1 - 0))
    await this.$canplayVideo(video)
    video.play()
  }
}

export default functions
