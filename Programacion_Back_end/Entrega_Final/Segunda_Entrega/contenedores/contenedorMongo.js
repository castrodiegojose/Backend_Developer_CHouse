import mongoose from 'mongoose';
import config from '../config.js'; 

try {
    mongoose.connect(config.mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    });
    console.log('Conectado a MongoDB');
    } catch (error) { console.log(error); }



export default class ContenedorMongo{
    constructor(collection){
        this.collection =collection;
        this.array= [];
        this.timestamp = `${(new Date()).toLocaleDateString()} - ${(new Date()).toLocaleTimeString()}`;
    }

    async getAll(){

        try {

            let readFile = await this.collection.find(); 
            return readFile;  
          
        }      
        catch(err) {return null;}

    }

    async getById(num){ 

        try{  
            console.log("entro al getbyid")
            this.array = await this.collection.find({_id: num});
            console.log(this.collection.find({_id: num}));

            if (this.array != []) return this.array;    
        
            return {Error:'No existe el ID'}
        }
        catch(err){
            throw new Error("ERROR AL ENLISTAR POR ID:", err);
        }
          
    }

    async save(objeto){
        try {

                this.array = await this.collection.find();
                
                let newid = this.array.length + 1;            
                 
                objeto.timestamp = this.timestamp;
                objeto._id = newid;
                
               

                let newproducto = new this.collection(objeto);
                
                await newproducto.save();

               
            } 
            catch (err) {
              console.error("ERROR AL ESCRIBIR EL ARCHIVO", err);
            }
        }
    
        async deleteById(id){

            console.log("entro al deletebyid")
            try{
               await this.collection.deleteOne({_id: id});
               return {"se elimino el elemento con el ID":id}
            }
            catch(err){
                throw new Error("ERROR AL ELIMINAR POR ID:", err);
            }
        }

        async deleteAll(){
        
            try{
                await this.collection.deleteMany({});
            }
            catch(err){
                throw new Error("ERROR AL ELIMINAR TODOS:", err);
            }
        }

        async updateById(id, objeto){

            try{
                await this.collection.updateOne({_id: id}, objeto);
                return {"se actualizo el elemento con el ID":id, "con los siguientes datos":objeto}
            }
            catch(err){
                throw new Error("ERROR AL ACTUALIZAR EL ARCHIVO:", err);
            }
        }

}