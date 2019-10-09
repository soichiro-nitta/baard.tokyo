import * as React from 'react'
import styled from '~/utils/emotion'
import config from '~/utils/config'
import Seo from '~/components/base/Seo'
import ButtonNew from '~/components/base/ButtonNew'

const Salon: React.FC = () => {
  return (
    <>
      <Seo title="Access" />
      <Wrapper>
        <P>
          Salonページです。亀有にオープンしたBAARD理髪店のウェブサイトです。
          ここに軽めの序文を。ここに軽めの序文を。ここに軽めの序文を。
        </P>
        <ButtonWrapper>
          <ButtonNew to={config.instagram} text="スタイル集はInstagramにて" />
        </ButtonWrapper>
      </Wrapper>
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
  margin-top: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  border-top: 1px solid ${(props): string => props.theme.colors.light.border};
`
const P = styled.p`
  margin-top: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  padding: 0
    ${(props): number =>
      (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
      2}px;
  width: 100%;
  ${(props): string => props.theme.mixins.lhCrop(2)}
`
const ButtonWrapper = styled.div`
  margin-top: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    3}px;
  margin-left: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
`

export default Salon
