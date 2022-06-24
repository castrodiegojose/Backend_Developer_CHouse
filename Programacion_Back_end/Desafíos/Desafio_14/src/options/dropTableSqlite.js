///// Modulo creado para borrar la tabla de mensajes /////
import sqlite from 'sqlite3';
import { logger, loggErrorFile} from '../utils/logger';

let db = new sqlite.Database('../SqliteDB/mydb.sqlite');

db.run('DROP TABLE mensajes', (err)=>{
    if(err){
        loggErrorFile.error(err.message);
    }
    logger.info('table deleted!')
})
db.close()