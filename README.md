### Features (trying to be exhaustive)
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
/// nest.cli.ts
import { CLI } from '@cli/core';

import { GenerateCommand } from './generate/generate.command';
import { InfoCommand } from './info.command';

@CLI({
   name: 'nest',
   version: '1.0.0', 
   commands: [
      GenerateCommand,
      InfoCommand
   ]
})
export class Nest { }
```

A command :
```typescript
/// generate/generate.command.ts
import { Executable, Command, Option, Param } from '@cli/core';

import { SomeOptions } from './generate.options':

import { SubCommand } from './sub.command';

@Command({
   name: 'generate',
   aliases: ['g'],
   description: 'Generates a new domain object',
   // Or subcommands ?
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
/// generate/generate.options.ts
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

And finally :
```typescript
/// main.ts
import { bootstrap } from '@cli/core';

import { Nest } from './nest.cli';

bootstrap(Nest)
   .execute(process.argv);
```