import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

const Desktop: React.FC = () => (
  <Root>
    <Border0 />
    <Border1>
      <Border1A />
      <Border1B />
    </Border1>
    <Border2 />
    <Border2 />
    <Border3 />
    <Border3 />
    <Border3 />
    <Border2 />
    <Border2 />
    <Border4 />
  </Root>
)

const Root = styled.div`
  display: flex;
  margin: 0 auto;
  width: ${styles.sizes.desktop.container}px;
  height: 100%;
`
const Border0 = styled.div`
  width: 1px;
  height: 100%;
  background: ${styles.colors.light.border};
`
const Border1 = styled.div`
  margin-left: ${styles.sizes.phone.dashboard}px;
  width: 1px;
  height: 100%;
`
const Border1A = styled.div`
  width: 100%;
  height: 9px;
  background: ${styles.colors.light.border};
`
const Border1B = styled.div`
  margin-top: ${styles.sizes.phone.dashboard - 9}px;
  width: 100%;
  height: calc(100% - ${styles.sizes.phone.dashboard}px);
  background: ${styles.colors.light.border};
`
const Border2 = styled.div`
  margin-left: ${styles.sizes.phone.dashboard * 1.5}px;
  width: 1px;
  height: 100%;
  background: ${styles.colors.light.border};
`
const Border3 = styled.div`
  margin-left: ${styles.sizes.phone.dashboard * 3}px;
  width: 1px;
  height: 100%;
  background: ${styles.colors.light.border};
`
const Border4 = styled.div`
  margin-left: ${styles.sizes.phone.dashboard}px;
  width: 1px;
  height: 100%;
  background: ${styles.colors.light.border};
`

export default Desktop
