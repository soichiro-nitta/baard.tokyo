import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-duotone-svg-icons'
import styles from '~/utils/styles'
import { Playing } from '~/store/global/playing'
import Video from '~/components/base/Video'
import { css } from '@emotion/core'
import config from '~/utils/config'
import { IsPending } from '~/store/global/isPending'

type Props = {
  playing: Playing
  isPending: IsPending
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
          src={props.src}
          rootMargin="-40% 0%"
        />
      </ImgWrapper>
      <Content>
        <Head>
          {config.pages[props.page].en}
          <FontAwesomeIcon icon={config.pages[props.page].icon} />
        </Head>
        <Body>{props.body}</Body>
        <Button to={config.pages[props.page].path}>
          詳しくみる
          <FontAwesomeIcon icon={faLongArrowRight} />
        </Button>
      </Content>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  margin-left: ${styles.sizes.phone.base}px;
  width: calc(100% - ${styles.sizes.phone.base}px);
  height: calc(105vw + ${styles.sizes.phone.base}px);
  color: white;
  ${styles.large(css`
    height: ${styles.sizes.desktop.main * 1.05 + styles.sizes.phone.base()}px;
  `)}
`
const Background = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: calc(
    100% - ${styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar}px
  );
  height: calc(100% - ${styles.sizes.phone.base}px);
  background: ${styles.colors.light.shape};
`
const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: calc(
    100% - ${styles.sizes.phone.dashboard - styles.sizes.phone.scrollbar}px
  );
  height: calc(100% - ${styles.sizes.phone.base}px);
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: ${styles.sizes.phone.base}px;
  width: calc(100% - ${styles.sizes.phone.base() * 4}px);
  height: 100%;
  span {
    background: Pink;
  }
`
const Head = styled.div`
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
  display: inline-block;
  margin-top: ${styles.sizes.phone.base}px;
  padding: 10px;
  line-height: 1;
  border: 1px solid ${styles.colors.light.neutral};
  svg {
    margin-left: 7.5px;
  }
`

export default Left
