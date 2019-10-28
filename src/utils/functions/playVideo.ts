const playVideo = async (video: HTMLVideoElement): Promise<void> => {
  video.load()
  video.currentTime = Math.floor(Math.random() * (video.duration + 1 - 0))
  await this.$canplayVideo(video)
  video.play()
}

export default playVideo
