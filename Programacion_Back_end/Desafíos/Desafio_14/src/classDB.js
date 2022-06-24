import {mysqlOptions} from './options/mariaDB.js';
import {sqliteOptions} from './options/sqliteDB.js'; 
import knex from 'knex';
import {logger, loggErrorFile} from './utils/logger.js'


const knexMysql = knex(mysqlOptions)
const knexsqLite = knex(sqliteOptions);

class BaseMaria {

    async createTable(){            

       await knexMysql.schema.hasTable('productos').then(function(exists){
            if(!exists){
                knexMysql.schema.createTable('productos', (table) =>{
                    table.increments('id');
                    table.string('producto');
                    table.integer('precio');
                    table.string('foto');
                }) 
                .then(() => logger.info('tabla creada'))
                .catch(err => {loggErrorFile.error(err); throw err})
            }
            else{
                logger.info('la tabla productos ya existe');
                }
        })
    }

    async  getAllProducts(){        
        let productos;         
         await knexMysql.from('productos')
             .select('*')
             .then((rows)=>{
                 productos=rows;
             })
             .catch(err => {loggErrorFile.error(err);})
         return productos;          
     } 
    
    guardarProducto(prod){
        knexMysql('productos').insert(prod)
            .then(() => logger.info('productos agregados'))
            .catch(err => {loggErrorFile.error(err); throw err})
    }

    async createTableMsj(){            

        await knexsqLite.schema.hasTable('mensajes').then(function(exists){
            if(!exists){
                knexsqLite.schema.createTable('mensajes', (table) =>{
                    table.increments('id');
                    table.string('author');
                    table.string('text');
                }) 
                .then(() => logger.info('tabla mensajes creada'))
                .catch(err => {loggErrorFile.error(err); throw err})
            }
            else{
                logger.info('la tabla mensajes ya existe');
                }
        })
    }

    async  getAllMessages(){        
        let mensajes;         
         await knexsqLite.from('mensajes')
             .select('*')
             .then((rows)=>{
                mensajes=rows;
             })
             .catch(err => {loggErrorFile.error(err);})
         return mensajes;          
     } 
     guardarMensaje(msj){
        knexsqLite('mensajes').insert(msj)
            .then(() => logger.info('mensajes agregados'))
            .catch(err => {loggErrorFile.error(err); throw err})
    }
}
const classMAria = new BaseMaria();
const classSqLite = new BaseMaria();

export {classMAria, classSqLite};