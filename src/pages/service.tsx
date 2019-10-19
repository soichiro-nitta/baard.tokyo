import * as React from 'react'
import styled from '@emotion/styled'
import { faClipboardList } from '@fortawesome/pro-duotone-svg-icons'
import styles from '~/utils/styles'
import useMain from '~/hooks/base/useMain'
import useFluid from '~/hooks/service/useFluid'
import Seo from '~/components/base/Seo'
import HeaderImage from '~/components/base/HeaderImage'
import H2 from '~/components/base/H2'
import ButtonNew from '~/components/base/ButtonNew'
import Row from '~/components/base/Row'
import Map from '~/components/access/Map'
import Table from '~/components/access/Table'

const Service: React.FC = () => {
  useMain()
  const fluid = useFluid()
  return (
    <>
      <Seo title="Service" />
      <HeaderImage
        fluid={fluid}
        icon={faClipboardList}
        en="SERVICE"
        ja="メニュー案内"
        crumbs={[
          {
            to: '/',
            name: 'ホーム'
          },
          {
            to: '/service',
            name: 'メニュー案内'
          }
        ]}
      />
      <Wrapper>
        <H2 en="MAP" ja="マップ" />
      </Wrapper>
      <Wrapper>
        <ButtonNew
          to="https://www.google.com/maps/search/?api=1&query=BAARD理髪店"
          text="Google Mapsでみる"
        />
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
      <MapWrapper>
        <Map />
      </MapWrapper>
      <Wrapper>
        <H2 en="OPEN" ja="営業時間" />
      </Wrapper>
      <Wrapper>
        <Table />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  margin-top: ${styles.sizes.phone.base}px;
  padding-top: ${styles.sizes.phone.base}px;
  padding-right: ${styles.sizes.phone.base}px;
  padding-left: ${styles.sizes.phone.base}px;
  border-top: 1px solid ${styles.colors.light.border};
`
const MapWrapper = styled(Wrapper)`
  padding-left: 0;
`

export default Service
