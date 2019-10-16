import * as React from 'react'
import styled from '@emotion/styled'
import GoogleMapReact, { Maps, MapOptions } from 'google-map-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/pro-duotone-svg-icons'
import styles from '~/utils/styles'

const Component: React.FC = () => {
  const createMapOptions = (maps: Maps): MapOptions => {
    return {
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT
      },
      mapTypeControl: false,
      zoomControl: false,
      scaleControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      styles: [
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#e9e9e9'
            },
            {
              lightness: 17
            }
          ]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [
            {
              color: '#f5f5f5'
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#ffffff'
            },
            {
              lightness: 17
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#ffffff'
            },
            {
              lightness: 29
            },
            {
              weight: 0.2
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [
            {
              color: '#ffffff'
            },
            {
              lightness: 18
            }
          ]
        },
        {
          featureType: 'road.local',
          elementType: 'geometry',
          stylers: [
            {
              color: '#ffffff'
            },
            {
              lightness: 16
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              color: '#f5f5f5'
            },
            {
              lightness: 21
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            {
              color: '#dedede'
            },
            {
              lightness: 21
            }
          ]
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            {
              visibility: 'on'
            },
            {
              color: '#ffffff'
            },
            {
              lightness: 16
            }
          ]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [
            {
              saturation: 36
            },
            {
              color: '#333333'
            },
            {
              lightness: 40
            }
          ]
        },
        {
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [
            {
              color: '#f2f2f2'
            },
            {
              lightness: 19
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#fefefe'
            },
            {
              lightness: 20
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#fefefe'
            },
            {
              lightness: 17
            },
            {
              weight: 1.2
            }
          ]
        }
      ]
    }
  }
  return (
    <Root>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyC8qn_9ItJ58ogb80aTKFMHo9kX2e5Ysn4'
        }}
        defaultCenter={{
          lat: 43.0582954,
          lng: 141.3466919
        }}
        defaultZoom={15}
        options={createMapOptions}
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

export default Component
