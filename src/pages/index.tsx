import * as React from 'react'
import styled from '@emotion/styled'
import config from '~/utils/config'
import styles from '~/utils/styles'
import useMain from '~/hooks/base/useMain'
import Seo from '~/components/base/Seo'
import Wrapper from '~/components/base/Wrapper'
import P from '~/components/base/P'
import Row from '~/components/base/Row'
import Exhibition from '~/components/base/Exhibition'
import ButtonNew from '~/components/base/ButtonNew'
import Sections from '~/components/index/Sections'
import Katakana from '~/assets/svg/katakana.svg'
import Rihatsuten from '~/assets/svg/rihatsuten.svg'
import Map from '~/components/base/Map'
import Table from '~/components/base/Table'

const Index: React.FC = () => {
  useMain()
  const video = React.useRef(null)
  React.useEffect(() => {
    video.current.load()
    video.current.play()
  })
  return (
    <>
      <Seo title="Home" />
      <VideoWrapper>
        <video
          ref={video}
          src="video-mobile.mp4"
          preload="none"
          muted
          playsInline
          loop
        />
        <VideoFilter />
        <Text>
          <KatakanaWrapper>
            <Katakana />
          </KatakanaWrapper>
          <RihatsutenWrapper>
            <Rihatsuten />
          </RihatsutenWrapper>
        </Text>
      </VideoWrapper>
      <Wrapper>
        <P>
          亀有にオープンしたBAARD理髪店のウェブサイトです。
          ここに軽めの序文を。ここに軽めの序文を。ここに軽めの序文を。
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
        <Row head="電話番号" data="03-0000-0000" />
      </Wrapper>
      <Wrapper>
        <Table />
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
const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 105vw;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* opacity: 0; */
  }
`
const VideoFilter = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${styles.colors.light.shape};
  opacity: 0.3;
`
const Text = styled.div`
  position: absolute;
  bottom: ${styles.sizes.phone.base}px;
  left: ${styles.sizes.phone.base}px;
  color: white;
  font-weight: bold;
  mix-blend-mode: exclusion;
`
const KatakanaWrapper = styled.div`
  svg {
    width: 120px;
    vertical-align: top;
    path {
      fill: ${styles.colors.light.background};
    }
  }
`
const RihatsutenWrapper = styled.div`
  margin-top: 10px;
  svg {
    width: 60px;
    vertical-align: top;
    path {
      fill: ${styles.colors.light.background};
    }
  }
`

export default Index
