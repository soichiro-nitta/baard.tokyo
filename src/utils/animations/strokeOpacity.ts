import { TweenMax, Expo } from 'gsap'

const strokeOpacity = (
  element: Element | HTMLCollection,
  value: number,
  duration: number,
  easing: 'In' | 'Out' | 'InOut'
): void => {
  requestAnimationFrame(() => {
    TweenMax.to(element, duration, {
      strokeOpacity: value,
      ease: Expo[`ease${easing}`]
    })
  })
}

export default strokeOpacity
