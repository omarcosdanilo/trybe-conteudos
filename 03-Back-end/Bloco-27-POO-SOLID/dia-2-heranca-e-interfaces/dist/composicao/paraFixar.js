"use strict";
;
class ConsoleLogger {
    log(param) {
        console.log(param);
    }
    ;
}
;
class ConsoleLogger2 {
    log(param) {
        console.log(param + 'da class ConsoleLogger2');
    }
    ;
}
;
const log1 = new ConsoleLogger();
const log2 = new ConsoleLogger2();
log1.log('primeiro log');
log2.log('segundo log');
;
class ExampleDatabase {
    constructor(logger = new ConsoleLogger()) {
        this.logger = logger;
    }
    save(key, value) {
        this.logger.log(`Salvando o valor ${value} na chave ${key}`);
    }
    ;
}
;
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();
const db1 = new ExampleDatabase(logger1);
const db2 = new ExampleDatabase(logger2);
const db3 = new ExampleDatabase();
db1.save('chave1', 'valor1');
db2.save('chave2', 'valor2');
db3.save('chave3', 'valor3');
