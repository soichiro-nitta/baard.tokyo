import * as React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/pro-duotone-svg-icons'
import config from '~/utils/config'
import styles from '~/utils/styles'
import options from '~/components/access/Map/options'

const Map: React.FC = () => {
  return (
    <Root>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: config.googleApiKey
        }}
        defaultCenter={{
          lat: 43.0582954,
          lng: 141.3466919
        }}
        defaultZoom={15}
        options={options}
      >
        <Pin lat={43.0582954} lng={141.3466919}>
          <FontAwesomeIcon icon={faMapPin} />
        </Pin>
      </GoogleMapReact>
    </Root>
  )
}

const Root = styled.div`
  margin: ${styles.sizes.phone.base}px 0;
  padding: ${styles.sizes.phone.base}px;
  padding-left: 0;
  width: 100%;
  height: 200px;
  border-top: 1px solid ${styles.colors.light.border};
  border-bottom: 1px solid ${styles.colors.light.border};
  & > div {
    border-top: 1px solid ${styles.colors.light.border};
    border-right: 1px solid ${styles.colors.light.border};
    border-bottom: 1px solid ${styles.colors.light.border};
  }
`
const width = 29.25
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
