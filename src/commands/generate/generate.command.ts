import { Executable, Command, Option, Param, UseOptions } from '@orbital/core';

import { GenerateOptions } from './generate.options';

import { ServiceCommand } from './service/service.command';

@Command({
    name: 'generate',
    aliases: ['g'],
    description: 'Generates a new domain object',
    // Or subcommands ?
    commands: [
        ServiceCommand
    ]
})
export class GenerateCommand implements Executable {
    constructor(
        @UseOptions(GenerateOptions) options: GenerateOptions
    ) { }

    execute(
        @Param({
            validators: []
        }) url: string,
        @Param({
            required: false
        }) optional: string,

    ) {
        // implementation
    }
}