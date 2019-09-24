import styled, { CreateStyled } from '@emotion/styled'
import sizes, { SizesTypes } from '~/utils/emotion/sizes'
import mixins, { MixinsTypes } from '~/utils/emotion/mixins'
import globalStyles from '~/utils/emotion/globalStyles'

type ThemeTypes = {
  sizes: SizesTypes
  mixins: MixinsTypes
}

export const theme: ThemeTypes = {
  sizes,
  mixins
}

export { globalStyles }

export default styled as CreateStyled<ThemeTypes>
