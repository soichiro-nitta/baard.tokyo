import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import { Playing } from '~/store/global/playing'
import Video from '~/components/base/Video'
import Breadcrumbs from '~/components/base/Breadcrumbs'
import { css } from '@emotion/core'
import { IsPending } from '~/store/global/isPending'
import { Launched } from '~/store/global/launched'

type Props = {
  playing: Playing
  isPending: IsPending
  launched: Launched
  en: string
  ja: string
  src: string
  crumbs: {
    to: string
    name: string
  }[]
  children?: React.ReactNode
}

const Header: React.FC<Props> = props => {
  return (
    <Root>
      <Video
        playing={props.playing}
        isPending={props.isPending}
        launched={props.launched}
        src={props.src}
      />
      <Content>
        <Flex>
          {props.children}
          <Text>
            <En>{props.en}</En>
            <Ja>{props.ja}</Ja>
          </Text>
        </Flex>
      </Content>
      <BreadcrumbsWrapper>
        <Breadcrumbs crumbs={props.crumbs} />
      </BreadcrumbsWrapper>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  width: 100%;
  height: calc((100vw - ${styles.sizes.phone.dashboard + 1}px) * 1.25);
  color: var(--onPicture);
  ${styles.large(css`
    height: ${styles.sizes.desktop.main * 1.185}px;
  `)}
`
const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  padding-left: ${styles.sizes.phone.base}px;
  width: 100%;
  height: 100%;
  font-size: 2.2rem;
  line-height: 1;
`
const Flex = styled.div`
  display: flex;
  align-items: center;
`
const Text = styled.div`
  margin-left: ${styles.sizes.phone.base}px;
`
const En = styled.div`
  font-weight: bold;
  letter-spacing: 0.33em;
`
const Ja = styled.div`
  margin-top: 7.5px;
  font-size: 1.2rem;
  letter-spacing: 0.33em;
`
const BreadcrumbsWrapper = styled.div`
  position: absolute;
  bottom: ${styles.sizes.phone.base}px;
  margin-left: ${styles.sizes.phone.base}px;
`

export default Header
