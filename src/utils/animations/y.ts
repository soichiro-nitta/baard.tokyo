import { TweenMax, Expo } from 'gsap'

const y = (
  element: Element | HTMLCollection,
  value: string | number,
  duration: number,
  easing: 'In' | 'Out' | 'InOut'
): void => {
  TweenMax.to(element, duration, {
    y: value,
    ease: Expo[`ease${easing}`]
  })
}

export default y
