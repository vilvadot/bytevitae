const size = {
  mobile: '(max-width: 425px)',
  tablet: '(min-width: 768px)',
  laptop: '(min-width: 1024px)',
  desktop: '(min-width: 2560px)',
}

const applyBreakpointStyles = (breakpoint, styles) => {
  const deviceBreakpoint = size[breakpoint]

  if (!deviceBreakpoint) {
    throw new Error('Missing breakpoint')
  }

  return `@media ${deviceBreakpoint} {
    ${styles}
  }`
}

export const isMobile = window.innerWidth < 425

const media = {
  mobile: styles => applyBreakpointStyles('mobile', styles.raw[0]),
  tablet: styles => applyBreakpointStyles('tablet', styles.raw[0]),
  laptop: styles => applyBreakpointStyles('laptop', styles.raw[0]),
  desktop: styles => applyBreakpointStyles('desktop', styles.raw[0]),
}

export default media
