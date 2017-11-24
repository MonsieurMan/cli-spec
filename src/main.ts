import { OrbitalFactory } from '@orbital/core';

import { NestCLI } from './nest.cli';

const cli = OrbitalFactory.bootstrap(NestCLI);
cli.execute(process.argv);
