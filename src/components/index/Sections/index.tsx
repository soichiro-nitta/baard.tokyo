import * as React from 'react'
import Br from '~/components/base/Br'
import Border from '~/components/base/Border'
import Left from '~/components/index/Sections/Left'
import Right from '~/components/index/Sections/Right'
import { Playing } from '~/store/global/playing'
import { IsPending } from '~/store/global/isPending'
import { Launched } from '~/store/global/launched'

type Props = {
  playing: Playing
  isPending: IsPending
  launched: Launched
}

const Sections: React.FC<Props> = props => {
  return (
    <>
      <Br />
      <Border />
      <Br />
      <Right
        playing={props.playing}
        isPending={props.isPending}
        launched={props.launched}
        page="salon"
        src="/salon/header.mp4"
        body="サロンのこだわり、ご予約について、スタッフのご紹介"
      />
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Left
        playing={props.playing}
        isPending={props.isPending}
        launched={props.launched}
        page="service"
        src="/service/header.mp4"
        body="バーールトコース、メンズメニュー、レディースシェービング"
      />
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Right
        playing={props.playing}
        isPending={props.isPending}
        launched={props.launched}
        page="access"
        src="/access/header.mp4"
        body="店名、住所、最寄駅、電話番号、マップ、営業日について、駐車場のご案内"
      />
    </>
  )
}

export default Sections
