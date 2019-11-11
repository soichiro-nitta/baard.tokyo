import * as React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from '@emotion/styled'
import styles from '~/utils/styles'
import Filter from '~/components/base/Filter'
import Breadcrumbs from '~/components/base/Breadcrumbs'

type Props = {
  fluid: FluidObject | FluidObject[]
  icon: IconDefinition
  en: string
  ja: string
  crumbs: {
    to: string
    name: string
  }[]
  setIsPending: (isPending: boolean) => void
}

const HeaderImage: React.FC<Props> = props => {
  const onLoad = (): void => {
    props.setIsPending(false)
  }
  return (
    <Root>
      <Img fluid={props.fluid} onLoad={onLoad} />
      <Filter />
      <Content>
        <Flex>
          <FontAwesomeIcon icon={props.icon} />
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
  color: white;
`

export default HeaderImage
