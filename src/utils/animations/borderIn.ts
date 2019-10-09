import { TweenMax, Expo } from 'gsap'
import functions from '~/utils/functions'
// import colors from '~/utils/emotion/colors'

const borderIn = async (border: HTMLDivElement): Promise<void> => {
  await functions.raf()
  TweenMax.to(border, 7, {
    y: '0%',
    ease: Expo.easeOut
  })
}

export default borderIn
