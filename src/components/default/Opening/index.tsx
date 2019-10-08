import * as React from 'react'
import Div100vh from 'react-div-100vh'
import styled from '~/utils/emotion'
import Background from '~/components/default/Background'
import OpeningLogo from '~/components/default/Opening/logo'

type Props = {
  setOpening: Function
}

const Opening: React.FC<Props> = props => {
  return (
    <Root>
      <BackgroundWrapper>
        <Background />
      </BackgroundWrapper>
      <OpeningLogo setOpening={props.setOpening} />
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: ${(props): string => props.theme.colors.light.background};
`
const BackgroundWrapper = styled(Div100vh)`
  display: flex;
  width: 100%;
  height: 100%;
`
const Background1 = styled.div`
  width: ${(props): number => props.theme.sizes.phone.dashboard}px;
  height: 100%;
  background: ${(props): string => props.theme.colors.light.background};
  border-right: 1px solid #ccc;
`

export default Opening
