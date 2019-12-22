import { TweenMax, Expo } from 'gsap'

const scale = (
  element: Element | Element[],
  value: number,
  duration: number,
  easing: 'In' | 'Out' | 'InOut'
): void => {
  requestAnimationFrame(() => {
    TweenMax.to(element, duration, {
      scale: value,
      ease: Expo[`ease${easing}`]
    })
  })
}

export default scale
