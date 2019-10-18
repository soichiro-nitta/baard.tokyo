import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

const Table: React.FC = () => {
  return (
    <Root>
      <Col>
        <b>オープン</b>
        <div>10:00 ~ 20:00</div>
      </Col>
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
          <Circle />
        </Row>
        <Row>
          <Circle />
        </Row>
        <Row>
          <Circle />
        </Row>
        <Row>
          <Circle />
        </Row>
        <Row>
          <Circle />
        </Row>
        <Row>
          <Circle />
        </Row>
        <Row>
          <Circle />
        </Row>
      </Col>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
`
const Col = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${styles.sizes.phone.base}px;
  padding-bottom: 0;
  width: 100%;
  line-height: 1;
  &:not(:first-of-type) {
    margin-top: ${styles.sizes.phone.base}px;
    border-top: 1px solid ${styles.colors.light.border};
  }
`
const Row = styled.div`
  ${styles.mixins.flexCenter}
  width: 16px;
`
const Circle = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid ${styles.colors.light.neutral};
  border-radius: 50%;
`

export default Table
