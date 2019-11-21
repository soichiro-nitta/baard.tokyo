import * as React from 'react'

type UseObserve = (params: {
  ref: React.MutableRefObject<Element>
  observeIn: () => void
  observeOut: () => void
}) => void

const useObserve: UseObserve = params => {
  const { ref, observeIn, observeOut } = params
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries[0].isIntersecting ? observeIn() : observeOut()
    })
    observer.observe(ref.current)
    return (): void => observer.unobserve(ref.current)
  }, [])
}

export default useObserve
