import { Argument, Command, Executable, Option, UseOptions, VariadicArgument } from '@orbital/core';

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

    // PROPOSAL 1
    @Option('foo', {
        alias: 'f',
        help: '',
        validators: []
    })
    name: string;

    // PROPOSAL 2
    @Option({
        name: 'bar',
        alias: 'b',
        help: '',
        validators: []
    })
    item: string;

    constructor(
        // Only if you want to inherit options
        @UseOptions(GenerateOptions) options: GenerateOptions
    ) { }

    execute(
        // Another idea is to call them Argument, since that's what they really are
        @Argument({
            validators: []
        }) url: string,
        @Argument({
            required: false
        }) optional: string,

        /*  VARIADICS!! */
        // Proposal 1
        @Argument({
            variadic: true
        }) car: string[],
        // Proposal 2
        @VariadicArgument() foo: string[],

    ) {
        // implementation
    }
}
