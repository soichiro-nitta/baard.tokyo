import { TweenMax, Expo } from 'gsap'

const color = (
  element: Element | Element[],
  value: string,
  duration: number,
  easing: 'In' | 'Out' | 'InOut'
): void => {
  requestAnimationFrame(() => {
    TweenMax.to(element, duration, {
      color: value,
      ease: Expo[`ease${easing}`]
    })
  })
}

export default color
