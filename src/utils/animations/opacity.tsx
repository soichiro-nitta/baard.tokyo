import { TweenMax, Expo } from 'gsap'

const opacity = (
  element: HTMLDivElement,
  value: number,
  duration: number,
  easing: 'In' | 'Out' | 'InOut'
): void => {
  TweenMax.to(element, duration, {
    opacity: value,
    ease: Expo[`ease${easing}`]
  })
}

export default opacity
