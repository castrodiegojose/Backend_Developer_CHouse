const fs = require('fs');



class Contenedor {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
    this.array = [];
  }

  async save(objeto) {
    try {
      let readFile = fs.readFileSync(`${this.nombreArchivo}`, "utf-8");

      this.array = JSON.parse(readFile);

      let newid = this.array.length + 1;

      console.log(newid);

      objeto.id = newid;

      this.array.push(objeto);

      fs.writeFileSync(
        `${this.nombreArchivo}`,
        JSON.stringify(this.array, null, 2)
      );
    } catch (err) {
      console.error("ERROR AL ESCRIBIR EL ARCHIVO", err);
    }
  }

  getById(num) {

    let readFile = fs.readFileSync(`${this.nombreArchivo}`, "utf-8");

    this.array = JSON.parse(readFile);

    const i = this.array.find((item) => item.id === num);

    if (i) return i;

    return null;
    
  }


  getAll() {

    let readFile = fs.readFileSync(`${this.nombreArchivo}`, "utf-8");

    this.array = JSON.parse(readFile);

    return this.array;

  }

  deleteById(Number) {

    let readFile = fs.readFileSync(`${this.nombreArchivo}`, "utf-8");

    this.array = JSON.parse(readFile);

    const prod = this.array.findIndex((item) => item.id === Number);

    this.array.splice(prod, 1);

    fs.writeFileSync(
      `${this.nombreArchivo}`,
      JSON.stringify(this.array, null, 2)
    );

  }

  deleteAll() {
    fs.writeFileSync(`${this.nombreArchivo}`, "[]");
  }
}


const prueba = new Contenedor('./productos.txt');


prueba.save({
    title: "cuaderno",
    price: 16.5,
    thumbnail:'https://imagenes.com/131.png'
});



//console.log(prueba.getById(1));

//console.log(prueba.getAll());

//prueba.deleteById(1);

//prueba.deleteAll();