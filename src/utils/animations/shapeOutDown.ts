import { TweenMax, Expo } from 'gsap'
import functions from '~/utils/functions'
import colors from '~/utils/emotion/colors'

const shapeOutDown = async (shape: HTMLDivElement): Promise<void> => {
  await functions.raf()
  TweenMax.to(shape, 1, {
    opacity: 0,
    scale: 1.2,
    backgroundColor: colors.light.neutral,
    ease: Expo.easeInOut
  })
}

export default shapeOutDown
