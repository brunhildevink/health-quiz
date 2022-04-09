export const breakpointsNumerical = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1284,
  xxl: 1402,
  smMax: 639,
  mdMax: 767,
  lgMax: 1023,
  xlMax: 1283,
}

const xs = `(max-width: ${breakpointsNumerical.xs}px)`
const sm = `(min-width: ${breakpointsNumerical.sm}px)`
const md = `(min-width: ${breakpointsNumerical.md}px)`
const lg = `(min-width: ${breakpointsNumerical.lg}px)`
const xl = `(min-width: ${breakpointsNumerical.xl}px)`
const xxl = `(min-width: ${breakpointsNumerical.xxl}px)`
const smMax = `(max-width: ${breakpointsNumerical.smMax}px)`
const mdMax = `(max-width: ${breakpointsNumerical.mdMax}px)`
const lgMax = `(max-width: ${breakpointsNumerical.lgMax}px)`
const xlMax = `(max-width: ${breakpointsNumerical.xlMax}px)`

const breakpoints = {
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  smMax,
  mdMax,
  lgMax,
  xlMax,
}

export default breakpoints
