import * as React from 'react'
import styled from '~/utils/emotion'
import animations from '~/utils/animations'
import functions from '~/utils/functions'

const Borders: React.FC = () => {
  const border1 = React.useRef()
  const border2 = React.useRef()
  const border3 = React.useRef()
  const border4 = React.useRef()
  React.useEffect(() => {
    ;(async (): Promise<void> => {
      animations.borderIn(border1.current)
      animations.borderIn(border2.current)
      animations.borderIn(border3.current)
      animations.borderIn(border4.current)
      await functions.delay(3000)
      animations.borderOutDown(border4.current)
      animations.borderOutUp(border3.current)
      animations.borderOutDown(border2.current)
      animations.borderOutUp(border1.current)
    })()
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
  width: 100%;
  height: 100%;
`
const Border1 = styled.div`
  position: absolute;
  top: 0;
  left: ${(props): number => props.theme.sizes.phone.dashboard}px;
  width: 1px;
  height: 100%;
  background: ${(props): string => props.theme.colors.light.border};
  transform: translate(0, 100%);
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
  transform: translate(0, -100%);
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
  transform: translate(0, 100%);
`
const Border4 = styled(Border3)`
  right: ${(props): number => props.theme.sizes.phone.dashboard}px;
  height: 100%;
  transform: translate(0, -100%);
`

export default Borders