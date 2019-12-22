import * as React from 'react'
import { Large } from '~/store/global/large'
import Desktop from './Desktop'
import Mobile from './Mobile'
import { IsPending } from '~/store/global/isPending'
import { Launched } from '~/store/global/launched'
import { Colorscheme } from '~/store/global/colorscheme'

type Props = {
  colorscheme: Colorscheme
  launched: Launched
  large: Large
  isPending: IsPending
}

const Dashboard: React.FC<Props> = props => {
  return (
    <>
      {(props.large.state && (
        <Desktop colorscheme={props.colorscheme} launched={props.launched} />
      )) || <Mobile colorscheme={props.colorscheme} />}
    </>
  )
}

export default Dashboard
