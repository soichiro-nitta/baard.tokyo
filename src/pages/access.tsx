import * as React from 'react'
import { useGlobal } from '~/store/global'
import Header from '~/components/base/Header'
import Wrapper from '~/components/base/Wrapper'
import P from '~/components/base/P'
import Exhibition from '~/components/base/Exhibition'
import Br from '~/components/base/Br'
import Border from '~/components/base/Border'
import H2 from '~/components/base/H2'
import ButtonNew from '~/components/base/ButtonNew'
import Map from '~/components/base/Map'
import Table from '~/components/base/Table'
import H3 from '~/components/base/H3'
import config from '~/utils/config'
// import { MapPinIcon } from '@heroicons/react/24/outline'

const Access: React.FC = () => {
  const global = useGlobal()
  return (
    <>
      <Header
        playing={global.playing}
        isPending={global.isPending}
        launched={global.launched}
        // icon={config.pages.access.icon}
        en={config.pages.access.en}
        ja={config.pages.access.ja}
        src="/access/header.mp4"
        crumbs={[
          {
            to: config.pages.index.path,
            name: config.pages.index.ja
          },
          {
            to: config.pages.access.path,
            name: config.pages.access.ja
          }
        ]}
      >
        {/* <MapPinIcon style={{ width: '24px' }} /> */}
      </Header>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H2 en="INFORMATION" ja="店舗情報" />
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
        <H2 en="MAP" ja="マップ" />
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
      <Border />
      <Br />
      <Wrapper>
        <H2 en="OPEN/CLOSED" ja="営業日について" />
      </Wrapper>
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
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H2 en="PARKING" ja="駐車場のご案内" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H3>1. コインパーク亀有</H3>
        <Br />
        <P>〒125-0061 東京都葛飾区 亀有2-2</P>
        <Br />
        <ButtonNew
          to="https://www.google.com/maps/place/%E3%82%B3%E3%82%A4%E3%83%B3%E3%83%91%E3%83%BC%E3%82%AF+%E4%BA%80%E6%9C%89/@35.7628514,139.8493712,16z/data=!4m8!1m2!2m1!1z44Kz44Kk44Oz44OR44O844Kv5LqA5pyJ!3m4!1s0x60188f842ba4f4c1:0xc76defbb8e7a66ec!8m2!3d35.7628514!4d139.8493712"
          text="Google Mapsを起動する"
        />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H3>
          2. ナビパーク
          <br />
          亀有信用金庫本店
        </H3>
        <Br />
        <P>〒125-0061 東京都葛飾区 亀有3-12</P>
        <Br />
        <ButtonNew
          to="https://www.google.com/maps/place/%E3%83%8A%E3%83%93%E3%83%91%E3%83%BC%E3%82%AF+%E4%BA%80%E6%9C%89%E4%BF%A1%E7%94%A8%E9%87%91%E5%BA%AB%E6%9C%AC%E5%BA%97/@35.7708686,139.8307802,14z/data=!4m8!1m2!2m1!1z44OK44OT44OR44O844Kv5LqA5pyJ5L-h55So6YeR5bqr5pys5bqX!3m4!1s0x60188f85a23f75a3:0xc4617cd78f4063e4!8m2!3d35.763247!4d139.847444"
          text="Google Mapsを起動する"
        />
      </Wrapper>
    </>
  )
}

export default Access
