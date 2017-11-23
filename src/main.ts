import { bootstrap } from '@cli/core';

import { NestCLI } from './nest.cli';

bootstrap(NestCLI)
   .execute(process.argv);