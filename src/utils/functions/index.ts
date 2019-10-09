const functions = {
  loadWindow(window: Window): Promise<void> {
    return new Promise((resolve): void => {
      window.onload = (): void => {
        resolve()
      }
    })
  },
  loadImage(src: string): Promise<void> {
    return new Promise((resolve): void => {
      const image = new Image()
      image.onload = (): void => {
        resolve()
      }
      image.src = src
    })
  },
  delay(ms: number): Promise<void> {
    return new Promise((resolve): void => {
      setTimeout(resolve, ms)
    })
  },
  raf(): Promise<void> {
    return new Promise((resolve): void => {
      requestAnimationFrame((): void => {
        resolve()
      })
    })
  },
  completeLottie(anim: HTMLMediaElement): Promise<void> {
    return new Promise((resolve): void => {
      anim.addEventListener('complete', () => {
        resolve()
      })
    })
  },
  canplayVideo(video: HTMLVideoElement): Promise<void> {
    return new Promise((resolve): void => {
      video.addEventListener('canplay', () => {
        resolve()
      })
    })
  },
  async playVideo(video: HTMLVideoElement): Promise<void> {
    video.load()
    video.currentTime = Math.floor(Math.random() * (video.duration + 1 - 0))
    await this.$canplayVideo(video)
    video.play()
  },
  hex2rgb(hex: string): number[] {
    if (hex.slice(0, 1) == '#') hex = hex.slice(1)
    if (hex.length == 3)
      hex =
        hex.slice(0, 1) +
        hex.slice(0, 1) +
        hex.slice(1, 2) +
        hex.slice(1, 2) +
        hex.slice(2, 3) +
        hex.slice(2, 3)
    // TODO: ここを文字列で返すようにする
    return [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)].map(function(
      str
    ) {
      return parseInt(str, 16)
    })
  }
}

export default functions
