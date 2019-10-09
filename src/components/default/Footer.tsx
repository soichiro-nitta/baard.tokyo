import * as React from 'react'
import styled from '~/utils/emotion'

const Humberger: React.FC = () => {
  return (
    <Root>
      <Footer>© {new Date().getFullYear()}, BAARD Barber.</Footer>
    </Root>
  )
}

const Root = styled.div`
  border-top: 1px solid ${(props): string => props.theme.colors.light.border};
  border-bottom: 1px solid ${(props): string => props.theme.colors.light.border};
`
const Footer = styled.div`
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

export default Humberger
