import * as React from 'react'
import styled from '@emotion/styled'
import config from '~/utils/config'
import styles from '~/utils/styles'
import useMain from '~/hooks/base/useMain'
import Seo from '~/components/base/Seo'
import ButtonNew from '~/components/base/ButtonNew'
import Sections from '~/components/index/Sections'
import Katakana from '~/assets/svg/katakana.svg'
import Rihatsuten from '~/assets/svg/rihatsuten.svg'

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
        <P>
          <b>店名</b>
        </P>
        <P>BAARD（バーールト）理髪店</P>
      </Wrapper>
      <Wrapper>
        <P>
          <b>所在地</b>
        </P>
        <P>〒125-0061 東京都葛飾区亀有 2-59-7</P>
      </Wrapper>
      <Wrapper>
        <P>
          <b>電話番号</b>
        </P>
        <P>03-0000-0000</P>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  margin-top: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) /
    2}px;
  border-top: 1px solid ${styles.colors.light.border};
`
const P = styled.p`
  margin-top: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) /
    2}px;
  padding: 0
    ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) / 2}px;
  width: 100%;
  ${styles.mixins.lhCrop(2)}
`
const ButtonWrapper = styled.div`
  margin-top: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) /
    3}px;
  margin-left: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) /
    2}px;
`
const SectionsWrapper = styled.div`
  margin-top: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) /
    2}px;
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
  bottom: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) /
    2}px;
  left: ${(styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar) / 2}px;
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
