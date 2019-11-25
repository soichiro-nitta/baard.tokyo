import * as React from 'react'
import { Squashed } from '~/store/default/Scrollbar/squashed'

type UseReset = (params: {
  squashed: Squashed
  gauge: React.MutableRefObject<HTMLDivElement>
}) => void

const useReset: UseReset = params => {
  const { squashed, gauge } = params
  React.useEffect(() => {
    gauge.current.style.transform = 'scaleX(0)'
  }, [squashed.state])
}

export default useReset
