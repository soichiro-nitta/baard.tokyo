import * as React from 'react'
import { useGlobal } from '~/store/global'
import config from '~/utils/config'
import Seo from '~/components/base/Seo'
import Br from '~/components/base/Br'
import Border from '~/components/base/Border'
import Wrapper from '~/components/base/Wrapper'
import P from '~/components/base/P'
import Exhibition from '~/components/base/Exhibition'
import ButtonNew from '~/components/base/ButtonNew'
import Header from '~/components/index/Header'
import Sections from '~/components/index/Sections'
import Map from '~/components/base/Map'
import Table from '~/components/base/Table'
import H3 from '~/components/base/H3'

const Index: React.FC = () => {
  const global = useGlobal()
  return (
    <>
      <Seo title="Home" />
      <Header
        playing={global.playing}
        isPending={global.isPending}
        src="/index/header.mp4"
      />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <P>
          和とモダンな雰囲気を織り交ぜた空間で、くつろぎの場所をご提供いたします。ときには忙しい日常を忘れ、ゆっくりとした時間をお過ごし下さいませ。
        </P>
        <Br />
        <ButtonNew to={config.instagram} text="スタイル集はInstagramにて" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Sections playing={global.playing} isPending={global.isPending} />
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <P>
          Facebookページにてお店の情報やお知らせ、近況のご報告などをおこなっています。
        </P>
        <Br />
        <ButtonNew to={config.facebook} text="近況報告はFacebookにて" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H3>店名</H3>
        <Br />
        <P>BAARD（バーールト）理髪店</P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H3>住所</H3>
        <Br />
        <P>〒125-0061 東京都葛飾区亀有 2-59-7</P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H3>最寄駅</H3>
        <Br />
        <P>JR常磐線 亀有駅 南口徒歩8分</P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H3>電話番号</H3>
        <Br />
        <P>03-6876-6647</P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <P>
          BAARD 理髪店（東京都葛飾区亀有 2-59-7）について、Google Mapsでみる。
        </P>
        <Br />
        <ButtonNew
          to="https://www.google.com/maps/search/?api=1&query=BAARD%20理髪店"
          text="Google Mapsを起動する"
        />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Exhibition>
        <Map />
      </Exhibition>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H3>営業時間</H3>
        <Br />
        <P>平日、10:00 ~ 20:00</P>
        <Br />
        <P>土日祝、09:00 ~ 19:00 </P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H3>定休日</H3>
        <Br />
        <P>月曜日、第２第３火曜日</P>
        <Br />
        <Table />
      </Wrapper>
    </>
  )
}

export default Index
