import * as React from 'react'
import styles from '~/utils/styles'
import { Large } from '../../store/global/large'
import { Colorscheme } from '~/store/global/colorscheme'

type UseWindow = (params: { large: Large; colorscheme: Colorscheme }) => void

const useWindow: UseWindow = params => {
  const { large, colorscheme } = params
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
    if (localStorage.length === 0) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        colorscheme.dispatch({ type: 'set', payload: 'dark' })
      } else {
        colorscheme.dispatch({ type: 'set', payload: 'light' })
      }
    } else {
      colorscheme.dispatch({
        type: 'set',
        payload: localStorage.getItem('colorscheme') as 'dark' | 'light'
      })
    }
  }, [])
}

export default useWindow
