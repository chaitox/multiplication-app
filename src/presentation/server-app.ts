import { SaveFile } from "../domain/save-file.use-case";
import { CreateTable } from "../domain/use-cases/create-table.use-case";

interface runOptions{
    base: number;
    limit: number;
    showTable: boolean;
    destination?: string;
    name?: string;
}

export class ServerApp{



    static run(opttions: runOptions){
        console.log('Server is running');
        const table = new CreateTable().execute(opttions);
        const wasSaved = new SaveFile()
            .execute({
                content: table,
                path: opttions.destination,
                fileName: opttions.name,
            });
        if(opttions.showTable) console.log(table);
        if(wasSaved) console.log('File was saved');
        else console.log('File was not saved');
    }
}