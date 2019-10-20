import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import animations from '~/utils/animations'
import Filter from '~/components/base/Filter'

type Props = {
  navigation: boolean
}

const Navigation: React.FC<Props> = props => {
  const root = React.useRef()
  const video = React.useRef(null)
  React.useEffect(() => {
    if (props.navigation) {
      video.current.load()
      video.current.play()
      animations.opacity(root.current, 1, 1, 'InOut')
    } else {
      animations.opacity(root.current, 0, 1, 'InOut')
    }
  }, [props.navigation])
  return (
    <Root ref={root}>
      <video
        ref={video}
        src="navigation.mp4"
        preload="none"
        muted
        playsInline
        loop
      />
      <Filter />
    </Root>
  )
}

const Root = styled.div`
  ${styles.mixins.relative}
  opacity: 0;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default Navigation
