import { Maps, MapOptions } from 'google-map-react'
import styles from '~/utils/styles'
import { Colorscheme } from '~/store/global/colorscheme'

type Options = (colorscheme: Colorscheme) => (maps: Maps) => MapOptions

const options: Options = colorscheme => {
  const colors = styles.colors[colorscheme.state]
  const neutral = colors.neutral
  const border = colors.borderHex
  const background = colors.background
  const text = colors.textHex
  return (maps: Maps): MapOptions => {
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
              color: colorscheme.state === 'dark' ? text : neutral
            }
          ]
        },
        {
          featureType: 'landscape',
          stylers: [
            {
              color: border
            }
          ]
        },
        {
          featureType: 'road.local',
          elementType: 'geometry',
          stylers: [
            {
              color: background
            }
          ]
        },
        {
          featureType: 'road.arterial',
          elementType: 'geometry',
          stylers: [
            {
              color: background
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: background
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: border
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              color: border
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            {
              color: border
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [
            {
              color: background
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: neutral
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
              color: neutral
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
              lightness: colorscheme.state === 'dark' ? -65 : 30
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
}

export default options
