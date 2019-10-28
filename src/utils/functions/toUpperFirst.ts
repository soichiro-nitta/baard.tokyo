const toUpperFirst = (text: string): string => {
  return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`
}

export default toUpperFirst
