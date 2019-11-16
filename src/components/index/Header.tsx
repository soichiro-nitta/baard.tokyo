import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import functions from '~/utils/functions'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import Katakana from '~/assets/svg/katakana.svg'
import Rihatsuten from '~/assets/svg/rihatsuten.svg'
import Filter from '~/components/base/Filter'
import Breadcrumbs from '~/components/base/Breadcrumbs'

type Props = {
  video: {
    state: HTMLVideoElement
    dispatch: React.Dispatch<{
      type: 'set'
      payload: HTMLVideoElement
    }>
  }
  isPending: {
    state: HTMLVideoElement
    dispatch: React.Dispatch<{
      type: 'on' | 'off'
    }>
  }
}

const Header: React.FC<Props> = props => {
  const crumbs = [
    {
      to: '/',
      name: 'ホーム'
    }
  ]
  const video = React.useRef<HTMLVideoElement>(null)
  useEffectAsync({
    effect: async () => {
      video.current.load()
      await functions.canplayVideo(video.current) // TODO: cleanupする
      props.isPending.dispatch({ type: 'off' })
      video.current.play()
      props.video.dispatch({ type: 'set', payload: video.current })
    },
    deps: []
  })
  return (
    <Root>
      <video
        ref={video}
        src="video-mobile.mp4"
        preload="none"
        muted
        playsInline
        loop
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
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* opacity: 0; */
  }
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
