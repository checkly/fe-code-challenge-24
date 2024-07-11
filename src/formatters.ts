export function pascalCase(text: string) {
  if (typeof text !== 'string') {
    return ''
  }

  return text
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('')
    .split('/')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('')
}

export function formatSuccessValue(value: number): string {
  return Math.round(value * 100) + '%'
}

export function formatResponseTimeValue(value: number): string {
  return Math.round(value) + 'ms'
}
