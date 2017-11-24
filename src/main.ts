import { NestCLI } from './nest.cli';
import { OrbitalFactory } from '@orbital/core';

let cli = OrbitalFactory.bootstrap(NestCLI);
cli.execute(process.argv);

// WILSON HOBBS - this way, we can add additional options, functions, and params down the line.
