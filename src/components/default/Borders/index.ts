import { isMobile } from 'react-device-detect'
import Mobile from '~/components/default/Borders/Mobile'
import Desktop from '~/components/default/Borders/Desktop'

export default isMobile ? Mobile : Desktop
