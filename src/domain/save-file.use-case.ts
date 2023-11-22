import fs from 'fs';
export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options{
    path?: string;
    content: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase{
    constructor(
        /**
         * DI - Dependency Injection
         */
    ){}
    execute({
        path='outputs', 
        content, 
        fileName='table'
    }:Options):boolean{
        try {
             fs.mkdirSync(path, { recursive: true }); 
        fs.writeFileSync(`${path}/tabla-${fileName}.txt`, content);

        return true;
        } catch (error) {
            console.error(error);
            return false;
        }
       
    }
}