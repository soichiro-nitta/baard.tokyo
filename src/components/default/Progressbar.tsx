import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import { IsPending } from '~/store/global/isPending'
import useInOut from '~/hooks/default/Progressbar/useInOut'

type Props = {
  isPending: IsPending
}

const Progressbar: React.FC<Props> = props => {
  const root = React.useRef<HTMLDivElement>(null)
  useInOut({ isPending: props.isPending, root })
  return <Root ref={root} />
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  background: ${styles.colors.light.logo};
`

export default Progressbar
