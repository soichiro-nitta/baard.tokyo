import * as React from 'react'
import styled from '~/utils/emotion'
import Shapes from '~/components/default/Opening/Shapes'
import Borders from '~/components/default/Opening/Borders'
import Svg from '~/components/default/Opening/Svg'

type Props = {
  setOpening: Function
}

const Opening: React.FC<Props> = props => {
  return (
    <Root>
      <Shapes />
      <BordersWrapper>
        <Borders />
      </BordersWrapper>
      <SvgWrapper>
        <Svg setOpening={props.setOpening} />
      </SvgWrapper>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const BordersWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`
const SvgWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`

export default Opening
