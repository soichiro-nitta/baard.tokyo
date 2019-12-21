import { TweenMax, Expo } from 'gsap'

const width = (
  element: Element | Element[],
  value: string,
  duration: number,
  easing: 'In' | 'Out' | 'InOut'
): void => {
  TweenMax.to(element, duration, {
    width: value,
    ease: Expo[`ease${easing}`]
  })
}

export default width
