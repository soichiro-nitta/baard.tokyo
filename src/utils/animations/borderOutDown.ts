import { TweenMax, Expo } from 'gsap'
import functions from '~/utils/functions'

const borderOutDown = async (border: HTMLDivElement): Promise<void> => {
  await functions.raf()
  TweenMax.to(border, 0.5, {
    y: '100%',
    ease: Expo.easeInOut
  })
}

export default borderOutDown
