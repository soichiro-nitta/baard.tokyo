import * as React from 'react'
import styled from '~/utils/emotion'
import animations from '~/utils/animations'

const Borders: React.FC = () => {
  const border1 = React.useRef()
  const border2 = React.useRef()
  const border3 = React.useRef()
  const border4 = React.useRef()
  React.useEffect(() => {
    animations.opening.borderUp(border1.current)
  })
  return (
    <Root>
      <Border1 ref={border1} />
      <Border2 ref={border2} />
      <Border3 ref={border3} />
      <Border4 ref={border4} />
    </Root>
  )
}

const Root = styled.div`
  ${(props): string => props.theme.mixins.relative}
`
const Border1 = styled.div`
  position: absolute;
  top: 0;
  left: ${(props): number => props.theme.sizes.phone.dashboard}px;
  width: 1px;
  height: 100%;
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

export default Borders
