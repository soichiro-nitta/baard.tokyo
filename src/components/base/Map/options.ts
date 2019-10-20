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
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: styles.colors.light.neutral
          }
        ]
      },
      {
        featureType: 'landscape',
        stylers: [
          {
            color: styles.colors.light.border
          }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [
          {
            color: styles.colors.light.background
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          {
            color: styles.colors.light.background
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: styles.colors.light.background
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: styles.colors.light.border
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: styles.colors.light.border
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            color: styles.colors.light.border
          }
        ]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
          {
            color: styles.colors.light.background
          }
        ]
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: styles.colors.light.neutral
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
            color: styles.colors.light.neutral
          },
          {
            lightness: 17
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
        elementType: 'labels.text.stroke',
        stylers: [
          {
            visibility: 'off'
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
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      }
    ]
  }
}

export default options
