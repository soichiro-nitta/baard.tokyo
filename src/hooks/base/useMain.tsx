import * as React from 'react'

const useMain = (): void => {
  React.useEffect(() => {
    document.getElementById('main').scrollTop = 0
  }, [])
}

export default useMain
