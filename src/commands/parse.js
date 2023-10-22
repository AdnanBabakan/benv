import chalk from 'chalk'
import { cwd } from 'process'
import fs from 'fs'
import { parseBenv } from '../parser/parser.js'

export const parse = async (file = '.benv') => {
  console.log(chalk.blue(`Parsing [${file}]...`))
  console.log(chalk.blue(`Current working directory: ${cwd()}`))

  let fileContent

  try {
    fileContent = fs.readFileSync(file, 'utf8')
  } catch (err) {
    console.log(chalk.red('Error: File not found.'))
  }

  console.log(chalk.green('File loaded successfully.'))

  console.log(JSON.stringify(parseBenv(fileContent), null, 4))
}