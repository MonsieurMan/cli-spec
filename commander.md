# Commander cli framework
[Commander github page](https://github.com/tj/commander.js).  
Project started in August 2011.  
Introduced [ruby commander](https://github.com/commander-rb/commander) functional style command description

## Features
* Versioning
* Help
   * Global help -- Can be overwritten
   * Command help
* Functional command description

## Usage
Command declaration :
```javascript  
program
  .version('0.1.0')
  .arguments('<cmd> [env]')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);
```

Output :
```sh
$ ./examples/pizza --help

   Usage: pizza [options]

   An application for pizzas ordering

   Options:

     -h, --help           output usage information
     -V, --version        output the version number
     -p, --peppers        Add peppers
     -P, --pineapple      Add pineapple
     -b, --bbq            Add bbq sauce
     -c, --cheese <type>  Add the specified type of cheese [marble]
     -C, --no-cheese      You do not want any cheese
```
