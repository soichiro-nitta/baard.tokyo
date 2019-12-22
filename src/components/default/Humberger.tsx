import * as React from 'react'
import styled from '@emotion/styled'
import { Gnav } from '~/store/default/gnav'
import styles from '~/utils/styles'
import functions from '~/utils/functions'
import animations from '~/utils/animations'
import useEffectAsync from '~/hooks/base/useEffectAsync'

type Props = {
  gnav: Gnav
}

const Humberger: React.FC<Props> = props => {
  const [processing, setProcessing] = React.useState<boolean>(false)
  const circle = React.useRef(null)
  const border1 = React.useRef()
  const border2 = React.useRef()
  const border3 = React.useRef()
  const border4 = React.useRef()
  const border5 = React.useRef()
  const click = async (): Promise<void> => {
    if (processing) return
    props.gnav.dispatch({ type: props.gnav.state ? 'off' : 'on' })
  }
  const circleExpand = async (el: HTMLDivElement): Promise<void> => {
    animations.scale(el, 1, 0.7, 'InOut')
    animations.opacity(el, 0, 0.7, 'InOut')
    await functions.delay(0.7)
    animations.set(el, {
      scale: 0,
      opacity: 1
    })
  }
  useEffectAsync({
    effect: async () => {
      setProcessing(true)
      if (props.gnav.state) {
        await functions.raf()
        circleExpand(circle.current)
        animations.scaleX(border1.current, 0, 0.7, 'InOut')
        await functions.delay(0.1)
        animations.scaleX(border3.current, 0, 0.7, 'InOut')
        await functions.delay(0.1)
        animations.scaleX(border2.current, 0, 0.7, 'InOut')
        await functions.delay(0.35)
        animations.scaleX(border4.current, 1, 0.7, 'InOut')
        await functions.delay(0.1)
        animations.scaleX(border5.current, 1, 0.7, 'InOut')
      } else {
        await functions.raf()
        circleExpand(circle.current)
        animations.scaleX(border4.current, 0, 0.7, 'InOut')
        await functions.delay(0.1)
        animations.scaleX(border5.current, 0, 0.7, 'InOut')
        await functions.delay(0.35)
        animations.scaleX(border2.current, 1, 0.7, 'InOut')
        await functions.delay(0.1)
        animations.scaleX(border3.current, 1, 0.7, 'InOut')
        await functions.delay(0.1)
        animations.scaleX(border1.current, 1, 0.7, 'InOut')
      }
      await functions.delay(0.8)
      setProcessing(false)
    },
    deps: [props.gnav.state]
  })
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
  ${styles.mixins.flexCenter}
  position: relative;
  width: ${styles.sizes.phone.dashboard}px;
  height: ${styles.sizes.phone.dashboard}px;
`
const Circle = styled.div`
  ${styles.mixins.absoluteCenter}
  left: -50%;
  width: 200%;
  height: 200%;
  background: var(--brand);
  border-radius: 50%;
  transform: scale(0);
`
const Borders = styled.div`
  position: relative;
  padding-top: 3px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`
const Border1 = styled.div`
  width: 100%;
  height: 2px;
  background: var(--brand);
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
