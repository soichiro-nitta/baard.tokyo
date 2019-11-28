import * as React from 'react'

type UseObserve = (params: {
  ref: React.MutableRefObject<HTMLElement>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  observeIn: (ref?: React.MutableRefObject<any>) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  observeOut: (ref?: React.MutableRefObject<any>) => void
  rootMargin?: string
}) => void

const useObserve: UseObserve = params => {
  const { ref, observeIn, observeOut, rootMargin } = params
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries[0].isIntersecting ? observeIn(ref) : observeOut(ref)
      },
      {
        rootMargin
      }
    )
    observer.observe(ref.current)
    return (): void => observer.unobserve(ref.current)
  }, [])
}

export default useObserve
