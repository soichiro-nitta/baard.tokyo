import * as React from 'react'
import { faClipboardList } from '@fortawesome/pro-duotone-svg-icons'
import functions from '~/utils/functions'
import useMain from '~/hooks/base/useMain'
import useFluid from '~/hooks/service/useFluid'
import Seo from '~/components/base/Seo'
import HeaderImage from '~/components/base/HeaderImage'
import Wrapper from '~/components/base/Wrapper'
import Br from '~/components/base/Br'
import H2 from '~/components/base/H2'
import List from '~/components/service/List'

const Service: React.FC = () => {
  useMain()
  const fluid = useFluid()
  const en = 'service'
  const ja = 'メニュー案内'
  return (
    <>
      <Seo title={functions.toUpperFirst(en)} />
      <HeaderImage
        fluid={fluid}
        icon={faClipboardList}
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
        <H2 en="BARBER" ja="メンズメニュー" />
      </Wrapper>
      <Wrapper>
        ここに説明など。ここに説明など。ここに説明など。ここに説明など。
      </Wrapper>
      <Wrapper>
        <List head="メンズカット" price="5,000" />
      </Wrapper>
      <Wrapper>
        <List head="前髪カット" price="1,000" />
      </Wrapper>
      <Wrapper>
        <List head="キッズカット" price="3,000" />
      </Wrapper>
      <Br />
      <Wrapper>
        <H2 en="LADY'S SHAVING" ja="レディースシェービング" />
      </Wrapper>
      <Wrapper>
        ここに説明など。ここに説明など。ここに説明など。ここに説明など。
      </Wrapper>
      <Wrapper>
        <List head="シェービング" price="3,000" />
      </Wrapper>
    </>
  )
}

export default Service
