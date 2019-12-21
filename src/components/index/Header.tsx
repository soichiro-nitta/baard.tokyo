import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import { Playing } from '~/store/global/playing'
import Katakana from '~/assets/svg/katakana.svg'
import Rihatsuten from '~/assets/svg/rihatsuten.svg'
import Breadcrumbs from '~/components/base/Breadcrumbs'
import Video from '~/components/base/Video'
import { css } from '@emotion/core'
import config from '~/utils/config'
import { IsPending } from '~/store/global/isPending'

type Props = {
  playing: Playing
  isPending: IsPending
  src: string
}

const Header: React.FC<Props> = props => {
  const crumbs = [
    {
      to: config.pages.index.path,
      name: config.pages.index.ja
    }
  ]
  return (
    <Root>
      <Video
        playing={props.playing}
        isPending={props.isPending}
        src={props.src}
      />
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
  height: calc((100vw - ${styles.sizes.phone.dashboard + 1}px) * 1.25);
  ${styles.large(css`
    height: ${styles.sizes.desktop.main() * 1.185}px;
  `)}
`
const Text = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  padding-left: ${styles.sizes.phone.base}px;
  width: 100%;
  height: 100%;
`
const KatakanaWrapper = styled.div`
  svg {
    width: 120px;
    vertical-align: top;
    path {
      fill: white;
    }
  }
`
const RihatsutenWrapper = styled.div`
  margin-top: 10px;
  svg {
    width: 60px;
    vertical-align: top;
    path {
      fill: white;
    }
  }
`
const BreadcrumbsWrapper = styled.div`
  position: absolute;
  bottom: ${styles.sizes.phone.base}px;
  left: ${styles.sizes.phone.base}px;
  color: white;
`

export default Header
