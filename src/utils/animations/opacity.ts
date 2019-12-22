import { TweenMax, Expo } from 'gsap'

const opacity = (
  element: Element | Element[],
  value: number,
  duration: number,
  easing: 'In' | 'Out' | 'InOut'
): void => {
  requestAnimationFrame(() => {
    TweenMax.to(element, duration, {
      opacity: value,
      ease: Expo[`ease${easing}`]
    })
  })
}

export default opacity
