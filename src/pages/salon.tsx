import * as React from 'react'
import { useGlobal } from '~/store/global'
import Header from '~/components/base/Header'
import Wrapper from '~/components/base/Wrapper'
import P from '~/components/base/P'
import Br from '~/components/base/Br'
import Border from '~/components/base/Border'
import H2 from '~/components/base/H2'
import H3 from '~/components/base/H3'
import Exhibition from '~/components/base/Exhibition'
import ExhibitionPanorama from '~/components/base/ExhibitionPanorama'
import Video from '~/components/base/Video'
import config from '~/utils/config'
import ButtonNew from '~/components/base/ButtonNew'

const Salon: React.FC = () => {
  const global = useGlobal()
  return (
    <>
      <Header
        playing={global.playing}
        isPending={global.isPending}
        launched={global.launched}
        icon={config.pages.salon.icon}
        en={config.pages.salon.en}
        ja={config.pages.salon.ja}
        src="/salon/header.mp4"
        crumbs={[
          {
            to: config.pages.index.path,
            name: config.pages.index.ja
          },
          {
            to: config.pages.salon.path,
            name: config.pages.salon.ja
          }
        ]}
      />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H2 en="CONCEPT" ja="サロンのこだわり" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H3>スペース</H3>
        <Br />
        <P>
          仕切りで区切られた一つ一つのお席には、 クロークをご用意しております。
        </P>
        <Br />
        <P>フルフラットになる理容椅子は、まるで寝ているような感覚です。</P>
        <Br />
        <P>
          お一人おひとりのお客様がリラックスしていただけるように空間づくりにもこだわりました。
        </P>
        <Br />
        <P>1Fは理容室、2Fには女性のシェービング用の個室がございます。</P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H3>オイルシェービング</H3>
        <Br />
        <P>
          ヒリつきを抑え、お客様の肌への負担を最小限にするための工夫をしています。
        </P>
        <Br />
        <P>
          抗酸化作用のある天然の高級オイルでクレンジングマッサージをして皮膚を柔らかくし、フェイシャルスチーマーを当てながら丁寧にお剃りします。
        </P>
        <Br />
        <P>
          普段は剃らない額部分、眉、耳のお手入れ等も含めてご提供します。お客様のお肌のために、BAARD理髪店は、常に肌や頭皮に良いものを追求していきます。
        </P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H3>カウンセリング</H3>
        <Br />
        <P>
          十分なカウンセリングをして、お客様のお悩みや求めていることをお聞きしながら提案し、施術していきます。
        </P>
        <Br />
        <P>
          ヘアスタイルは、電子カルテにより写真として記録し、次回ご来店された際も仕上がりに満足して笑顔で帰っていただけるサロンを目指します。
        </P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H2 en="RESERVATION" ja="ご予約について" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Exhibition>
        <ExhibitionPanorama>
          <Video
            playing={global.playing}
            isPending={global.isPending}
            launched={global.launched}
            src="/salon/reservation.mp4"
            rootMargin="0% 0%"
          />
        </ExhibitionPanorama>
      </Exhibition>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <P>専用のアプリからネット予約を承っております。</P>
        <Br />
        <P>
          まずはアプリをダウンロードして頂き、行きたい日時やメニューを選択し、必要事項を入力するだけで、お客様が気軽にストレスなく、24時間いつでも予約をとる事が可能です。
        </P>
        <Br />
        <P>
          アプリでのネット予約は、ご来店の1時間前までしか選択できませんので、お急ぎのお客様はお電話にてご予約くださいませ。
        </P>
        <Br />
        <ButtonNew to="http://1cs.jp/baard/r" text="ネット予約はこちら" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H2 en="STAFF" ja="スタッフのご紹介" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Exhibition>
        <ExhibitionPanorama>
          <Video
            playing={global.playing}
            isPending={global.isPending}
            launched={global.launched}
            src="/salon/shun.mp4"
            rootMargin="-40% 0%"
          />
        </ExhibitionPanorama>
      </Exhibition>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H3>SHUN（なかだて しゅん）</H3>
        <Br />
        <P>
          お客様が笑顔でハッピーに帰っていただくために、雰囲気やイメージを膨らませ、顔立ち、骨格に合わせてスタイルをご提案致します。
        </P>
        <Br />
        <P>趣味：沖縄旅行、ランニング、スノーボード、サッカー</P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Exhibition>
        <ExhibitionPanorama>
          <Video
            playing={global.playing}
            isPending={global.isPending}
            launched={global.launched}
            src="/salon/risa.mp4"
            rootMargin="-40% 0%"
          />
        </ExhibitionPanorama>
      </Exhibition>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H3>RISA（なかだて りさ）</H3>
        <Br />
        <P>
          小さなサロンですが、温かい雰囲気でお客様をお迎えできるように心がけております！
        </P>
        <Br />
        <P>趣味：沖縄旅行、映画</P>
      </Wrapper>
    </>
  )
}

export default Salon
