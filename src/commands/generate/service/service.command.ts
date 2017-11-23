import { Executable, Command, Option, Param } from '@orbital/core';

@Command({
    name: 'generate',
    aliases: ['g'],
    description: 'Generates a new service',
})
export class ServiceCommand implements Executable {

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