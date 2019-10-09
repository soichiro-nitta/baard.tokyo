import * as React from 'react'
import styled from '~/utils/emotion'
import animations from '~/utils/animations'
import functions from '~/utils/functions'

const Shapes: React.FC = () => {
  const shape1 = React.useRef()
  const shape2 = React.useRef()
  const shape3 = React.useRef()
  const shape4 = React.useRef()
  const shape5 = React.useRef()
  React.useEffect(() => {
    ;(async (): Promise<void> => {
      await functions.delay(4000)
      animations.shapeOutDown(shape3.current)
      await functions.delay(100)
      animations.shapeOutUp(shape2.current)
      animations.shapeOutUp(shape4.current)
      await functions.delay(100)
      animations.shapeOutDown(shape1.current)
      animations.shapeOutDown(shape5.current)
    })()
  })
  return (
    <Root>
      <Shape1 ref={shape1} />
      <Shape2 ref={shape2} />
      <Shape3 ref={shape3} />
      <Shape4 ref={shape4} />
      <Shape5 ref={shape5} />
    </Root>
  )
}

const Root = styled.div`
  ${(props): string => props.theme.mixins.relative}
  width: 100%;
  height: 100%;
`
const Shape1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props): number => props.theme.sizes.phone.dashboard}px;
  height: 100%;
  background: ${(props): string => props.theme.colors.light.background};
  /* transform: translate(0, 100%); */
`
const Shape2 = styled(Shape1)`
  left: ${(props): number => props.theme.sizes.phone.dashboard}px;
  width: calc(
    (
        (
            100% -
              ${(props): number => props.theme.sizes.phone.dashboard * 2 + 2}px
          ) - 2px
      ) / 3 + 1px
  );
  /* transform: translate(0, -100%); */
`
const Shape3 = styled(Shape2)`
  left: calc(
    ${(props): number => props.theme.sizes.phone.dashboard + 1}px +
      (
        (
            100% -
              ${(props): number => props.theme.sizes.phone.dashboard * 2 + 2}px
          ) - 2px
      ) / 3
  );
  /* transform: translate(0, 100%); */
`
const Shape5 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: ${(props): number => props.theme.sizes.phone.dashboard + 1}px;
  height: 100%;
  background: ${(props): string => props.theme.colors.light.background};
  /* transform: translate(0, 100%); */
`
const Shape4 = styled(Shape5)`
  right: ${(props): number => props.theme.sizes.phone.dashboard + 1}px;
  width: calc(
    (
        (
            100% -
              ${(props): number => props.theme.sizes.phone.dashboard * 2 + 2}px
          ) - 2px
      ) / 3 + 1px
  );
  /* transform: translate(0, -100%); */
`

export default Shapes
