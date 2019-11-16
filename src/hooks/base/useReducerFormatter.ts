import * as React from 'react'

type UseReducerFormatter = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reducer: (state: any, action: any) => any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialState: any,
  initializer?: undefined
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  state: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: React.Dispatch<any>
}

const useReducerFormatter: UseReducerFormatter = (
  reducer,
  initialArg,
  initializer
) => {
  const [state, dispatch] = React.useReducer(reducer, initialArg, initializer)
  return { state, dispatch }
}

export default useReducerFormatter
