import * as React from 'react'
import { useGlobal } from '~/store/global'
import config from '~/utils/config'
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
import styled from '@emotion/styled'
import styles from '~/utils/styles'

const Index: React.FC = () => {
  const global = useGlobal()
  return (
    <>
      <Header
        playing={global.playing}
        isPending={global.isPending}
        launched={global.launched}
        src="/index/header.mp4"
      />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <P>
          和とモダンな雰囲気を織り交ぜた空間で、くつろぎの場所をご提供いたします。ときには忙しい日常を忘れ、ゆっくりとした時間をお過ごし下さいませ。
        </P>
        {/* <Br />
        <Note>
          ※10月より約半年程スタッフが1人になる為、しばらくの間ご新規のお客様のご予約を停止させていただいております。ご了承くださいませ。
        </Note> */}
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Sections
        launched={global.launched}
        playing={global.playing}
        isPending={global.isPending}
      />
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <P>Instagramにてスタイル集、お店の情報やお知らせなど載せております。</P>
        <Br />
        <ButtonNew to={config.instagram} text="近況報告はInstagramにて" />
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
        <P>JR常磐線 亀有駅 南口徒歩6分</P>
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
        <Map colorscheme={global.colorscheme} />
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
        <P>月曜日、火曜日不定休</P>
        <Br />
        <Table />
      </Wrapper>
    </>
  )
}

const Note = styled.div`
  padding: ${styles.sizes.phone.base}px;
  border: 1px solid var(--border);
  background: var(--background);
  font-size: 12px;
  ${styles.mixins.lhCrop(2)}
  font-weight: bold;
  ${styles.mixins.transitionBackground}
`

export default Index
