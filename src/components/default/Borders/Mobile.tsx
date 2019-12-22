import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

const Mobile: React.FC = () => (
  <Root>
    <Border1>
      <Relative>
        <Border1A />
        <Border1B />
      </Relative>
    </Border1>
    <Border2 />
    <Border3 />
    <Border4 />
  </Root>
)

const Root = styled.div`
  ${styles.mixins.relative}
`
const Relative = styled.div`
  ${styles.mixins.relative}
`
const Border1 = styled.div`
  position: absolute;
  top: 0;
  left: ${styles.sizes.phone.dashboard}px;
  width: 1px;
  height: 100%;
`
const Border1A = styled.div`
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
  left: calc(
    ((100% - ${styles.sizes.phone.dashboard * 2 + 2}px) - 2px) / 3 +
      ${styles.sizes.phone.dashboard + 1}px
  );
  background: var(--border);
`
const Border3 = styled.div`
  position: absolute;
  top: 0;
  right: calc(
    ((100% - ${styles.sizes.phone.dashboard * 2 + 2}px) - 2px) / 3 +
      ${styles.sizes.phone.dashboard + 1}px
  );
  width: 1px;
  height: 100%;
  background: var(--border);
`
const Border4 = styled(Border3)`
  right: ${styles.sizes.phone.dashboard}px;
  height: 100%;
`

export default Mobile
