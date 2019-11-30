import * as React from 'react'
import styles from '~/utils/styles'
import { Large } from '../../store/global/large'

type UseWindow = (params: { large: Large }) => void

const useWindow: UseWindow = params => {
  const { large } = params
  React.useEffect(() => {
    if (window.innerWidth >= styles.sizes.mq.large)
      large.dispatch({ type: 'on' })
    window.addEventListener('resize', () => {
      if (window.innerWidth >= styles.sizes.mq.large) {
        large.dispatch({ type: 'on' })
      } else {
        large.dispatch({ type: 'off' })
      }
    })
  }, [])
}

export default useWindow
