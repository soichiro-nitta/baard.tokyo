const loadWindow = (window: Window): Promise<void> => {
  return new Promise((resolve): void => {
    window.onload = (): void => {
      resolve()
    }
  })
}

export default loadWindow
