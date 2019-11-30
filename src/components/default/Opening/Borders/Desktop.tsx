import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import useEffectAsync from '~/hooks/base/useEffectAsync'
import animations from '~/utils/animations'
import functions from '~/utils/functions'

const Desktop: React.FC = () => {
  const borders = [
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null)
  ]
  useEffectAsync({
    effect: async () => {
      const odd = [
        borders[1].current,
        borders[3].current,
        borders[5].current,
        borders[7].current,
        borders[9].current
      ]
      const even = [
        borders[0].current,
        borders[2].current,
        borders[4].current,
        borders[6].current,
        borders[8].current
      ]
      animations.set(odd, {
        opacity: 1,
        y: '-100%'
      })
      animations.set(even, {
        opacity: 1,
        y: '100%'
      })
      animations.y(odd, '0%', 7, 'Out')
      animations.y(even, '0%', 7, 'Out')
      await functions.delay(3)
      animations.y(odd, '100%', 1, 'Out')
      animations.y(even, '-100%', 1, 'Out')
    },
    deps: []
  })
  return (
    <Root>
      <Border0 ref={borders[0]} />
      <Border1 ref={borders[1]} />
      <Border2 ref={borders[2]} />
      <Border2 ref={borders[3]} />
      <Border3 ref={borders[4]} />
      <Border3 ref={borders[5]} />
      <Border3 ref={borders[6]} />
      <Border2 ref={borders[7]} />
      <Border2 ref={borders[8]} />
      <Border4 ref={borders[9]} />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  margin: 0 auto;
  width: ${styles.sizes.desktop.container}px;
  height: 100%;
`
const Border0 = styled.div`
  width: 1px;
  height: 100%;
  background: ${styles.colors.light.border};
  opacity: 0;
`
const Border1 = styled.div`
  margin-left: ${styles.sizes.phone.dashboard}px;
  width: 1px;
  height: 100%;
  background: ${styles.colors.light.border};
  opacity: 0;
`
const Border2 = styled.div`
  margin-left: ${styles.sizes.phone.dashboard * 1.5}px;
  width: 1px;
  height: 100%;
  background: ${styles.colors.light.border};
  opacity: 0;
`
const Border3 = styled.div`
  margin-left: ${styles.sizes.phone.dashboard * 3}px;
  width: 1px;
  height: 100%;
  background: ${styles.colors.light.border};
  opacity: 0;
`
const Border4 = styled.div`
  margin-left: ${styles.sizes.phone.dashboard}px;
  width: 1px;
  height: 100%;
  background: ${styles.colors.light.border};
  opacity: 0;
`

export default Desktop
