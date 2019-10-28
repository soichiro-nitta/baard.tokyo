import { TweenMax, Expo } from 'gsap'

const strokeDashoffset = (
  element: Element | HTMLCollection,
  value: number,
  duration: number,
  easing: 'In' | 'Out' | 'InOut'
): void => {
  TweenMax.to(element, duration, {
    strokeDashoffset: value,
    ease: Expo[`ease${easing}`]
  })
}

export default strokeDashoffset
