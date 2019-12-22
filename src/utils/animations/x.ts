import { TweenMax, Expo } from 'gsap'

const x = (
  element: Element | HTMLCollection,
  value: string | number,
  duration: number,
  easing: 'In' | 'Out' | 'InOut'
): void => {
  requestAnimationFrame(() => {
    TweenMax.to(element, duration, {
      x: value,
      ease: Expo[`ease${easing}`]
    })
  })
}

export default x
