import * as React from 'react'
import styled from '@emotion/styled'
import functions from '~/utils/functions'
import { IsPending } from '~/store/global/isPending'
import { Launched } from '~/store/default/launched'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import Background from '~/components/default/Opening/Background'
import Borders from '~/components/default/Opening/Borders'
import Svg from '~/components/default/Opening/Svg'

type Props = {
  isPending: IsPending
  launched: Launched
}

const Opening: React.FC<Props> = props => {
  useEffectAsync({
    effect: async () => {
      props.isPending.dispatch({ type: 'on' })
      await functions.delay(4.5)
      props.launched.dispatch({ type: 'on' })
    },
    deps: []
  })
  return (
    <Root>
      <Background />
      <BordersWrapper>
        <Borders />
      </BordersWrapper>
      <SvgWrapper>
        <Svg />
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
