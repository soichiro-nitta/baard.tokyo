import { TweenMax, Expo } from 'gsap'
import functions from '~/utils/functions'

const paths = async (paths: { [index: number]: SVGElement }): Promise<void> => {
  await functions.raf()
  TweenMax.to(paths, 1, {
    y: '-30px',
    scale: 0.8,
    opacity: 0,
    ease: Expo.easeOut
  })
}

export default paths
