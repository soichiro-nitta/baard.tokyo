import { TweenMax } from 'gsap'

const set = (element: HTMLDivElement, values: object): void => {
  TweenMax.set(element, values)
}

export default set
