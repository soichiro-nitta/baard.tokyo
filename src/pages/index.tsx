import * as React from 'react'
import styled from '@emotion/styled'
import { useGlobal } from '~/store/global'
import config from '~/utils/config'
import styles from '~/utils/styles'
import Seo from '~/components/base/Seo'
import Wrapper from '~/components/base/Wrapper'
import P from '~/components/base/P'
import Row from '~/components/base/Row'
import Exhibition from '~/components/base/Exhibition'
import ButtonNew from '~/components/base/ButtonNew'
import Header from '~/components/index/Header'
import Sections from '~/components/index/Sections'
import Map from '~/components/base/Map'
import Table from '~/components/base/Table'

const Index: React.FC = () => {
  const global = useGlobal()
  return (
    <>
      <Seo title="Home" />
      <Header playing={global.playing} isPending={global.isPending} />
      <Wrapper>
        <P>
          和とモダンな雰囲気を織り交ぜた空間で、くつろぎの場所をご提供いたします。ときには忙しい日常を忘れ、ゆっくりとした時間をお過ごし下さいませ。
        </P>
        <ButtonWrapper>
          <ButtonNew to={config.instagram} text="スタイル集はInstagramにて" />
        </ButtonWrapper>
      </Wrapper>
      <SectionsWrapper>
        <Sections />
      </SectionsWrapper>
      <Wrapper>
        <P>
          Facebookページにてお店の情報やお知らせ、近況のご報告などをおこなっています。
        </P>
        <ButtonWrapper>
          <ButtonNew to={config.facebook} text="近況報告はFacebookにて" />
        </ButtonWrapper>
      </Wrapper>
      <Wrapper>
        <Row head="店名" data="BAARD（バーールト）理髪店" />
      </Wrapper>
      <Wrapper>
        <Row head="住所" data="〒125-0061 東京都葛飾区亀有 2-59-7" />
      </Wrapper>
      <Wrapper>
        <Row head="電話番号" data="03-6876-6647" />
      </Wrapper>
      <Wrapper>
        <Table />
      </Wrapper>
      <Wrapper>
        <Row head="定休日" data="月曜日、第２第３火曜日" />
      </Wrapper>
      <Exhibition>
        <Map />
      </Exhibition>
      <Wrapper>
        <ButtonNew
          to="https://www.google.com/maps/search/?api=1&query=BAARD%20理髪店"
          text="Google Mapsを起動する"
        />
      </Wrapper>
    </>
  )
}

const ButtonWrapper = styled.div`
  margin-top: ${styles.sizes.phone.base}px;
`
const SectionsWrapper = styled.div`
  margin-top: ${styles.sizes.phone.base}px;
`

export default Index
