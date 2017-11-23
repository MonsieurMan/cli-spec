import { Command } from '@orbital/core';

@Command({
    name: 'info',
    aliases: ['i'],
    brief: 'Displays information about the current project',
    description: `
    qsdf 
    sdfq sqdf 
     qsdfq qsdf
      sqdf
      qsdf
    `
})
export class InfoCommand implements Executable {
    execute() {
        // implementation
    }
}