const {options} = require('./options/mariaDB.js');
const knex = require('knex')(options);

const cars2 = [
    {name:'mercedes', price: '50005800'}
]

async function getAll() {
    try{


    
    let cars = await knex.select("*").from("cars")
                
    return cars



    }catch(err) {throw err;}


   
}



const array = getAll().then(val =>{return val});
console.log(array)

// function getAll() {

// let tabla 

// knex.select("*").from("cars").then(
    
//     (rows) => console.log(rows)
//     )        


            
        
//         .catch((err) =>console.log(err))
//         .finally(()=> knex.destroy());

// return tabla

// }

// console.log(getAll());











// knex.schema.hasTable('cars').then(function(exists) {
//     if (!exists) {
//       return knex.schema.createTable('cars', table =>{
//         table.increments('id');
//         table.string('name');
//         table.integer('price');
//     })
//     .then(() => console.log('tabla creada'))
//     .catch(err => {console.log(err); throw err})
//     .finally(() => knex.destroy());

//     }
//     else{
//         console.log('la tabla ya existe')
//     }
//   });



// knex('cars').insert(cars2)
//   .then(() => {
//       console.log('datos agregados')
//     })
//   .catch(err => {
//       console.log(err)
//     })
//   .finally(() => knex.destroy())










// if(tabla){
//     knex('cars').insert(cars)
// }
// else{

//     knex.schema.createTable('cars', table =>{
//     table.increments('id');
//     table.string('name');
//     table.integer('price');
//     })
//     .then(() => console.log('tabla creada'))
//     .catch(err => {console.log(err); throw err})
//     .finally(() => knex.destroy());

    // knex('cars').insert(cars)

    // console.log('no existia la tabla')
// }