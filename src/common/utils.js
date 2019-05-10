import loadable from '@loadable/component'
import Loading from "../components/Loading"

export const dynamicWrap = func => loadable(func, {
  fallback: <Loading />,
})
