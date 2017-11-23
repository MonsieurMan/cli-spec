# Nodejs CLI state of the art
### Existing solutions  
* [Vorpal](./vorpal.md)
* [Clime](./clime.md)
* [Caporal](./caporal.md)
* [Commander](./commander.md)

### Extracted features
* Versioning
* Typo suggestion
* Argument 
   * Validation 
   * Casting
   * Variadic array / list
   * Subcommands
   * Option
      * Default value
      * Description 
      * Validator
      * Required
      * -rf or -r -f
* Help generation
   * Global 
   * Command
   * Overridable
* Colors
* Aliases
* Autocomplete
* i18n generation

### Design ideas
* CLI for the CLI framework
   * Help scaffolding a project using the framework
   * Demonstrate best practices on how to use the framework
   * Can make the commands follow directory tree without enforcing it
   * Automatically add unit test for each commands
* Testable *(see above)*
   * Use DI for commands for easier mock
* Tslint rules
   * Command decorator parameter order
   * @Command() decorated class should provide execute method
* Prompt support

### Example usage
Program :
```typescript
import { CLI } from '@tli/core';

import { MyCommand } from './my-command';
import { SomeOtherCommand } from './SomeOtherCommand';

@CLI({
   // Not sure about this one
   name: 'myCli',
   // Maybe add this one automatically from package.json ?
   version: [ 1, 0, 0 ] || '1.0.0', 
   commands: [
      MyCommand,
      SomeOtherCommand
   ],
   // Optional
   help: '',

})
export class MyCli { }
```

A command :
```typescript
import { CommandMetadata, Command, Logger, Option, Param } from '@tli/core';

import { SubCommand } from './sub-command';

@CommandMetadata({
   name: 'generate',
   aliases: ['g'],
   description: 'Generates a new domain object',
})
export class MyCommand extends Command {
   constructor(
      private logger: Logger
   ) { }

   execute(
      @Param({
         name: url,
         help: '',
         validators: []
      }) url: string,
      @Option({
         selectors: ['r', 'reuse'],

      })
   ) {
      this.logger.info('Wowo');
   }
}
```