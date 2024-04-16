import * as React from 'react'
import styled from '@emotion/styled'

import styles from '~/utils/styles'
import { Circle, Triangle, X } from 'lucide-react'

const Table: React.FC = () => {
  return (
    <Root>
      <Col>
        <Row>
          <b>月</b>
        </Row>
        <Row>
          <b>火</b>
        </Row>
        <Row>
          <b>水</b>
        </Row>
        <Row>
          <b>木</b>
        </Row>
        <Row>
          <b>金</b>
        </Row>
        <Row>
          <b>土</b>
        </Row>
        <Row>
          <b>日</b>
        </Row>
      </Col>
      <Col>
        <Row>
          <X style={{ width: '16px' }} strokeWidth={2} />
        </Row>
        <Row>
          <Triangle style={{ width: '16px' }} strokeWidth={2} />
        </Row>
        <Row>
          <Circle style={{ width: '16px' }} strokeWidth={2} />
        </Row>
        <Row>
          <Circle style={{ width: '16px' }} strokeWidth={2} />
        </Row>
        <Row>
          <Circle style={{ width: '16px' }} strokeWidth={2} />
        </Row>
        <Row>
          <Circle style={{ width: '16px' }} strokeWidth={2} />
        </Row>
        <Row>
          <Circle style={{ width: '16px' }} strokeWidth={2} />
        </Row>
      </Col>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: var(--background);
  ${styles.mixins.transitionBackground}
`
const Col = styled.div`
  display: flex;
  width: 100%;
  line-height: 1;
`
const Row = styled.div`
  ${styles.mixins.flexCenter}
  flex-grow: 1;
  width: calc((100% - 6px) / 7);
  border-top: 1px solid var(--border);
  border-left: 1px solid var(--border);
  height: 50px;
`
// const Times = styled(FontAwesomeIcon)`
//   font-size: 1.5rem;
// `
// const Triangle = styled(FontAwesomeIcon)`
//   font-size: 1.1rem;
// `

export default Table
