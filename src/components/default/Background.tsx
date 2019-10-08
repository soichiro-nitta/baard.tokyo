import * as React from 'react'
import styled from '~/utils/emotion'

const Background: React.FC = () => (
  <Root>
    <Border1>
      <Relative>
        <Border1A />
        <Border1B />
      </Relative>
    </Border1>
    <Border2>
      <Relative>
        <Border2A />
        <Border2B />
      </Relative>
    </Border2>
    <Border3 />
    <Border4 />
  </Root>
)

const Root = styled.div`
  ${(props): string => props.theme.mixins.relative}
`
const Relative = styled.div`
  ${(props): string => props.theme.mixins.relative}
`
const Border1 = styled.div`
  position: absolute;
  top: 0;
  left: ${(props): number => props.theme.sizes.phone.dashboard}px;
  width: 1px;
  height: 100%;
`
const Border1A = styled.div`
  width: 100%;
  height: 9px;
  background: ${(props): string => props.theme.colors.light.border};
`
const Border1B = styled.div`
  position: absolute;
  top: ${(props): number => props.theme.sizes.phone.dashboard}px;
  width: 100%;
  height: calc(
    100% - ${(props): number => props.theme.sizes.phone.dashboard}px
  );
  background: ${(props): string => props.theme.colors.light.border};
`
const Border2 = styled(Border1)`
  left: calc(
    (
        (
            100% -
              ${(props): number => props.theme.sizes.phone.dashboard * 2 + 2}px
          ) - 2px
      ) / 3 + ${(props): number => props.theme.sizes.phone.dashboard + 1}px
  );
`
const Border2A = styled(Border1A)`
  height: 11px;
`
const Border2B = Border1B
const Border3 = styled.div`
  position: absolute;
  top: 0;
  right: calc(
    (
        (
            100% -
              ${(props): number => props.theme.sizes.phone.dashboard * 2 + 2}px
          ) - 2px
      ) / 3 + ${(props): number => props.theme.sizes.phone.dashboard + 1}px
  );
  width: 1px;
  height: 100%;
  background: ${(props): string => props.theme.colors.light.border};
`
const Border4 = styled(Border3)`
  right: ${(props): number => props.theme.sizes.phone.dashboard}px;
  height: 100%;
`

export default Background
