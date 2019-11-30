import * as React from 'react'
import {
  faHome,
  faCut,
  faClipboardList,
  faMapMarkedAlt,
  faFillDrip,
  faPhone
} from '@fortawesome/pro-duotone-svg-icons'
import { Large } from '~/store/global/large'
import Desktop from './Desktop'
import Mobile from './Mobile'

type Props = {
  large: Large
}

const Dashboard: React.FC<Props> = props => {
  const links = [
    {
      name: 'ホーム',
      to: '/',
      icon: faHome
    },
    {
      name: 'サロン・スタッフ紹介',
      to: '/salon',
      icon: faCut
    },
    {
      name: 'メニュー案内',
      to: '/service',
      icon: faClipboardList
    },
    {
      name: 'アクセス',
      to: '/access',
      icon: faMapMarkedAlt
    }
  ]
  const options = [
    {
      icon: faFillDrip
    }
  ]
  const tel = {
    name: '03-6876-6647',
    icon: faPhone,
    href: 'tel:0368766647'
  }
  return (
    <>
      {(props.large.state && (
        <Desktop links={links} options={options} tel={tel} />
      )) || <Mobile links={links} options={options} tel={tel} />}
    </>
  )
}

export default Dashboard
