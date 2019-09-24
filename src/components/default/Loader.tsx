import * as React from 'react'
import styled from '~/utils/emotion'

const Loader: React.FC = () => {
  return (
    <Root viewBox="25 25 50 50">
      <Circle cx="50" cy="50" r="20" />
    </Root>
  )
}

const Root = styled.svg`
  width: ${(props): number => props.theme.sizes.phone.scrollbar + 2}px;
  height: ${(props): number => props.theme.sizes.phone.scrollbar + 2}px;
  transform-origin: center center;
  animation: rotate 1.2s linear infinite;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`
const Circle = styled.circle`
  fill: none;
  stroke-width: 5;
  stroke-dasharray: 150, 200;
  stroke-dashoffset: -10;
  animation: dash 0.9s ease-in-out infinite;
  stroke: #555;
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
`

export default Loader
