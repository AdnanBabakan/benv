import { trim, trimByChar } from '../utils/string.js'

export const parseBenv = data => {
  const lines = data.split(/\n/gi)
  const chunks = []

  const skipLines = []

  for(let i = 0; i <= lines.length; i++) {
    const v = lines[i]
    if(skipLines.includes(i)) continue
    if(!v) continue

    let chunk = v.split('=').map(c => trim(c))

    if (chunk.length > 1) {

      if (chunk[1].startsWith('{')) {
        let temp = ''

        for (let j = i; j <= lines.length; j++) {
          temp += lines[j]
          skipLines.push(j)

          if (lines[j].endsWith('}')) {
            break
          }
        }

        let [key, ...valueToParse] = temp.split('=')
        valueToParse = valueToParse.join('=')
        valueToParse = trimByChar(valueToParse, '{', true, false)
        valueToParse = trimByChar(valueToParse, '}', false, true)
        valueToParse = trim(valueToParse)

        chunks.push({
          type: 'group',
          data: {
            key: chunk[0],
            value: parseBenv(valueToParse)
          }
        })
      } else {
        chunks.push({
          type: 'key-value',
          data: {
            key: chunk[0],
            value: chunk[1]
          }
        })
      }
    }
  }

  return chunks
}