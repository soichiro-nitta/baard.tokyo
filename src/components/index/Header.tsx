import * as React from 'react'
import styled from '@emotion/styled'
import { Playing } from '~/store/global/playing'
import { IsPending } from '~/store/global/isPending'
import styles from '~/utils/styles'
import Katakana from '~/assets/svg/katakana.svg'
import Rihatsuten from '~/assets/svg/rihatsuten.svg'
import Filter from '~/components/base/Filter'
import Breadcrumbs from '~/components/base/Breadcrumbs'
import Video from '~/components/base/Video'

type Props = {
  playing: Playing
  isPending: IsPending
}

const Header: React.FC<Props> = props => {
  const crumbs = [
    {
      to: '/',
      name: 'ホーム'
    }
  ]
  const canplaythrough = (): void => {
    props.isPending.dispatch({ type: 'off' })
  }
  return (
    <Root>
      <Video
        playing={props.playing}
        src="/index/header.mp4"
        canplaythrough={canplaythrough}
      />
      <Filter />
      <Text>
        <div>
          <KatakanaWrapper>
            <Katakana />
          </KatakanaWrapper>
          <RihatsutenWrapper>
            <Rihatsuten />
          </RihatsutenWrapper>
        </div>
      </Text>
      <BreadcrumbsWrapper>
        <Breadcrumbs crumbs={crumbs} />
      </BreadcrumbsWrapper>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 105vw;
`
const Text = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  padding-left: ${styles.sizes.phone.base}px;
  width: 100%;
  height: 100%;
  mix-blend-mode: exclusion;
`
const BreadcrumbsWrapper = styled.div`
  position: absolute;
  bottom: ${styles.sizes.phone.base}px;
  left: ${styles.sizes.phone.base}px;
  color: white;
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

export default Header
