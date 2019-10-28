const raf = (): Promise<void> => {
  return new Promise((resolve): void => {
    requestAnimationFrame((): void => {
      resolve()
    })
  })
}

export default raf
