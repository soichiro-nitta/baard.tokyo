import global from '~/utils/styles/global'
import colors from '~/utils/styles/colors'
import mixins from '~/utils/styles/mixins'
import sizes from '~/utils/styles/sizes'
import { SerializedStyles, css } from '@emotion/core'

export { global }

const large = (style: SerializedStyles): SerializedStyles => {
  return css`
    @media (min-width: ${sizes.mq.large}px) {
      ${style}
    }
  `
}

export default {
  colors,
  mixins,
  sizes,
  large
}
