import { createContainer } from 'unstated-next'
import { CurrentPage, useCurrentPage } from './currentPage'
import { Playing, usePlaying } from './playing'
import { IsPending, useIsPending } from './isPending'
import { Large, useLarge } from './large'
import { Colorscheme, useColorscheme } from './colorscheme'
import { Launched, useLaunched } from '~/store/global/launched'

type Global = () => {
  currentPage: CurrentPage
  playing: Playing
  isPending: IsPending
  large: Large
  colorscheme: Colorscheme
  launched: Launched
}

const global: Global = () => {
  const currentPage = useCurrentPage()
  const playing = usePlaying()
  const isPending = useIsPending()
  const large = useLarge()
  const colorscheme = useColorscheme()
  const launched = useLaunched()
  return {
    currentPage,
    playing,
    isPending,
    large,
    colorscheme,
    launched
  }
}

const container = createContainer(global)
const useGlobal = container.useContainer
const Provider = container.Provider

export { useGlobal, Provider }
