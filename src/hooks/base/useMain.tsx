import * as React from 'react'

// TODO: これ多分共通化できる location.path
const useMain = (): void => {
  React.useEffect(() => {
    document.getElementById('main').scrollTop = 0
  }, [])
}

export default useMain
