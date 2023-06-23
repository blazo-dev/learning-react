import { BUTTONS, NAVIGATION_EVENTS } from '../../utils/consts'

export function navigate (href) {
  window.history.pushState(null, null, href)
  const navigationEvent = new Event(NAVIGATION_EVENTS.pushState)
  window.dispatchEvent(navigationEvent)
}

export default function Link ({ target, href, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.primary
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isSelfTarget = target === undefined || target === '_self'

    if (isSelfTarget && isMainEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(href)
    }
  }

  return (
    <a onClick={handleClick} href={href} target={target} {...props} />
  )
}
