import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

const Table: React.FC = () => {
  return (
    <Root>
      <Col>
        <Row1>
          <b>OPEN</b>
        </Row1>
        <Row1 hours>10:00 ~ 20:00</Row1>
      </Col>
      <Col>
        <Row2>
          <b>月</b>
        </Row2>
        <Row2>
          <b>火</b>
        </Row2>
        <Row2>
          <b>水</b>
        </Row2>
        <Row2>
          <b>木</b>
        </Row2>
        <Row2>
          <b>金</b>
        </Row2>
        <Row2>
          <b>土</b>
        </Row2>
        <Row2>
          <b>日</b>
        </Row2>
      </Col>
      <Col>
        <Row2>
          <Circle />
        </Row2>
        <Row2>
          <Circle />
        </Row2>
        <Row2>
          <Circle />
        </Row2>
        <Row2>
          <Circle />
        </Row2>
        <Row2>
          <Circle />
        </Row2>
        <Row2>
          <Circle />
        </Row2>
        <Row2>
          <Circle />
        </Row2>
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
  height: 50px;
`
const Row1 = styled.div<{ hours: boolean }>`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding-left: 15px;
  letter-spacing: ${(props): string => (props.hours ? '0' : '0.33em')};
  line-height: 1;
  border-top: 1px solid ${styles.colors.light.border};
  border-left: 1px solid ${styles.colors.light.border};
`
const Row2 = styled(Row1)`
  justify-content: center;
  padding-left: 0;
  letter-spacing: 0;
`
const Circle = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid ${styles.colors.light.neutral};
  border-radius: 50%;
`

export default Table
