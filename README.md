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
import { CLI, Executable } from '@cli/core';

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
export class NestCLI implements Executable { 
   execute() {
      // Could also implement behavior for root command instead of just displaying the help like yarn
   }
}
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

// WILSON HOBBS - probably a better structure
```typescript
/// generate/generate.command.ts
import { Executable, Command, Option, Param } from '@cli/core';

@Command({
   name: 'generate',
   // ... truncated
})
export class GenerateCommand implements Executable {

   @Option('help', {
      alias: 'h',
      help: 'Help text',
      validators: []
   })
   help: boolean;
   
   // OR!!!
     
   @Option({
      name: 'force',
      alias: 'f',
      help: 'Help text',
      validators: []
   })
   force: boolean;
   
   constructor(
      @UseOptions(SomeOptions) options: SomeOptions
   ) {}
      
   execute(
      @Param({
         validators: []
      }) url: string,
      @Param({
         required: false
      }) optional: string,
      // MrMan, my first idea
      @Option({
         // name: 'force', this can be retrieved with metadata 
         alias: 'f',
         // Would rather use description here
         // Other framework introduce a brief which is the one line
         // And a description which is, you guessed it, the long one.
         help: 'Help text',
         validators: []
      })
      force: boolean;
   ) {
      // implementation
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
   // WILSON HOBBS - I don't know that this is a possible way of using decorators.
   // Should we consider making all of them class-level decorators (like @Input() and @Output()
   // in Angular? 
   get timeoutInSeconds(): number {
      return this.timeout / 1000;
   }
}
```  

And finally :
```typescript
/// main.ts
import { bootstrap } from '@cli/core';

import { NestCLI } from './nest.cli';

bootstrap(NestCLI)
   .execute(process.argv);
```
