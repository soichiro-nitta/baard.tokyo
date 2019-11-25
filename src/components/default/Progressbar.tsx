import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import { IsPending } from '~/store/global/isPending'
import { useLocal } from '~/store/default/Progressbar'
import useIn from '~/hooks/default/Progressbar/useIn'
import useOut from '~/hooks/default/Progressbar/useOut'

type Props = {
  isPending: IsPending
}

const Progressbar: React.FC<Props> = props => {
  const local = useLocal()
  const root = React.useRef<HTMLDivElement>(null)
  useIn({
    isPending: props.isPending,
    stretched: local.stretched,
    root
  })
  useOut({
    isPending: props.isPending,
    stretched: local.stretched,
    root
  })
  return <Root ref={root} />
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  background: ${styles.colors.light.logo};
  transform: scaleX(0);
  opacity: 0;
`

export default Progressbar