import { TweenMax, Expo } from 'gsap'

const strokeDasharray = (
  element: Element | HTMLCollection,
  value: number | string,
  duration: number,
  easing: 'In' | 'Out' | 'InOut'
): void => {
  requestAnimationFrame(() => {
    TweenMax.to(element, duration, {
      strokeDasharray: value,
      ease: Expo[`ease${easing}`]
    })
  })
}

export default strokeDasharray
