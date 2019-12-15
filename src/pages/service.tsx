import * as React from 'react'
import { useGlobal } from '~/store/global'
import Seo from '~/components/base/Seo'
import Header from '~/components/base/Header'
import Wrapper from '~/components/base/Wrapper'
import Br from '~/components/base/Br'
import Border from '~/components/base/Border'
import H2 from '~/components/base/H2'
import List from '~/components/service/List'
import Exhibition from '~/components/base/Exhibition'
import ExhibitionPanorama from '~/components/base/ExhibitionPanorama'
import Video from '~/components/base/Video'
import P from '~/components/base/P'
import config from '~/utils/config'

const Service: React.FC = () => {
  const global = useGlobal()
  return (
    <>
      <Seo title={config.pages.service.en} />
      <Header
        playing={global.playing}
        isPending={global.isPending}
        icon={config.pages.service.icon}
        en={config.pages.service.en}
        ja={config.pages.service.ja}
        src="/service/header.mp4"
        crumbs={[
          {
            to: config.pages.index.path,
            name: config.pages.index.ja
          },
          {
            to: config.pages.service.path,
            name: config.pages.service.ja
          }
        ]}
      />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H2 en="BAARD COURSE" ja="オイルケアシェービング＆カット" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="ヘアカットコース" price="3,800" />
        <Br />
        <P>プレシャンプー、カット、シャンプー、マッサージ、ブロー</P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="スタンダードコース" price="5,300" />
        <Br />
        <P>
          オイル頭皮ケア、カット、リンシング、オイルケアシェービング、マッサージ、ブロー
        </P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="プレミアムコース" price="6,300" />
        <Br />
        <P>
          オイル頭皮ケア、カット、リンシング、オイルケアシェービング、モイスチャーパック、ブルブルマッサージ、ブロー
        </P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="ロイヤルコース" price="7,300" />
        <Br />
        <P>
          オイル頭皮ケア、カット、リンシング、オイルケアシェービング、フェイシャルマッサージ、モイスチャーパック、ブルブルマッサージ、ブロー
        </P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H2 en="MEN'S MENU" ja="メンズメニュー" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="カット" price="3,800" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="高校生" price="3,500" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="中学生" price="3,000" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="小学生以下" price="2,700" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="シェービング" price="1,500~" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="カラー" price="3,200~" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="グレーカラー" price="3,200~" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="白髪ぼかしカラー" price="2,000~" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="パーマ" price="4,000~" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="アイロンパーマ" price="4,200~" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="シャンプーブロー" price="1,500~" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="ヘッドマッサージ15分" price="1,500" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="ヘッドマッサージ30分" price="3,000" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="頭皮クレンジング" price="500" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="マッサージ延長" price="500" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H2 en="LADY'S SHAVING" ja="レディースシェービング" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Exhibition>
        <ExhibitionPanorama>
          <Video
            playing={global.playing}
            isPending={global.isPending}
            src="/service/ladys-shaving.mp4"
            rootMargin="0% 0%"
          />
        </ExhibitionPanorama>
      </Exhibition>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <P>※全てのコースに、眉カット・襟足シェービング付きとなります。</P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="ベーシックシェービング" price="4,000" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="うる肌保湿コース" price="5,000" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="毛穴クリーンコース" price="5,000" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="リフトフェイシャルコース" price="8,500" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="ブライダルシェービング" price="15,000" />
        <Br />
        <P>挙式の1ヶ月以上前に一度ご相談ください。</P>
      </Wrapper>
    </>
  )
}

export default Service
