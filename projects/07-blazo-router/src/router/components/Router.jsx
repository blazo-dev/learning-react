import { useState, useEffect, Children } from 'react'
import { NAVIGATION_EVENTS } from '../../utils/consts'
import { match } from 'path-to-regexp'

export default function Router ({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
  children
}) {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname)

  useEffect(() => {
    const onNavigation = () => {
      setCurrentRoute(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENTS.pushState, onNavigation)
    window.addEventListener(NAVIGATION_EVENTS.popState, onNavigation)

    return () => {
      window.removeEventListener(NAVIGATION_EVENTS.pushState, onNavigation)
      window.removeEventListener(NAVIGATION_EVENTS.popState, onNavigation)
    }
  }, [])

  let routeParams = {}

  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRouteComponent = name === 'Route'
    return isRouteComponent ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren)

  const Page = routesToUse.find(({ path }) => {
    if (path === currentRoute) return true

    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matchResult = matcherUrl(currentRoute)

    if (!matchResult) return false

    routeParams = matchResult.params
    return true
  })?.Component

  return Page
    ? (
      <Page routeParams={routeParams} />
      )
    : (
      <DefaultComponent routeParams={routeParams} />
      )
}
