import { CLI, Executable } from '@orbital/core';

import { GenerateCommand } from './commands/generate/generate.command';
import { InfoCommand } from './commands/info.command';

@CLI({
   name: 'nest',
   version: '1.0.0', 
   commands: [
      GenerateCommand,
      InfoCommand
   ]
})
export class NestCLI implements Executable { 
   execute() {
      // Could also implement behavior for root command instead of just displaying the help like yarn
   }
}