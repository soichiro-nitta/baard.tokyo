import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import functions from '~/utils/functions'
import animations from '~/utils/animations'

type Props = {
  navigation: boolean
  setNavigation: Function
}

const Humberger: React.FC<Props> = props => {
  const circle = React.useRef(null)
  const border1 = React.useRef()
  const border2 = React.useRef()
  const border3 = React.useRef()
  const border4 = React.useRef()
  const border5 = React.useRef()
  const click = async (): Promise<void> => {
    props.setNavigation(!props.navigation)
    animations.set(circle.current, {
      scale: 0,
      opacity: 1
    })
  }
  React.useEffect(() => {
    ;(async (): Promise<void> => {
      if (props.navigation) {
        await functions.raf()
        animations.scale(circle.current, 1, 0.7, 'InOut')
        animations.opacity(circle.current, 0, 0.7, 'InOut')
        animations.scaleX(border1.current, 0, 0.7, 'InOut')
        await functions.delay(100)
        animations.scaleX(border3.current, 0, 0.7, 'InOut')
        await functions.delay(100)
        animations.scaleX(border2.current, 0, 0.7, 'InOut')
        await functions.delay(350)
        animations.scaleX(border4.current, 1, 0.7, 'InOut')
        await functions.delay(100)
        animations.scaleX(border5.current, 1, 0.7, 'InOut')
      } else {
        await functions.raf()
        animations.scale(circle.current, 1, 0.7, 'InOut')
        animations.opacity(circle.current, 0, 0.7, 'InOut')
        animations.scaleX(border4.current, 0, 0.7, 'InOut')
        await functions.delay(100)
        animations.scaleX(border5.current, 0, 0.7, 'InOut')
        await functions.delay(350)
        animations.scaleX(border2.current, 1, 0.7, 'InOut')
        await functions.delay(100)
        animations.scaleX(border3.current, 1, 0.7, 'InOut')
        await functions.delay(100)
        animations.scaleX(border1.current, 1, 0.7, 'InOut')
      }
    })()
  }, [props.navigation])
  return (
    <Root onClick={click}>
      <Circle ref={circle} />
      <Borders>
        <Border1 ref={border1} />
        <Border2 ref={border2} />
        <Border3 ref={border3} />
        <Border4Wrapper>
          <Border4 ref={border4} />
        </Border4Wrapper>
        <Border5Wrapper>
          <Border5 ref={border5} />
        </Border5Wrapper>
      </Borders>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
`
const Circle = styled.div`
  ${styles.mixins.absoluteCenter}
  left: -50%;
  width: 200%;
  height: 200%;
  background: ${styles.colors.light.neutral};
  border-radius: 50%;
  transform: scale(0);
`
const Borders = styled.div`
  position: relative;
  padding-top: 3px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const Border1 = styled.div`
  width: 100%;
  height: 2px;
  background: ${styles.colors.light.logo};
  transform-origin: center left;
`
const Border2 = styled(Border1)`
  margin-top: 4px;
  width: 75%;
`
const Border3 = styled(Border1)`
  margin-top: 4px;
  width: 90%;
`
const Border4Wrapper = styled.div`
  ${styles.mixins.absoluteCenter}
  width: 100%;
  height: 2px;
  transform: rotate(-45deg);
  transform-origin: center center;
`
const Border4 = styled(Border1)`
  width: 100%;
  height: 100%;
  transform: scaleX(0);
`
const Border5Wrapper = styled(Border4Wrapper)`
  transform: rotate(45deg);
`
const Border5 = Border4

export default Humberger
