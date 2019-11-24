import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import { IsPending } from '~/store/global/isPending'
import useIn from '~/hooks/default/Progressbar2/useIn'

type Props = {
  isPending: IsPending
}

const Progressbar: React.FC<Props> = props => {
  const root = React.useRef<HTMLDivElement>(null)
  useIn({ isPending: props.isPending, root })
  return <Root ref={root} />
}

const Root = styled.div`
  width: 50%;
  height: 100%;
  background: ${styles.colors.light.logo};
  /* transform: scaleX(0); */
  opacity: 0;
`

export default Progressbar
