import * as React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYenSign } from '@fortawesome/pro-duotone-svg-icons'
// import styles from '~/utils/styles'
// ${styles.mixins.lhCrop(2)}

type Props = {
  head: string
  price: string
}

const List: React.FC<Props> = props => {
  return (
    <Root>
      <Head>{props.head}</Head>
      <Price>
        <FontAwesomeIcon icon={faYenSign} />
        {props.price}
      </Price>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  line-height: 1;
`
const Head = styled.div`
  font-weight: bold;
  letter-spacing: 0.33em;
`
const Price = styled.div`
  svg {
    margin-right: 7.5px;
    vertical-align: bottom;
  }
`

export default List
