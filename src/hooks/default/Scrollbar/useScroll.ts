import * as React from 'react'

type UseScroll = (params: {
  page: HTMLDivElement
  gauge: React.MutableRefObject<HTMLDivElement>
}) => void

const useScroll: UseScroll = params => {
  const { page, gauge } = params
  React.useEffect(() => {
    if (page) {
      const scrollMax = page.scrollHeight - page.clientHeight
      const scroll = (): void => {
        gauge.current.style.transform = `scaleX(${page.scrollTop / scrollMax})`
      }
      page.addEventListener('scroll', scroll)
      return (): void => {
        page.removeEventListener('scroll', scroll)
      }
    }
  }, [page])
}

export default useScroll
