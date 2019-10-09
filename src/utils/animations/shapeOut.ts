import { TweenMax, Expo } from 'gsap'
import functions from '~/utils/functions'

const shapeOut = async (shape: HTMLDivElement): Promise<void> => {
  await functions.raf()
  TweenMax.to(shape, 2, {
    opacity: 0,
    ease: Expo.easeInOut
  })
}

export default shapeOut
