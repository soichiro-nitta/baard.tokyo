import * as React from 'react'
import Img from 'gatsby-image'
import { faCut } from '@fortawesome/pro-duotone-svg-icons'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import functions from '~/utils/functions'
import useMain from '~/hooks/base/useMain'
import useFluid from '~/hooks/salon/useFluid'
import Seo from '~/components/base/Seo'
import HeaderImage from '~/components/base/HeaderImage'
import Wrapper from '~/components/base/Wrapper'
import P from '~/components/base/P'
import Br from '~/components/base/Br'
import H2 from '~/components/base/H2'
import Exhibition from '~/components/base/Exhibition'

const Salon: React.FC = () => {
  useMain()
  const fluid = useFluid()
  const en = 'salon'
  const ja = 'サロン・スタッフ紹介'
  return (
    <>
      <Seo title={functions.toUpperFirst(en)} />
      <HeaderImage
        fluid={fluid}
        icon={faCut}
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
        <H2 en="CONCEPT" ja="サロンコンセプト" />
      </Wrapper>
      <Wrapper>
        <P>
          サロンコンセプト。BAARDでは－－。ここに説明など。ここに説明など。ここに説明など。ここに説明など。ここに説明など。
        </P>
      </Wrapper>
      <Exhibition>
        <ExhibitionImg>
          <Img fluid={fluid[1]} />
          <ExhibitionFilter />
        </ExhibitionImg>
      </Exhibition>
      <Wrapper>
        <P>↑ ここはスライダー（ギャラリー？）にします。鋭意制作中。</P>
      </Wrapper>
      <Br />
      <Wrapper>
        <H2 en="RESERVATION" ja="ご予約について" />
      </Wrapper>
      <Wrapper>
        <P>
          予約システムについて。BAARDでは初回のご来店以降のお客様に－－。ここに説明など。ここに説明など。ここに説明など。
        </P>
      </Wrapper>
      <Exhibition>
        <ExhibitionImg>
          <Img fluid={fluid[2]} />
          <ExhibitionFilter />
        </ExhibitionImg>
      </Exhibition>
      <Wrapper>
        <P>
          ↑
          予約システムについて写真が必要であれば。複数枚必要があれば、こちらもスライダーに。
        </P>
      </Wrapper>
      <Br />
      <Wrapper>
        <H2 en="LADY'S SHAVING" ja="レディースシェービング" />
      </Wrapper>
      <Wrapper>
        <P>
          BAARDでは女性のお客様に－－。ここにもレディースシェービングについて紹介があるとわかりやすいかも？ここに説明など。
        </P>
      </Wrapper>
      <Br />
      <Wrapper>
        <H2 en="STAFF" ja="スタッフのご紹介" />
      </Wrapper>
      <Exhibition>
        <ExhibitionStaff>
          <Img fluid={fluid[3]} />
          <ExhibitionFilter />
        </ExhibitionStaff>
      </Exhibition>
      <Wrapper>
        <H2 en="SHUN" ja="なかだてしゅん" />
      </Wrapper>
      <Wrapper>
        <P>
          プロフィールや、沿革、自己紹介など。プロフィールや、沿革、自己紹介など。プロフィールや、沿革、自己紹介など。
        </P>
      </Wrapper>
      <Br />
      <Exhibition>
        <ExhibitionStaff>
          <Img fluid={fluid[4]} />
          <ExhibitionFilter />
        </ExhibitionStaff>
      </Exhibition>
      <Wrapper>
        <H2 en="RISA" ja="あらきりさ" />
      </Wrapper>
      <Wrapper>
        <P>
          プロフィールや、沿革、自己紹介など。プロフィールや、沿革、自己紹介など。プロフィールや、沿革、自己紹介など。
        </P>
      </Wrapper>
    </>
  )
}

const ExhibitionImg = styled.div`
  position: relative;
  width: 100%;
  height: 105vw;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const ExhibitionFilter = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(${functions.hex2rgb(styles.colors.light.shape)}, 0.3);
`
const ExhibitionStaff = styled.div`
  position: relative;
  width: 100%;
  height: 52.5vw;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const ExhibitionImg = styled.div`
  position: relative;
  width: 100%;
  height: 105vw;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const ExhibitionFilter = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(${functions.hex2rgb(styles.colors.light.shape)}, 0.3);
`
const ExhibitionStaff = styled.div`
  position: relative;
  width: 100%;
  height: 52.5vw;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default Salon
