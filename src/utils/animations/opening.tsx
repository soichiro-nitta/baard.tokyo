import { TweenMax, Expo } from 'gsap'
import functions from '~/utils/functions'

const opening = {
  path: async (path: SVGPathElement): Promise<void> => {
    const length = path.getTotalLength()
    await functions.raf()
    TweenMax.set(path, {
      strokeDasharray: length + ' ' + length,
      strokeDashoffset: length,
      opacity: 1,
      y: '30px',
      scale: 1.2
    })
    TweenMax.to(path, 1, {
      strokeDashoffset: 0,
      y: 0,
      scale: 1,
      ease: Expo.easeOut
    })
    TweenMax.to(path, 1, {
      fillOpacity: 1,
      strokeOpacity: 0,
      ease: Expo.easeInOut
    })
  },
  leave: async (
    paths: { [index: number]: SVGPathElement },
    root: HTMLDivElement
  ): Promise<void> => {
    await functions.raf()
    TweenMax.to(root, 1, {
      height: 0,
      ease: Expo.easeInOut
    })
    await functions.delay(350)
    TweenMax.to(paths, 1, {
      y: '-30px',
      opacity: 0,
      ease: Expo.easeOut
    })
  }
}

export default opening
