import { TweenMax, Expo } from 'gsap'
import functions from '~/utils/functions'

const borderIn = async (border: HTMLDivElement): Promise<void> => {
  await functions.raf()
  TweenMax.to(border, 1.7, {
    y: '0%',
    ease: Expo.easeIn
  })
}

export default borderIn
