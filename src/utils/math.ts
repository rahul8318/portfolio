export const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor

export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}

export const formatNumber = (num: number): string => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k"
  }
  return num.toString()
}
