import * as React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircle,
  faTimes,
  faTriangle
} from '@fortawesome/pro-regular-svg-icons'
import styles from '~/utils/styles'

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
          <Times icon={faTimes} />
        </Row>
        <Row>
          <Triangle icon={faTriangle} />
        </Row>
        <Row>
          <FontAwesomeIcon icon={faCircle} />
        </Row>
        <Row>
          <FontAwesomeIcon icon={faCircle} />
        </Row>
        <Row>
          <FontAwesomeIcon icon={faCircle} />
        </Row>
        <Row>
          <FontAwesomeIcon icon={faCircle} />
        </Row>
        <Row>
          <FontAwesomeIcon icon={faCircle} />
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
const Times = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`
const Triangle = styled(FontAwesomeIcon)`
  font-size: 1.1rem;
`

export default Table
