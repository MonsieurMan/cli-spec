import { Parameter, OptionalParameter, Command, Executable, Option, UseOptions, VariadicParameter } from '@orbital/core';

import { GenerateOptions } from './generate.options';

import { ServiceCommand } from './service/service.command';

@Command({
    name: 'generate',
    aliases: ['g'],
    brief: '', // One line description
    description: 'Generates a new domain object',
    subCommands: [
        ServiceCommand
    ]
})
export class GenerateCommand implements Executable {

    @Option({
        name: 'bar', // Optional, can be infered while decorating with metadata
        flag: 'b',
        brief: '',
        description: '',
        validators: []
    })
    bar: string;

    constructor(
        @UseOptions(GenerateOptions) private options: GenerateOptions
    ) { }

    execute(
        @Parameter({
            brief: '',
            description: '',
            validators: []
        }) url: URL, 
        // Clime has an excellent casting features which casts parameters from string if they implement StringCastable

        // By the way, it is not possible to resolve an optional parameter along with a variadic one right ?
        // Maybe if they're supposed to be of different types but it makes things complicated.
        @OptionalParameter({
            brief: '',
            description: '',
            validators: []
        }) optional: string,
        @VariadicParameter({
            validators: []
        }) foo: string[]
    ) {
        if (this.options.timeout >= 20) {

        }
    }
}