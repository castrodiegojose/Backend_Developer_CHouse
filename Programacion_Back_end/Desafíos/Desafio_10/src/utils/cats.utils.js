const {faker} = require('@faker-js/faker')

async function generateCats(){
    return{
      
        cat: faker.animal.cat(),
        name: faker.name.firstName(),
        foto: faker.image.cats(440,280,true),
   

    }
}

let prueba = generateCats();

console.log(prueba);

module.exports = generateCats;