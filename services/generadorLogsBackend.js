export default class GeneradorLogsBackend {

    constructor() {
    }

   static createLog(
       titulo,
       elemento
   ) {
        console.log(` `);
        console.log(` `);
        console.log(`#################### LOG : ${titulo} `);
       console.log(`=======> ELEMENTO: ${elemento}`);
       console.log(` `);
       console.log(` `);
    }
}