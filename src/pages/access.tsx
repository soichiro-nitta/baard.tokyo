import * as React from 'react'
import styled from '@emotion/styled'
import { faMapMarkedAlt } from '@fortawesome/pro-duotone-svg-icons'
import { useGlobal } from '~/store/global'
import functions from '~/utils/functions'
import styles from '~/utils/styles'
import Seo from '~/components/base/Seo'
import Header from '~/components/base/Header'
import Wrapper from '~/components/base/Wrapper'
import P from '~/components/base/P'
import Exhibition from '~/components/base/Exhibition'
import Br from '~/components/base/Br'
import Border from '~/components/base/Border'
import H2 from '~/components/base/H2'
import ButtonNew from '~/components/base/ButtonNew'
import Row from '~/components/base/Row'
import Map from '~/components/base/Map'
import Table from '~/components/base/Table'

const Access: React.FC = () => {
  const en = 'access'
  const ja = 'アクセス'
  const global = useGlobal()
  return (
    <>
      <Seo title={functions.toUpperFirst(en)} />
      <Header
        playing={global.playing}
        isPending={global.isPending}
        icon={faMapMarkedAlt}
        en={en.toUpperCase()}
        ja={ja}
        crumbs={[
          {
            to: '/',
            name: 'ホーム'
          },
          {
            to: `/${en}`,
            name: ja
          }
        ]}
      />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H2 en="INFORMATION" ja="店舗情報" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <Row head="店名" data="BAARD（バーールト）理髪店" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <Row head="住所" data="〒125-0061 東京都葛飾区亀有 2-59-7" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <Row head="最寄駅" data="JR常磐線 亀有駅 徒歩8分" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <Row head="電話番号" data="03-0000-0000" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <Row head="メールアドレス" data="baard-tokyo@gmail.com" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H2 en="MAP" ja="マップ" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <P>
          BAARD 理髪店（東京都葛飾区亀有 2-59-7）について、Google Mapsでみる。
        </P>
        <ButtonWrapper>
          <ButtonNew
            to="https://www.google.com/maps/search/?api=1&query=BAARD%20理髪店"
            text="Google Mapsを起動する"
          />
        </ButtonWrapper>
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
        <H2 en="OPENING" ja="営業時間について" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <Table />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <Row head="定休日" data="月曜日、第２第３火曜日" />
      </Wrapper>
    </>
  )
}

const ButtonWrapper = styled.div`
  margin-top: ${styles.sizes.phone.base}px;
`

export default Access
