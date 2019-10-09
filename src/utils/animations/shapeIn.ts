import { TweenMax, Expo } from 'gsap'
import functions from '~/utils/functions'

const shapeIn = async (shape: HTMLDivElement): Promise<void> => {
  await functions.raf()
  TweenMax.to(shape, 1.5, {
    y: '0%',
    ease: Expo.easeIn
  })
}

export default shapeIn
