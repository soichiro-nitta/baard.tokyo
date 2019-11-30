import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import { isBrowser } from 'react-device-detect'
import { css } from '@emotion/core'

const ExhibitionPanorama: React.FC = props => {
  return <Root>{props.children}</Root>
}

const Root = styled.div`
  position: relative;
  width: 100%;
  height: calc(
    (100vw - ${styles.sizes.phone.dashboard + 1 + styles.sizes.phone.base()}px) /
      16 * 10
  );
  ${isBrowser &&
    css`
      height: ${(styles.sizes.desktop.main() / 16) * 10}px;
    `}
`

export default ExhibitionPanorama
