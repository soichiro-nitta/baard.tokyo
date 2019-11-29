import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

type Props = {
  head: string
  price: string
}

const List: React.FC<Props> = props => {
  return (
    <Root>
      <Head>{props.head}</Head>
      <Price>¥ {props.price}</Price>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const Head = styled.div`
  width: 65%;
  font-weight: bold;
  letter-spacing: 0.33em;
  ${styles.mixins.lhCrop(2)}
`
const Price = styled.div`
  line-height: 1;
`

export default List
