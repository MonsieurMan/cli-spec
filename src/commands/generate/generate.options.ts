import { Options, Option } from '@cli/core';

export class GenerateOptions extends Options {
   @Option({
      flag: 't',
      description: 'timeout that does nothing',
   })
   timeout: number;
   
   get timeoutInSeconds(): number {
      return this.timeout / 1000;
   }
}