import * as React from 'react'
import Br from '~/components/base/Br'
import Border from '~/components/base/Border'
import Left from '~/components/index/Sections/Left'
import Right from '~/components/index/Sections/Right'
import { Playing } from '~/store/global/playing'

type Props = {
  playing: Playing
}

const Sections: React.FC<Props> = props => {
  return (
    <>
      <Br />
      <Border />
      <Br />
      <Right
        playing={props.playing}
        src="salon/header.mp4"
        icon="faCut"
        head="SALON"
        body="サロンコンセプト、スタッフ紹介、設備、椅子、シャンプーだい、タオルの紹介、予約システムなど"
        to="/salon"
      />
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Left
        playing={props.playing}
        src="service/header.mp4"
        icon="faClipboardList"
        head="SERVICE"
        body="バーバーメニュー、女性のお顔そりのメニュー、実際のカット風景など"
        to="/service"
      />
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Right
        playing={props.playing}
        src="access/header.mp4"
        icon="faMapMarkedAlt"
        head="ACCESS"
        body="店名、住所、最寄駅、電話番号、メールアドレス、マップ、営業時間・定休日、駐車場のご案内など"
        to="/access"
      />
    </>
  )
}

export default Sections
