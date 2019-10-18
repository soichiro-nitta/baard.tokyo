import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

type Props = {
  head: string
  data: string
}

const Row: React.FC<Props> = props => {
  return (
    <Root>
      <Head>{props.head}</Head>
      <Data>{props.data}</Data>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  line-height: 1;
`
const Head = styled.div`
  font-weight: bold;
  letter-spacing: 0.33em;
`
const Data = styled.div`
  margin-top: ${styles.sizes.phone.base}px;
  ${styles.mixins.lhCrop(2)}
`

export default Row
