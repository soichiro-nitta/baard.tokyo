import { TweenMax, Expo } from 'gsap'

const strokeDashoffset = (
  element: Element | HTMLCollection,
  value: number | string,
  duration: number,
  easing: 'In' | 'Out' | 'InOut'
): void => {
  requestAnimationFrame(() => {
    TweenMax.to(element, duration, {
      strokeDashoffset: value,
      ease: Expo[`ease${easing}`]
    })
  })
}

export default strokeDashoffset
