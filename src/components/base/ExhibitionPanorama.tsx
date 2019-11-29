import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

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
`

export default ExhibitionPanorama
