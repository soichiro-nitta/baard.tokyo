import { TweenMax, Expo } from 'gsap'

const fillOpacity = (
  element: Element | HTMLCollection,
  value: number,
  duration: number,
  easing: 'In' | 'Out' | 'InOut'
): void => {
  requestAnimationFrame(() => {
    TweenMax.to(element, duration, {
      fillOpacity: value,
      ease: Expo[`ease${easing}`]
    })
  })
}

export default fillOpacity
