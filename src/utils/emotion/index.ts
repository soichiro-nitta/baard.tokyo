import styled, { CreateStyled } from '@emotion/styled'
import sizes, { SizesTypes } from '~/utils/emotion/sizes'
import mixins, { MixinsTypes } from '~/utils/emotion/mixins'
import colors, { ColorsTypes } from '~/utils/emotion/colors'
import globalStyles from '~/utils/emotion/globalStyles'

type ThemeTypes = {
  sizes: SizesTypes
  mixins: MixinsTypes
  colors: ColorsTypes
}

export const theme: ThemeTypes = {
  sizes,
  mixins,
  colors
}

export { globalStyles }

export default styled as CreateStyled<ThemeTypes>
