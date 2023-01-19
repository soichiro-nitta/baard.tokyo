import * as React from 'react'
import { useGlobal } from '~/store/global'
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
import styles from '~/utils/styles'
import styled from '@emotion/styled'

const Service: React.FC = () => {
  const global = useGlobal()
  return (
    <>
      <Header
        playing={global.playing}
        isPending={global.isPending}
        launched={global.launched}
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
        <H2 en="BAARD COURSE" ja="カット＆オイルケアシェービング" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="スタンダードコース" price="5,830" />
        <Br />
        <P>
          オイル頭皮ケア付きのスタンダードなコース。
          (オイル頭皮ケア、カット、襟剃り、シェービング、マッサージ、ブロー)
        </P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="プレミアムコース" price="6,930" />
        <Br />
        <P>
          スタンダードコースに、お顔のモイスチャーパックとマッサージ機器のぶるぶるマッサージが付きます。
        </P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="ロイヤルコース" price="8,030" />
        <Br />
        <P>プレミアムコースに、フェイシャルマッサージが付きます。</P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <H2 en="MENU" ja="メニュー" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="カット(シャンプー、マッサージ、ブロー)" price="4,400" />
        <Br />
        <P>※スキンフェードカットの場合は、別途+550円頂戴致します。</P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="高校生" price="3,850" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="中学生" price="3,300" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="小学生以下" price="2,970" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="カラー" price="3,520~" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="グレーカラー" price="3,520~" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="白髪ぼかしカラー" price="2,200~" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="パーマ" price="4,400~" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="アイロンパーマ" price="4,620~" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="スタンダードシェービング(単品)" price="2,200" />
        <Br />
        <P>
          お肌に優しいオイルクレンジング、オイルスチームシェービング、眉カット。
        </P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="プレミアムシェービング(単品)" price="3,300" />
        <Br />
        <P>
          スタンダードシェービングに、モイスチャーパック、フェイパックが付きます。
        </P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="ロイヤルシェービング(単品)" price="4,400" />
        <Br />
        <P>プレミアムシェービングに、フェイシャルマッサージが付きます。</P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="フェイシャルマッサージ" price="2200" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="頭皮オイルクレンジング" price="550" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="ヘッドマッサージ15分" price="1,650" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="ヘッドマッサージ30分" price="3,300" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="ぶるぶるマッサージ" price="550" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="シャンプーブロー" price="1,650~" />
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
            launched={global.launched}
            src="/service/ladys-shaving.mp4"
            rootMargin="0% 0%"
          />
        </ExhibitionPanorama>
      </Exhibition>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <P>※すべてのコースに、眉カット・襟足シェービング付きとなります。</P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="ベーシックシェービング" price="4,400" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="うる肌保湿コース" price="5,500" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="毛穴クリーンコース" price="5,500" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="リフトフェイシャルコース" price="9,350" />
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <List head="ブライダルシェービング" price="16,500" />
        <Br />
        <P>挙式の1ヶ月以上前に一度お電話にてご相談ください。</P>
      </Wrapper>
      <Br />
      <Border />
      <Br />
      <Border />
      <Br />
      <Wrapper>
        <P>※すべて税込価格となっております。</P>
      </Wrapper>
    </>
  )
}

const Note = styled.div`
  padding: ${styles.sizes.phone.base}px;
  border: 1px solid var(--border);
  background: var(--background);
  font-size: 12px;
  ${styles.mixins.lhCrop(2)}
  font-weight: bold;
  ${styles.mixins.transitionBackground}
`

export default Service
