import { TweenMax, Expo } from 'gsap'
import functions from '~/utils/functions'

const openingPath = async (path: SVGPathElement): Promise<void> => {
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
}

export default openingPath
