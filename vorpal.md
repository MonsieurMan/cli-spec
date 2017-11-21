# Vorpal cli framework
[Vorpal home github page](https://github.com/dthree/vorpal)  
Project started august 2015  
Unlike others this one **create a prompt** used until the user types exit. Uses a "delimiter" to tell the user he's using the cli (see below `myapp~$`).

## Features
* Help
* Alias
* Autocomplete
* Mode and delimiters

## Usage
The following code
```typescript
const vorpal = require('vorpal')();

vorpal
  .command('foo', 'Outputs "bar".')
  .action(function(args, callback) {
    this.log('bar');
    callback();
  });

vorpal
  .delimiter('myapp$')
  .show();
```
creates the corresponding program
```sh
myapp~$ help

  Commands

    help [command]    Provides help for a given command.
    exit [options]    Exits instance of Vorpal.
    foo               Outputs "bar".

myapp~$
```