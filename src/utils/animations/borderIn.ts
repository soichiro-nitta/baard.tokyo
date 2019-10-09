import { TweenMax, Expo } from 'gsap'
import functions from '~/utils/functions'
// import colors from '~/utils/emotion/colors'

const borderIn = async (border: HTMLDivElement): Promise<void> => {
  await functions.raf()
  TweenMax.to(border, 2, {
    y: '0%',
    ease: Expo.easeIn
  })
}

export default borderIn
