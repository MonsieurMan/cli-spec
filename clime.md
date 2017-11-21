# Clime cli framework
[Clime home github page](https://github.com/vilic/clime/)   
Project started in February 2016  
Defines commands and subcommands tree using the **directory tree**.  
Introduced **decorators** for command metadata and params.

```typescript
import * as Path from 'path';
import { CLI, Shim } from 'clime';

// The second parameter is the path to folder that contains command modules.
let cli = new CLI('greet', Path.join(__dirname, 'commands'));

// Clime in its core provides an object-based command-line infrastructure.
// To have it work as a common CLI, a shim needs to be applied:
let shim = new Shim(cli);
shim.execute(process.argv);
```
## Features
* File path based multi-level subcommands
* Argument
   * Typed at compile time
   * Casted at runtime
* Subcommands
* Easily testable, core not coupled to stream based cl

## Usage
```typescript
import {
  Command,
  command,
  param,
} from 'clime';

// I hate the fact that we have to add decorator and extend a class
// I find it disgusting that there is command and Command also
@command({
  description: 'This is a command for printing a greeting message',
})
export default class extends Command {
  execute(
    @param({
      description: 'Your loud name',
      required: true,
    })
    name: string,
  ) {
    return `Hello, ${name}!`;
  }
}
```