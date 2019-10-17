import { Maps, MapOptions } from 'google-map-react'
import styles from '~/utils/styles'

const options = (maps: Maps): MapOptions => {
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
            color: styles.colors.light.border
          }
          // {
          //   lightness: 20
          // }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: styles.colors.light.background
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
            color: styles.colors.light.background
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
            color: styles.colors.light.background
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
            color: styles.colors.light.background
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
            visibility: 'off'
          }
        ]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: styles.colors.light.neutral
          }
        ]
      },

      {
        elementType: 'labels.icon',
        stylers: [
          {
            saturation: -100
          },
          {
            visibility: 'on'
          },
          {
            lightness: 50
          }
        ]
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
          {
            saturation: -100
          },
          {
            visibility: 'simplified'
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

export default options
