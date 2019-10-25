import * as React from 'react'
import { createContainer } from 'unstated-next'

type StoreTypes = {
  count: number
  add: (amount: number) => void
  reset: () => void
}

const store = (): StoreTypes => {
  const [count, setCount] = React.useState<number>(0)

  /**
   * カウンタを加算する
   * @param amount 加算する量
   */
  const add = (amount: number): void => {
    setCount(count => count + amount)
  }

  /**
   * カウンタをリセットする
   */
  const reset = (): void => {
    setCount(0)
  }

  return { count, add, reset }
}

const container = createContainer(store)
const useStore = container.useContainer
const Provider = container.Provider

export { useStore, Provider }
