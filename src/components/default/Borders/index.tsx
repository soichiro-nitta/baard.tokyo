import * as React from 'react'
import { isMobile } from 'react-device-detect'
import Desktop from './Desktop'
import Mobile from './Mobile'

const Borders: React.FC = () => {
  return <>{(!isMobile && <Desktop />) || <Mobile />}</>
}

export default Borders
