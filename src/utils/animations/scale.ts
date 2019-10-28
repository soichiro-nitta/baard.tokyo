import { TweenMax, Expo } from 'gsap'

const scale = (
  element: Element | HTMLCollection,
  value: number,
  duration: number,
  easing: 'In' | 'Out' | 'InOut'
): void => {
  TweenMax.to(element, duration, {
    scale: value,
    ease: Expo[`ease${easing}`]
  })
}

export default scale
