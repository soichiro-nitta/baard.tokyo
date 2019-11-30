import { isBrowser } from 'react-device-detect'
import Desktop from './Desktop'
import Mobile from './Mobile'

export default isBrowser ? Desktop : Mobile
