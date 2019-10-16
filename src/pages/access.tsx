import * as React from 'react'
import styled from '@emotion/styled'
import { faMapMarkedAlt } from '@fortawesome/pro-duotone-svg-icons'
import config from '~/utils/config'
import styles from '~/utils/styles'
import useMain from '~/hooks/base/useMain'
import useFluid from '~/hooks/access/useFluid'
import Seo from '~/components/base/Seo'
import HeaderImage from '~/components/base/HeaderImage'
import ButtonNew from '~/components/base/ButtonNew'
import Map from '~/components/access/Map'

const Access: React.FC = () => {
  useMain()
  const fluid = useFluid()
  return (
    <Root>
      <Seo title="Access" />
      <HeaderImage
        fluid={fluid}
        icon={faMapMarkedAlt}
        eng="ACCESS"
        ja="アクセス"
        crumbs={[
          {
            to: '/',
            name: 'ホーム'
          },
          {
            to: '/access',
            name: 'アクセス'
          }
        ]}
      />
      <Map />
      <P1>
        <b>ACCESS</b> / マップ、営業時間
      </P1>
      <P2>
        ACCESSページ（店名、住所、最寄駅、電話番号、メールアドレス、マップ、営業時間・定休日、駐車場？のご案内など）
      </P2>
      <ButtonWrapper>
        <ButtonNew to={config.instagram} text="スタイル集はInstagramにて" />
      </ButtonWrapper>
      <Wrapper>
        <P2>
          Facebookページにてお店の情報やお知らせ、近況のご報告などをおこなっています。
        </P2>
        <ButtonWrapper>
          <ButtonNew to={config.facebook} text="近況報告はFacebookにて" />
        </ButtonWrapper>
      </Wrapper>
      <Wrapper>
        <P2>
          <b>店名</b>
        </P2>
        <P2>BAARD（バーールト）理髪店</P2>
      </Wrapper>
      <Wrapper>
        <P2>
          <b>所在地</b>
        </P2>
        <P2>〒125-0061 東京都葛飾区亀有 2-59-7</P2>
      </Wrapper>
      <Wrapper>
        <P2>
          <b>電話番号</b>
        </P2>
        <P2>03-0000-0000</P2>
      </Wrapper>
    </Root>
  )
}

const Root = styled.div`
  /* margin-top: ${styles.sizes.phone.dashboard +
    (styles.sizes.phone.dashboard - 30) / 2 +
    5}px; */
`
const P1 = styled.p`
  padding: 0 ${styles.sizes.phone.base}px;
  width: 100%;
  ${styles.mixins.lhCrop(2)}
`
const P2 = styled(P1)`
  margin-top: ${styles.sizes.phone.base}px;
`
const Wrapper = styled.div`
  margin-top: ${styles.sizes.phone.base}px;
  border-top: 1px solid ${styles.colors.light.border};
`
const ButtonWrapper = styled.div`
  margin-top: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) /
    3}px;
  margin-left: ${styles.sizes.phone.base}px;
`

export default Access
