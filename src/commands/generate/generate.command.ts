import { Executable, Command, Option, Param } from '@orbital/core';

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
        @UseOptions(SomeOptions) options: SomeOptions
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