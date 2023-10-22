export const trim = (str, left = true, right = true) => {
  if (left) {
    str = str.replace(/^\s+/, '')
  }

  if (right) {
    str = str.replace(/\s+$/, '')
  }

  return str
}

export const trimByChar = (str, char, left = true, right = true) => {
  if (left) {
    str = str.replace(new RegExp(`^\\${char}+`), '')
  }

  if (right) {
    str = str.replace(new RegExp(`\\${char}+$`), '')
  }

  return str
}