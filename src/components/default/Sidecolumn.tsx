import * as React from 'react'
import styled from '@emotion/styled'
import ButtonNew from '../base/ButtonNew'
import config from '~/utils/config'
import P from '../base/P'
import Br from '../base/Br'
import Border from '../base/Border'
import Wrapper from '../base/Wrapper'
import H3 from '../base/H3'

const Sidecolumn: React.FC = () => {
  return (
    <Root>
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H3>フェイスブック</H3>
        <Br />
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
        <H3>インスタグラム</H3>
        <Br />
        <P>Sidecolumn</P>
        <Br />
        <ButtonNew to={config.instagram} text="スタイル集はInstagram" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H3>グーグルマップ</H3>
        <Br />
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
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  text-align: right;
`

export default Sidecolumn
