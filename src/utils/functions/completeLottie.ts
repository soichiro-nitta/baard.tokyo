const completeLottie = (anim: HTMLMediaElement): Promise<void> => {
  return new Promise((resolve): void => {
    anim.addEventListener('complete', () => {
      resolve()
    })
  })
}

export default completeLottie
