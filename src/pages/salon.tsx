import * as React from 'react'
import { faCut } from '@fortawesome/pro-duotone-svg-icons'
import functions from '~/utils/functions'
import { useGlobal } from '~/store/global'
import Seo from '~/components/base/Seo'
import Header from '~/components/base/Header'
import Wrapper from '~/components/base/Wrapper'
import P from '~/components/base/P'
import Br from '~/components/base/Br'
import Border from '~/components/base/Border'
import H2 from '~/components/base/H2'
import H3 from '~/components/base/H3'
import Exhibition from '~/components/base/Exhibition'
import ExhibitionPanorama from '~/components/base/ExhibitionPanorama'
import Filter from '~/components/base/Filter'
import Video from '~/components/base/Video'

const Salon: React.FC = () => {
  const en = 'salon'
  const ja = 'サロン・スタッフ紹介'
  const global = useGlobal()
  return (
    <>
      <Seo title={functions.toUpperFirst(en)} />
      <Header
        playing={global.playing}
        isPending={global.isPending}
        icon={faCut}
        en={en.toUpperCase()}
        ja={ja}
        src={`/${en}/header.mp4`}
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
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H2 en="CONCEPT" ja="サロンコンセプト" />
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
        <P>
          ゆったりとしたスペースで、
          お客様がリラックスしていただけるような空間づくりにもこだわりました。
        </P>
        <Br />
        <P>
          1Fはヘアサロン、2Fには女性専用のシェービングのお部屋がございます。
        </P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H3>こだわりのオイルシェービング</H3>
        <Br />
        <P>ヒリつきを抑え、お客様の肌への負担を最小限にするために、</P>
        <Br />
        <P>
          抗酸化作用のある天然の高級オイルを使用し、フェイシャルスチーマーを当てながらお剃りします。
        </P>
        <Br />
        <P>
          普段は剃らない部分、眉カット、耳のお手入れ等も含めてご提供します。お客様のお肌のために、BAARD理髪店は、常に新しいものを追求していきます。
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
            src="/salon/reservation.mp4"
            rootMargin="0% 0%"
          />
          <Filter />
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
            src="/salon/shun.mp4"
            rootMargin="-40% 0%"
          />
          <Filter />
        </ExhibitionPanorama>
      </Exhibition>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H3>SHUN（なかだて しゅん）</H3>
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
            src="/salon/risa.mp4"
            rootMargin="-40% 0%"
          />
          <Filter />
        </ExhibitionPanorama>
      </Exhibition>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H3>RISA（なかだて りさ）</H3>
        <Br />
        <P>趣味：沖縄旅行、映画</P>
      </Wrapper>
    </>
  )
}

export default Salon
