import * as React from 'react'
import styled from '~/utils/emotion'

const Background: React.FC = () => (
  <Root>
    <Border1 />
    <Border2 />
    <Border3 />
    <Border4 />
    <Border5 />
    <Border6 />
  </Root>
)

const Root = styled.h1`
  width: 100%;
  height: 100%;
`
const Border1 = styled.div`
  position: absolute;
  top: 0;
  left: ${(props): number => props.theme.sizes.phone.dashboard}px;
  width: 1px;
  height: 9px;
  background: #e5e5e5;
`
const Border2 = styled(Border1)`
  top: ${(props): number => props.theme.sizes.phone.dashboard}px;
  height: calc(
    100% - ${(props): number => props.theme.sizes.phone.dashboard}px
  );
`
const Border3 = styled(Border1)`
  left: calc(
    (100% - ${(props): number => props.theme.sizes.phone.dashboard * 2 + 2}px) /
      3 + ${(props): number => props.theme.sizes.phone.dashboard + 1}px
  );
  height: 11px;
`
const Border4 = styled(Border1)`
  top: ${(props): number => props.theme.sizes.phone.dashboard}px;
  left: calc(
    (100% - ${(props): number => props.theme.sizes.phone.dashboard * 2 + 2}px) /
      3 + ${(props): number => props.theme.sizes.phone.dashboard + 1}px
  );
  height: calc(
    100% - ${(props): number => props.theme.sizes.phone.dashboard}px
  );
`
const Border5 = styled(Border1)`
  left: calc(
    (100% - ${(props): number => props.theme.sizes.phone.dashboard * 2 + 2}px) /
      3 * 2 + ${(props): number => props.theme.sizes.phone.dashboard + 1}px
  );
  height: 100%;
`
const Border6 = styled(Border1)`
  left: auto;
  right: ${(props): number => props.theme.sizes.phone.dashboard}px;
  height: 100%;
`

export default Background
