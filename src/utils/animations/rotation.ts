import { TweenMax, Expo } from 'gsap'

const rotation = (
  element: Element | HTMLCollection,
  value: string,
  duration: number,
  easing: 'In' | 'Out' | 'InOut'
): void => {
  requestAnimationFrame(() => {
    TweenMax.to(element, duration, {
      rotation: value,
      ease: Expo[`ease${easing}`]
    })
  })
}

export default rotation
