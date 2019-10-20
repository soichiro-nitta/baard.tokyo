import * as React from 'react'
import { faMapMarkedAlt } from '@fortawesome/pro-duotone-svg-icons'
import functions from '~/utils/functions'
import useMain from '~/hooks/base/useMain'
import useFluid from '~/hooks/access/useFluid'
import Seo from '~/components/base/Seo'
import HeaderImage from '~/components/base/HeaderImage'
import Wrapper from '~/components/base/Wrapper'
import Exhibition from '~/components/base/Exhibition'
import Br from '~/components/base/Br'
import H2 from '~/components/base/H2'
import ButtonNew from '~/components/base/ButtonNew'
import Row from '~/components/base/Row'
import Map from '~/components/access/Map'
import Table from '~/components/access/Table'

const Access: React.FC = () => {
  useMain()
  const fluid = useFluid()
  const en = 'access'
  const ja = 'アクセス'
  return (
    <>
      <Seo title={functions.toUpperFirst(en)} />
      <HeaderImage
        fluid={fluid}
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
      <Wrapper>
        <H2 en="INFORMATION" ja="店舗情報" />
      </Wrapper>
      <Wrapper>
        <Row head="店名" data="BAARD（バーールト）理髪店" />
      </Wrapper>
      <Wrapper>
        <Row head="住所" data="〒125-0061 東京都葛飾区亀有 2-59-7" />
      </Wrapper>
      <Wrapper>
        <Row head="最寄駅" data="JR常磐線 亀有駅 徒歩8分" />
      </Wrapper>
      <Wrapper>
        <Row head="電話番号" data="03-0000-0000" />
      </Wrapper>
      <Wrapper>
        <Row head="メールアドレス" data="baard-tokyo@gmail.com" />
      </Wrapper>
      <Br />
      <Wrapper>
        <H2 en="MAP" ja="マップ" />
      </Wrapper>
      <Exhibition>
        <Map />
      </Exhibition>
      <Wrapper>
        <ButtonNew
          to="https://www.google.com/maps/search/?api=1&query=BAARD理髪店"
          text="Google Mapsでみる"
        />
      </Wrapper>
      <Br />
      <Wrapper>
        <H2 en="OPENING" ja="営業時間について" />
      </Wrapper>
      <Wrapper>
        <Table />
      </Wrapper>
    </>
  )
}

export default Access
