import { yarg  } from "./configs/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";



(async()=>{
    await main();
})();


async function main(){
    const {
        b:base, 
        l:limit, 
        s:showTable, 
        d:destination,
        n:name  
    } = yarg;
    ServerApp.run({base, limit, showTable, destination, name});
}
// console.log(yarg.b);
