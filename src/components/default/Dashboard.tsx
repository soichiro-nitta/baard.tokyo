import * as React from 'react'
import { Link } from 'gatsby'
import styled from '~/utils/emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faCut,
  faClipboardList,
  faMapMarkedAlt,
  faFillDrip,
  faVolumeSlash
} from '@fortawesome/pro-duotone-svg-icons'

const Dashboard: React.FC = () => (
  <>
    <Icon to="/">
      <FontAwesomeIcon icon={faHome} />
    </Icon>
    <Icon to="/salon">
      <FontAwesomeIcon icon={faCut} />
    </Icon>
    <Icon to="/service">
      <FontAwesomeIcon icon={faClipboardList} />
    </Icon>
    <Icon to="/access">
      <FontAwesomeIcon icon={faMapMarkedAlt} />
    </Icon>
    <Border />
    <Icon to="/">
      <FontAwesomeIcon icon={faFillDrip} />
    </Icon>
    <Icon to="/">
      <FontAwesomeIcon icon={faVolumeSlash} />
    </Icon>
  </>
)

const Icon = styled(Link)`
  display: block;
  :not(:first-of-type) {
    margin-top: ${(props): number =>
      ((props.theme.sizes.phone.dashboard - 30) / 2 + 5) * 2}px;
  }
  width: 100%;
  height: 16px;
  text-align: center;
  overflow: hidden;
  svg {
    color: ${(props): string => props.theme.colors.light.logo};
    font-size: 16px;
    height: 16px;
    vertical-align: top;
  }
`
const Border = styled.div`
  margin: ${(props): number =>
      ((props.theme.sizes.phone.dashboard - 30) / 2 + 5) * 2}px
    auto 0;
  width: 100%;
  height: 1px;
  background: ${(props): string => props.theme.colors.light.border};
`

export default Dashboard
