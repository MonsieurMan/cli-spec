import { bootstrap } from '@orbital/core';

import { NestCLI } from './nest.cli';

bootstrap(NestCLI)
   .execute(process.argv);