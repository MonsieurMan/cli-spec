### Features
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

### Example usage
Program :
```typescript
import { CLI } from '@cli/core';

import { MyCommand } from './my.command';
import { GenerateCommand } from './generate.command';
import { InfoCommand } from './info.command';

@CLI({
   name: 'nest',
   version: '1.0.0', 
   commands: [
      GenerateCommand,
      InfoCommand
   ]
})
export class MyCli { }
```

A command :
```typescript
import { Executable, Command, Option, Param } from '@cli/core';

import { SomeOptions } from './generate.options':

import { SubCommand } from './sub.command';

@Command({
   name: 'generate',
   aliases: ['g'],
   description: 'Generates a new domain object',
   commands: [
      SubCommand
   ]
})
export class GenerateCommand implements Executable {
   execute(
      @Param({
         validators: []
      }) url: string,
      @Param({
         required: false
      }) optional: string,
      options: SomeOptions
   ) {
      this.logger.info('Wowo');
   }
}
```

```typescript
import { Options, Option } from '@cli/core';

export class SomeOptions extends Options {
   @Option({
      flag: 't',
      description: 'timeout that does nothing',
   })
   timeout: number;

   get timeoutInSeconds(): number {
      return this.timeout / 1000;
   }
}
```