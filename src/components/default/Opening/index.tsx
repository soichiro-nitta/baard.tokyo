import * as React from 'react'
import Div100vh from 'react-div-100vh'
import styled from '~/utils/emotion'
import Borders from '~/components/default/Opening/Borders'
import Svg from '~/components/default/Opening/Svg'

type Props = {
  setOpening: Function
}

const Opening: React.FC<Props> = props => {
  return (
    <Root>
      <Borders />
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
  background: ${(props): string => props.theme.colors.light.background};
`
const SvgWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`

export default Opening
