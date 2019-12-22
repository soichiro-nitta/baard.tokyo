import { TweenMax } from 'gsap'

const set = (
  element: Element | Element[] | HTMLCollection,
  values: object
): void => {
  requestAnimationFrame(() => {
    TweenMax.set(element, values)
  })
}

export default set
