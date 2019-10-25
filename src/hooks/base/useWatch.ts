import * as React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useWatch = (target: any): void => {
  React.useEffect(() => {
    console.log(target)
  }, [target])
}

export default useWatch
