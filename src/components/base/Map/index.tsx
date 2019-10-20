import * as React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/pro-duotone-svg-icons'
import config from '~/utils/config'
import styles from '~/utils/styles'
import options from '~/components/base/Map/options'

const Map: React.FC = () => {
  const lat = 35.762755
  const lng = 139.848256
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
        options={options}
      >
        <Pin lat={lat} lng={lng}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </Pin>
      </GoogleMapReact>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 105vw;
  & > div {
    border-top: 1px solid ${styles.colors.light.border};
    border-right: 1px solid ${styles.colors.light.border};
    border-bottom: 1px solid ${styles.colors.light.border};
  }
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
  color: ${styles.colors.light.logo};
`

export default Map
