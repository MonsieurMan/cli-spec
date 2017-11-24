import { Option, Options } from '@orbital/core';

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
