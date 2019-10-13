import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

const Humberger: React.FC = () => {
  return (
    <Root>
      <Border1 />
      <Border2 />
      <Border3 />
    </Root>
  )
}

const Root = styled.div`
  padding-top: 3px;
  width: 20px;
  height: 20px;
`
const Border1 = styled.div`
  width: 100%;
  height: 2px;
  background: ${styles.colors.light.logo};
`
const Border2 = styled(Border1)`
  margin-top: 4px;
  width: 75%;
`
const Border3 = styled(Border1)`
  margin-top: 4px;
  width: 90%;
`

export default Humberger
