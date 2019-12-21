import * as React from 'react'
import { faFillDrip } from '@fortawesome/pro-duotone-svg-icons'
import { Large } from '~/store/global/large'
import Desktop from './Desktop'
import Mobile from './Mobile'
import { IsPending } from '~/store/global/isPending'

type Props = {
  large: Large
  isPending: IsPending
}

const Dashboard: React.FC<Props> = props => {
  const options = [
    {
      icon: faFillDrip
    }
  ]
  return (
    <>
      {(props.large.state && <Desktop options={options} />) || (
        <Mobile options={options} isPending={props.isPending} />
      )}
    </>
  )
}

export default Dashboard
