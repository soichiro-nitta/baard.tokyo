import * as React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UsePrevious = (value: any) => any

const usePrevious: UsePrevious = value => {
  const ref = React.useRef(null)
  React.useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

export default usePrevious
