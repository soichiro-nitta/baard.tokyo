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
    paths: { [index: number]: SVGElement },
    root: HTMLDivElement
  ): Promise<void> => {
    await functions.raf()
    TweenMax.to(root, 1, {
      height: 0,
      ease: Expo.easeInOut
    })
    await functions.delay(150)
    TweenMax.to(paths, 1, {
      y: '-30px',
      scale: 0.8,
      opacity: 0,
      ease: Expo.easeOut
    })
  },
  borderUp: (border: HTMLDivElement): void => {
    console.log(border)
  }
}

export default opening
