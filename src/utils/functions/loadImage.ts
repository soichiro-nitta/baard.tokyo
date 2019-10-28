const loadImage = (src: string): Promise<void> => {
  return new Promise((resolve): void => {
    const image = new Image()
    image.onload = (): void => {
      resolve()
    }
    image.src = src
  })
}

export default loadImage
