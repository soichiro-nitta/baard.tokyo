import * as React from 'react'
import styled from '@emotion/styled'
import animations from '~/utils/animations'
import functions from '~/utils/functions'
import styles from '~/utils/styles'
import useEffectAsync from '~/hooks/base/useEffectAsync'

const Mobile: React.FC = () => {
  const borders = [
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null),
    React.useRef<HTMLDivElement>(null)
  ]
  useEffectAsync({
    effect: async () => {
      const odd = [borders[1].current, borders[3].current]
      const even = [borders[0].current, borders[2].current]
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
      <Border1 ref={borders[2]} />
      <Border1 ref={borders[3]} />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  ${styles.mixins.relative}
`
const Border0 = styled.div`
  margin-left: ${styles.sizes.phone.dashboard}px;
  width: 1px;
  height: 100%;
  background: var(--border);
  opacity: 0;
`
const Border1 = styled.div`
  margin-left: calc(((100vw - ${styles.sizes.phone.dashboard * 2 + 4}px) / 3));
  width: 1px;
  height: 100%;
  background: var(--border);
  opacity: 0;
`

export default Mobile
