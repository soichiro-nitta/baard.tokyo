import { TweenMax } from 'gsap'

const set = (
  element: Element | Element[] | HTMLCollection,
  values: object
): void => {
  TweenMax.set(element, values)
}

export default set
