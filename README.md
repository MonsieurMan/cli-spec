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
import { Cli } from '@tli/core';

import { MyCommand } from './my-command';
import { SomeOtherCommand } from './SomeOtherCommand';

@Cli({
   // Not sure about this one
   name: 'myCli',
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
import { Command, Logger } from '@tli/core';

import { SubCommand } from './sub-command';

@Command({
   name: 'generate',
   aliases: ['g'],
   description: 'Generates a new domain object',
   arguments: [
      {
         name: ''
      }
   ],
   options: [
      {

      }
   ]
   // Or 
   subCommands: [
      SubCommand
   ]
})
export class MyCommand {
   constructor(
      private logger: Logger
   ) { }

   // Clime solution provides a way to have typed compile time param and parsed at runtime
   // Need more investigation on this one
   execute() {

   }
}
```