import { TweenMax, Expo } from 'gsap'
import functions from '~/utils/functions'

const shapeOut = async (shape: HTMLDivElement): Promise<void> => {
  await functions.raf()
  TweenMax.to(shape, 1, {
    opacity: 0,
    ease: Expo.easeIn
  })
}

export default shapeOut
