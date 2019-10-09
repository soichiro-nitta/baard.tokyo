import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import config from '~/utils/config'
import styled from '~/utils/emotion'

const Humberger: React.FC = () => {
  return (
    <Root>
      <Footer>
        <Text>© {new Date().getFullYear()}, BAARD Barber.</Text>
        <Icons>
          <Icon
            href={config.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </Icon>
          <Icon
            href={config.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Icon>
        </Icons>
      </Footer>
    </Root>
  )
}

const Root = styled.div`
  border-top: 1px solid ${(props): string => props.theme.colors.light.border};
  border-bottom: 1px solid ${(props): string => props.theme.colors.light.border};
`
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${(props): number =>
      (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
      2}px
    0;
  padding: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  width: calc(
    100% -
      ${(props): number =>
        (props.theme.sizes.phone.dashboard -
          props.theme.sizes.phone.scrollbar) /
        2}px
  );
  color: white;
  line-height: 1;
  background: ${(props): string => props.theme.colors.light.shape};
`
const Text = styled.div``
const Icons = styled.div``
const Icon = styled.a`
  margin-left: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  font-size: 16px;
`

export default Humberger
