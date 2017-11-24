import { CLI, Executable } from '@orbital/core';

import { GenerateCommand } from './commands/generate/generate.command';
import { InfoCommand } from './commands/info.command';

@CLI({
   name: 'nest',
   version: '1.0.0', // optional, should read from package.json otherwise
   commands: [
      GenerateCommand,
      InfoCommand
   ],
   providers: [], // for DI if necessary? Discuss
})
export class NestCLI implements Executable {
   execute() {
      // Could also implement behavior for root command instead of just displaying the help like yarn

      // WILSON HOBBS says +1 to the root command
   }
}
