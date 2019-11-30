import * as React from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'
import { Large } from '~/store/global/large'

type Props = {
  large: Large
}

const Borders: React.FC<Props> = props => {
  return <>{(props.large.state && <Desktop />) || <Mobile />}</>
}

export default Borders
