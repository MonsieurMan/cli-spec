import { CLI, Executable } from '@orbital/core';

import { GenerateCommand } from './commands/generate/generate.command';
import { InfoCommand } from './commands/info.command';

@CLI({
   name: 'nest',
   version: '1.0.0', // Should read from package.json !!
   commands: [
      GenerateCommand,
      InfoCommand
   ]
})
export class NestCLI implements Executable {
   execute() { }
}
