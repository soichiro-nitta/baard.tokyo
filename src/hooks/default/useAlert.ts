import * as React from 'react'
import { isBrowser } from 'react-device-detect'

const useAlert = (): void => {
  React.useEffect(() => {
    if (isBrowser) {
      window.alert(
        'Coming Soon...現在PC版未実装のため、モバイルにて閲覧ください。'
      )
    }
  }, [])
}

export default useAlert
