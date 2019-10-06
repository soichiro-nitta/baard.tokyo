import * as React from 'react'
import styled from '~/utils/emotion'

const Scrollbar: React.FC = () => {
  const scrollbar = React.useRef(null)
  React.useEffect(() => {
    const main = document.getElementById('main')
    const scrollMax = main.scrollHeight - main.clientHeight
    main.addEventListener('scroll', () => {
      scrollbar.current.style.transform = `scaleX(${main.scrollTop /
        scrollMax})`
    })
  })
  return (
    <>
      <Bar1 />
      <Bar2 ref={scrollbar} />
    </>
  )
}

const Bar1 = styled.div`
  position: absolute;
  width: ${(props): number => props.theme.sizes.phone.scrollbar}px;
  height: 2px;
  background: ${(props): string => props.theme.colors.light.neutral};
  transform: none;
`
const Bar2 = styled(Bar1)`
  background: ${(props): string => props.theme.colors.light.logo};
  transform: scaleX(0);
  transform-origin: left center;
`

export default Scrollbar
