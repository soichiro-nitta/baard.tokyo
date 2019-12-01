import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import { css } from '@emotion/core'

const ExhibitionPanorama: React.FC = props => {
  return <Root>{props.children}</Root>
}

const Root = styled.div`
  position: relative;
  width: 100%;
  height: calc(
    (100vw - ${styles.sizes.phone.dashboard + 1 + styles.sizes.phone.base()}px) *
      1.25
  );
  ${styles.large(css`
    height: ${(styles.sizes.desktop.main() - styles.sizes.phone.base()) *
      1.185}px;
  `)}
`

export default ExhibitionPanorama
