import * as React from 'react'
import styled from '@emotion/styled'
import functions from '~/utils/functions'
import { Launched } from '~/store/default/launched'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import Background from '~/components/default/Opening/Background'
import Borders from '~/components/default/Opening/Borders'
import Svg from '~/components/default/Opening/Svg'
import styles from '~/utils/styles'
import { css } from '@emotion/core'
import { Large } from '~/store/global/large'

type Props = {
  launched: Launched
  large: Large
}

const Opening: React.FC<Props> = props => {
  useEffectAsync({
    effect: async () => {
      await functions.delay(4.5)
      props.launched.dispatch({ type: 'on' })
    },
    deps: []
  })
  return (
    <Root>
      <Background />
      <BordersWrapper>
        <Borders large={props.large} />
      </BordersWrapper>
      <SvgWrapper>
        <Svg />
      </SvgWrapper>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  ${styles.large(css`
    margin: 0 auto;
    width: ${styles.sizes.desktop.container()}px;
  `)}
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
