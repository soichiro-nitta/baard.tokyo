import * as React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from '@emotion/styled'

import config from '~/utils/config'
import styles from '~/utils/styles'
import options from '~/components/base/Map/options'
import { css } from '@emotion/core'
import { Colorscheme } from '~/store/global/colorscheme'
import { MapPin } from 'lucide-react'

type Props = {
  colorscheme: Colorscheme
}

const Map: React.FC<Props> = props => {
  const lat = 35.762755
  const lng = 139.848256
  const optionsByColorscheme = options(props.colorscheme)
  return (
    <Root>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: config.googleApiKey
        }}
        defaultCenter={{
          lat: lat,
          lng: lng
        }}
        defaultZoom={17}
        options={optionsByColorscheme}
      >
        <Pin lat={lat} lng={lng}>
          <MapPin
            style={{ width: '60px', height: 'auto', opacity: 0.8 }}
            strokeWidth={2}
          />
        </Pin>
      </GoogleMapReact>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 105vw;
  & > div {
    border-top: 1px solid var(--border);
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }
  ${styles.large(css`
    height: ${styles.sizes.desktop.main * 1.05}px;
  `)}
`
const width = 39
const height = 52
const Pin = styled.div<{
  lat: number
  lng: number
}>`
  position: absolute;
  top: -${height}px;
  left: -${width / 2}px;
  width: ${width}px;
  height: ${height}px;
  font-size: 5rem;
  color: var(--brand);
`

export default Map
