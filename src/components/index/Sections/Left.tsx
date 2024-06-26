import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import { Playing } from '~/store/global/playing'
import Video from '~/components/base/Video'
import { css } from '@emotion/core'
import config from '~/utils/config'
import { IsPending } from '~/store/global/isPending'
import { Launched } from '~/store/global/launched'
import { ArrowRight, Home, MapPinned, MenuSquare, Scissors } from 'lucide-react'

type Props = {
  playing: Playing
  isPending: IsPending
  launched: Launched
  page: string
  src: string
  body: string
}

const Left: React.FC<Props> = props => {
  return (
    <Root>
      <Background />
      <ImgWrapper>
        <Video
          playing={props.playing}
          isPending={props.isPending}
          launched={props.launched}
          src={props.src}
          rootMargin="-40% 0%"
        />
      </ImgWrapper>
      <Content>
        <Head>
          <div>{config.pages[props.page].en}</div>
          {config.pages[props.page].path === '/' && (
            <Home style={{ width: '16px' }} strokeWidth={2.5} />
          )}
          {config.pages[props.page].path === '/salon/' && (
            <Scissors style={{ width: '16px' }} strokeWidth={2.5} />
          )}
          {config.pages[props.page].path === '/service/' && (
            <MenuSquare style={{ width: '16px' }} strokeWidth={2.5} />
          )}
          {config.pages[props.page].path === '/access/' && (
            <MapPinned style={{ width: '16px' }} strokeWidth={2.5} />
          )}
        </Head>
        <Body>{props.body}</Body>
        <Button to={config.pages[props.page].path}>
          詳しくみる
          <ArrowRight style={{ width: '16px' }} strokeWidth={3} />
        </Button>
      </Content>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  width: calc(100% - ${styles.sizes.phone.base}px);
  height: calc(105vw + ${styles.sizes.phone.base}px);
  color: var(--onPicture);
  ${styles.large(css`
    height: ${styles.sizes.desktop.main * 1.05 + styles.sizes.phone.base()}px;
  `)}
`
const Background = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: calc(
    100% - ${styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar}px
  );
  height: calc(100% - ${styles.sizes.phone.base}px);
  background: var(--brand);
`
const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(
    100% - ${styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar}px
  );
  height: calc(100% - ${styles.sizes.phone.base}px);
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  top: 0;
  right: ${styles.sizes.phone.base}px;
  width: calc(100% - ${styles.sizes.phone.base() * 4}px);
  height: 100%;
  text-align: right;
`
const Head = styled.div`
  display: flex !important;
  align-items: center;
  font-size: 2.2rem;
  font-weight: bold;
  letter-spacing: 0.33em;
  ${styles.mixins.lhCrop(1.8)}
  svg {
    margin-left: 7.5px;
  }
`
const Body = styled.div`
  margin-top: ${styles.sizes.phone.base}px;
  font-size: 1.2rem;
  ${styles.mixins.lhCrop(2)}
`
const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-top: ${styles.sizes.phone.base}px;
  padding: 10px;
  line-height: 1;
  border: 1px solid var(--onPictureShape);
  svg {
    margin-left: 7.5px;
  }
`

export default Left
