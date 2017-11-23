# CLI API design  
This repo contains a sketch of what we would consider as an ideal API for a CLI framework for node.
It's core ideas come from the really good [clime framework](https://github.com/vilic/clime).

## Features (trying to be exhaustive)
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
