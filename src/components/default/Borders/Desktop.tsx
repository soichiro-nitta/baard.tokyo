import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

const Desktop: React.FC = () => (
  <Root>
    <Border1>
      <Border1A />
      <Border1B />
    </Border1>
    <Border2 />
    <Border3 />
    <Border4 />
  </Root>
)

const Root = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`
const Border1 = styled.div`
  position: relative;
  margin-left: ${styles.sizes.phone.dashboard}px;
  width: 1px;
  height: 100%;
`
const Border1A = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 9px;
  background: var(--border);
`
const Border1B = styled.div`
  position: absolute;
  top: ${styles.sizes.phone.dashboard}px;
  width: 100%;
  height: calc(100% - ${styles.sizes.phone.dashboard}px);
  background: var(--border);
`
const Border2 = styled(Border1)`
  margin-left: ${styles.sizes.desktop.dashboard -
    (1 + styles.sizes.phone.dashboard + 1)}px;
  width: 1px;
  height: 100%;
  background: var(--border);
`
const Border3 = styled.div`
  position: absolute;
  top: 0;
  right: ${styles.sizes.desktop.dashboard}px;
  width: 1px;
  height: 100%;
  background: var(--border);
`
const Border4 = styled(Border3)`
  right: ${styles.sizes.phone.dashboard}px;
  height: 100%;
`

export default Desktop
