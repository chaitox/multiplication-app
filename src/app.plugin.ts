
import fs from 'fs';
import { yarg } from './configs/plugins/yargs.plugin';


let outputMessage: string = '';
const base: number = yarg.b;
const headermessage =`
=================================
        Tabla del: ${base}
=================================\n`



for (let i = 0; i < yarg.l; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
  
    
}

outputMessage= headermessage + outputMessage;

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true }); 
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);

if (yarg.s) console.log(outputMessage);