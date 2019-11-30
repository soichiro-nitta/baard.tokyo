import * as React from 'react'
import { Large } from '~/store/global/large'
import Desktop from './Desktop'
import Mobile from './Mobile'

type Props = {
  large: Large
}

const Borders: React.FC<Props> = props => {
  return <>{(props.large.state && <Desktop />) || <Mobile />}</>
}

export default Borders
