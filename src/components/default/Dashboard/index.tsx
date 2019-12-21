import * as React from 'react'
import { Large } from '~/store/global/large'
import Desktop from './Desktop'
import Mobile from './Mobile'
import { IsPending } from '~/store/global/isPending'
import { Launched } from '~/store/default/launched'

type Props = {
  launched: Launched
  large: Large
  isPending: IsPending
}

const Dashboard: React.FC<Props> = props => {
  return (
    <>
      {(props.large.state && <Desktop launched={props.launched} />) || (
        <Mobile />
      )}
    </>
  )
}

export default Dashboard
