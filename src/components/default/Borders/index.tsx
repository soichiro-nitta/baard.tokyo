import * as React from 'react'
import { isBrowser } from 'react-device-detect'
import Desktop from './Desktop'
import Mobile from './Mobile'

const Borders: React.FC = () => {
  return <>{(isBrowser && <Desktop />) || <Mobile />}</>
}

export default Borders
