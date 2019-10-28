import { TweenMax } from 'gsap'

const set = (element: Element, values: object): void => {
  TweenMax.set(element, values)
}

export default set
