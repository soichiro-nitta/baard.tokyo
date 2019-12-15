import * as React from 'react'
import Br from '~/components/base/Br'
import Border from '~/components/base/Border'
import Left from '~/components/index/Sections/Left'
import Right from '~/components/index/Sections/Right'
import { Playing } from '~/store/global/playing'
import { IsPending } from '~/store/global/isPending'

type Props = {
  playing: Playing
  isPending: IsPending
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
        page="salon"
        src="/salon/header.mp4"
        body="サロンコンセプト、スタッフ紹介、設備、椅子、シャンプーだい、タオルの紹介、予約システムなど"
      />
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Left
        playing={props.playing}
        isPending={props.isPending}
        page="service"
        src="/service/header.mp4"
        body="バーバーメニュー、女性のお顔そりのメニュー、実際のカット風景など"
      />
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Right
        playing={props.playing}
        isPending={props.isPending}
        page="access"
        src="/access/header.mp4"
        body="店名、住所、最寄駅、電話番号、メールアドレス、マップ、営業時間・定休日、駐車場のご案内など"
      />
    </>
  )
}

export default Sections