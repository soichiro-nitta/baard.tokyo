import { TweenMax, Expo } from 'gsap'

const scaleX = (
  element: Element | HTMLCollection,
  value: number,
  duration: number,
  easing: 'In' | 'Out' | 'InOut'
): void => {
  TweenMax.to(element, duration, {
    scaleX: value,
    ease: Expo[`ease${easing}`]
  })
}

export default scaleX
