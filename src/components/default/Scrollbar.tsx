import * as React from 'react'
import styled from '@emotion/styled'
import styles from '~/utils/styles'

const Scrollbar: React.FC = () => {
  const scrollbar = React.useRef(null)
  // React.useEffect(() => {
  //   const main = document.getElementById('main')
  //   const scrollMax = main.scrollHeight - main.clientHeight
  //   main.addEventListener('scroll', () => {
  //     scrollbar.current.style.transform = `scaleX(${main.scrollTop /
  //       scrollMax})`
  //   })
  // }, [location.pathname])
  return (
    <>
      <Bar1 />
      <Bar2 ref={scrollbar} />
    </>
  )
}

const Bar1 = styled.div`
  position: absolute;
  width: ${styles.sizes.phone.scrollbar}px;
  height: 2px;
  background: ${styles.colors.light.neutral};
  transform: none;
`
const Bar2 = styled(Bar1)`
  background: ${styles.colors.light.logo};
  transform: scaleX(0);
  transform-origin: left center;
`

export default Scrollbar
