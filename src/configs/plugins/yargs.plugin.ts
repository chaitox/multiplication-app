

import yargs, { option } from 'yargs';
import {hideBin} from 'yargs/helpers';



export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        describe: 'Es la base de la tabla de multiplicar',
        type: 'number',
        demandOption: true
    },)
    .option('l', {
        alias: 'limite',
        describe: 'Limite de la tabla de multiplicar',
        type: 'number',
        default: 5
    },)
    .option('s',{
        alias: 'show',
        describe: 'Muestra la tabla de multiplicar en consola',
        type: 'boolean',
        default: false
    })
    .option('n',{
        alias: 'name',
        type: 'string',
        default: 'table',
        describe:'File name'
    })
    .option('d',{
        alias:'destination',
        type: 'string',
        default: './outputs',
        describe:'Path to save the file'
    })
    .check((argv, options) => {
        if (argv.b<1)  throw 'La base debe ser mayor a 0';
        
        return true;
    })
    .parseSync();

