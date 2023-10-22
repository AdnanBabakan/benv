import { program } from 'commander'
import { registerCommands } from './register.js'

registerCommands(program)

program.parse()