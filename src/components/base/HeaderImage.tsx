import * as React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import functions from '~/utils/functions'
import Breadcrumbs from '~/components/base/Breadcrumbs'

type Props = {
  fluid: FluidObject | FluidObject[]
  icon: IconDefinition
  eng: string
  ja: string
  crumbs: {
    to: string
    name: string
  }[]
}

const HeaderImage: React.FC<Props> = props => {
  return (
    <Root>
      <Img fluid={props.fluid} />
      <Content>
        <Flex>
          <FontAwesomeIcon icon={props.icon} />
          <Text>
            <Eng>ACCESS</Eng>
            <Ja>アクセス</Ja>
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
  ${styles.mixins.relative}
  width: 100%;
  height: 105vw;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
  color: white;
  font-size: 2.2rem;
  line-height: 1;
  background: rgba(${functions.hex2rgb(styles.colors.light.shape)}, 0.3);
`
const Flex = styled.div`
  display: flex;
  align-items: center;
`
const Text = styled.div`
  margin-left: 15px;
`
const Eng = styled.div`
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
  color: white;
`

export default HeaderImage
