import { parse } from './commands/parse.js'

export const registerCommands = (program) => {
  program
    .command('p')
    .arguments('[file]', 'Address of the file to parse, defaults to .benv')
    .description('Parse benv file to env file')
    .action(parse)
}