import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

const Table: React.FC = () => {
  return (
    <Root>
      <Col>
        <Row>
          <b>営業時間</b>
        </Row>
        <Row>10:00 ~ 20:00</Row>
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
  border-right: 1px solid ${styles.colors.light.border};
  border-bottom: 1px solid ${styles.colors.light.border};
  background: ${styles.colors.light.background};
`
const Col = styled.div`
  display: flex;
  width: 100%;
  line-height: 1;
`
const Row = styled.div`
  ${styles.mixins.flexCenter}
  flex-grow: 1;
  border-top: 1px solid ${styles.colors.light.border};
  border-left: 1px solid ${styles.colors.light.border};
  height: 50px;
`
const Circle = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid ${styles.colors.light.neutral};
  border-radius: 50%;
`

export default Table
